<template>

    <div class="grid grid-cols-2 gap-4">
        <div>

            <div class="h-96 max-w-full  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">      
                <div class="relative overflow-x-auto overflow-y-auto h-80 max-w-full">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Full Names
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    National ID Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Crime
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Is on lookup
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr class="bg-white dark:bg-gray-800" v-for="suspect in suspects" :key="suspect.id_number">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                   {{ suspect.names }}
                                </th>
                                <td class="px-6 py-4">
                                 {{ suspect.id_number}}
                                </td>
                                <td class="px-6 py-4">
                                   {{ suspect.crime }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ suspect.status  }}
                                    
                                 
                                </td>
                                <td class="px-6 py-4">
                                   
                                <label class="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" @change="deactivateSuspect($event,suspect.id)"  v-model="suspect.isLookup" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <!-- <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> -->
                                </label>
  
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
        <!-- ... -->
        <div>
            <div class="grid gap-4">
                <div> 
                    <!-- <iframe  class="w-full" height="315" src="http://localhost:65432/" title="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
                    <!-- <iframe class="h-auto max-w-full rounded-lg" src="https://www.youtube.com/watch?v=ZxL5Hm3mIBk" frameborder="0" allowfullscreen/> -->
                    <!-- <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""> -->
                    <iframe id="video-stream" class="w-full rounded-lg"  height="315" src="http://127.0.0.1:5000/video_feed" title="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"></iframe>
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <div v-for="i in 5" :key="i">
                        <img class="h-auto max-w-full rounded-lg" src="https://thumbs.dreamstime.com/z/no-video-sign-no-video-sign-vector-illustration-182354000.jpg" alt="">
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
import server_link from '~/boot/server';
import {type Suspect} from '~/interfaces/Supects';

export default {
    name:"search",
    
    methods: {
       async deactivateSuspect(event:Event,id:any) {
        // console.log(event.target.checked);
      try {
        const res = await fetch(server_link+"/api/suspects/"+id,{
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                data:{
                    isLookUp:event.target.checked
                }
            }),
        });
        console.log(res.json());
      } catch (error) {
        
      }
        }
    },
    data() {
        return{
            suspects:[] as Suspect[],
           
        }
    },
   async mounted() {
       try {
        const res = await fetch(server_link+"/api/suspects?");
        const suspectsJson =(await res.json())['data'];
        // console.log(suspectsJson.length)
       for (let index = 0; index < suspectsJson.length; index++) {
        // const element = array[index];
        // console.log(Boolean("false"))
        // suspectsJson[index]['attributes']['isLookUp']
        
        this.suspects.push({
            id:JSON.parse(suspectsJson[index]['id']),
            names: suspectsJson[index]['attributes']['full_name'],
            id_number: suspectsJson[index]['attributes']['national_id_number'],
            crime: suspectsJson[index]['attributes']['crime'],
            status: suspectsJson[index]['attributes']['status'],
            isLookup:JSON.parse(suspectsJson[index]['attributes']['isLookUp'])
        });
   
       }
       } catch (error) {
        console.log(error);
       }

    //    console.log(this.suspects)
    },
}
</script>


  