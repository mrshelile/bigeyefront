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
                            </tr>
                        </thead>
                        <tbody>

                            <tr class="bg-white dark:bg-gray-800" v-for="suspect in suspects" :key="suspect.id_number">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                   {{ suspect.names }}
                                </th>
                                <td class="px-6 py-4">
                                 {{ suspect.id_number }}
                                </td>
                                <td class="px-6 py-4">
                                   {{ suspect.crime }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ suspect.status }}
                                </td>
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
        <!-- ... -->
        <div class="h-96 overflow-y-auto">
          <a class="p-8 max-w-lg  border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
             >                    
             <img  :src="getImageUrl" class="object-cover h-full w-96"  alt="Bigeye Logo" />

              <!-- <img :src="getImageUrl" class="shadow h-auto w-48 rounded-lg overflow-hidden border" /> -->
              <div class="mt-8">
                    <div>
                      <form class="w-full max-w-lg">
                          <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                 National Id Number
                              </label>
                              <input v-model="ID_num" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="6734...">
                              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Crime
                              </label>
                              <input v-model="crime" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="N/A">
                            </div>
                          </div>
                          <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">                              
                              <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
                              <input  @change="handleImageSelection" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none 
                              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" accept="image/x-png,image/gif,image/jpeg" type="file">
                              <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                            </div>
                          </div>
                          <div class="flex flex-wrap -mx-3 mb-2">
                            
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Status
                              </label>
                              <div class="relative">
                                <select v-model="statusCrime" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                  <option selected value="Nothing">Nothing</option>
                                  <option class="Very Low">Very Low</option>
                                  <option value="Low">Low</option>
                                  <option value="Normal">Normal</option>
                                  <option value="Moderate">Moderate</option>
                                  <option value="Critical">Critical</option>
                                </select>
                                
                              </div>
                            </div>
                          </div>
                        </form>
                  </div>
                  <div class="mt-5">
                      <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Searching</button>
                  </div>
              </div>
          </a>
        </div>
    </div>
</template>
<script lang="ts">
import server_link from '~/boot/server';
import {type Suspect} from '~/interfaces/Supects';

export default {
    name:"index",
    
    data() {
        return{
            suspects:[] as Suspect[],
            ID_num:'',
            crime:'N/A',
            image:'../../assets/images/placeholder.png',
            statusCrime:'Nothing'
        }
    },
    computed:{
        getImageUrl():string  {
        //    return new URL(`@/assets/images/placeholder.png`, import.meta.url).href;
        const data=  new URL(this.image,import.meta.url).href;
        return data;
        }
    },
    methods: {
    
    async handleSubmit(event:Event){
         event.preventDefault()
        //  this.isLoading = true;
        //  const formData = new FormData(event.target);
         
        //  for(var i=0;i<this.uploads.length;i++){
        //      formData.append("files",this.uploads[i]);
        //  }
        //  const response = await fetch(server+'/api/upload', {
        //      method: 'POST',
        //      body: formData,
        //  });

        //  // Handle the response (success or error)
        //  if (!response.ok) {
        //      alert(response)
        //      console.log(response.body)
        //      throw new Error(`Error uploading images: ${response.statusText}`);
        //  }
        //  else{
        //      if(response.ok){
        //          const imgs = await response.json();
        //          var images =[];
        //          for (let index = 0; index < imgs.length; index++) {
        //              images.push(imgs[index]['id']) ;
                     
        //          }
        //          const data={
        //              data:{
        //                  full_name:this.names,
        //                  national_id_number:Number.parseInt(this.national_id),
        //                  status:this.statusCrime,
        //                  crime:this.crime,
        //                  pictures:images,

        //              }
        //          }
        //          const res = await fetch(server+"/api/suspects",{
        //              method: 'POST',
        //              headers: {
        //              'Accept': 'application/json',
        //              'Content-Type': 'application/json'
        //              },
        //              body:JSON.stringify(data),
        //          });
        //          if(res.status==200)
        //              {
        //                  this.isLoading=false;
        //                  this.currentImage="../../assets/images/placeholder.png";
        //                  this.uploads=[];
        //                  this.names="";
        //                  this.national_id="";
        //                  this.crime="N/A";
        //                  this.statusCrime="Nothing";
        //                  alert("User added successfuly")
        //              }
        //          console.log(res.status);
        //      }
        //  }
         // const data = await response.json();
         // console.log(data)
     },

     handleImageSelection(event:Event) {
         const files = event.target.files;

         // Validate file types (optional)
         const allowedExtensions = ['png', 'jpg', 'jpeg'];
         const validImages = Array.from(files).filter((file:any) =>
             allowedExtensions.includes(file.type.split('/')[1])
         );
        //  console.log(validImages);
         if (validImages.length>0) {
             this.image =validImages;
         } else {
             alert('Invalid file types selected. Please choose PNG, JPG, or JPEG images.');
         }
     },
 },
   async mounted() {
       try {
        const res = await fetch(server_link+"/api/suspects?filters[isTrained]=True&&filters[status][$ne]=Nothing");
        const suspectsJson =(await res.json())['data'];
        // console.log(suspectsJson.length)
       for (let index = 0; index < suspectsJson.length; index++) {
        // const element = array[index];
        this.suspects.push({
            names: suspectsJson[index]['attributes']['full_name'],
            id_number: suspectsJson[index]['attributes']['national_id_number'],
            crime: suspectsJson[index]['attributes']['crime'],
            status: suspectsJson[index]['attributes']['status']
        });

       }
       } catch (error) {
        console.log(error);
       }

    //    console.log(this.suspects)
    },
}
</script>


  