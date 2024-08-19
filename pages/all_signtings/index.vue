<template>
    <div class="grid grid-cols-1 gap-4">
        <div>

            <div class="h-96 max-w-full  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">      
                <div class="relative overflow-x-auto overflow-y-auto h-80 max-w-full">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Full Names
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    National ID Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Location
                                </th>
                                
                                <th scope="col" class="px-6 py-3">
                                    Crime
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr class="bg-white dark:bg-gray-800" v-for="signt in signitings" :key="signt.id_number">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                   {{ signt.createdAt }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ signt.names }}
                                </td>
                                <td class="px-6 py-4">
                                 {{ signt.id_number }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ signt.location }}
                                   </td>
                                <td class="px-6 py-4">
                                   {{ signt.crime }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ signt.status }}
                                </td>
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
        <!-- ... -->
        
    </div>
</template>
<script lang="ts">
import server_link from '~/boot/server';
import type { Signting } from '~/interfaces/signting';

export default {
    name:"all_signtings",
    
    methods: {
        
    },
    data() {
        return{
            signitings:[] as Signting[]
        }
    },
   async mounted() {
       try {
        const res = await fetch(server_link+"/api/person-sightings/?populate=*");
        const suspectsJson =(await res.json())['data'];
        // console.log(suspectsJson)
       for (let index = 0; index < suspectsJson.length; index++) {
        // const element = array[index];
        console.log(suspectsJson[index]['attributes']['updatedAt'])
        var d =(new Date(suspectsJson[index]['attributes']['updatedAt']));
        let hour = d.getHours()+2;
        var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
        hour+ ":" + d.getMinutes();
        this.signitings.push({
            location: suspectsJson[index]['attributes']['location'],
            names:suspectsJson[index]['attributes']['suspect']['data']['attributes']['full_name'],
            id_number: suspectsJson[index]['attributes']['suspect']['data']['attributes']['national_id_number'],
            crime: suspectsJson[index]['attributes']['suspect']['data']['attributes']['crime'],
            status: suspectsJson[index]['attributes']['suspect']['data']['attributes']['status'],
            createdAt:datestring
        })
        // this.signitings.push({
        //     names: suspectsJson[index]['attributes']['full_name'],
        //     id_number: suspectsJson[index]['attributes']['national_id_number'],
        //     crime: suspectsJson[index]['attributes']['crime'],
        //     status: suspectsJson[index]['attributes']['status']
        // });

       }
       } catch (error) {
        console.log(error);
       }

    //    console.log(this.suspects)
    },
}
</script>


  