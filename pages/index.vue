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

                            <tr class="bg-white dark:bg-gray-800" v-for="i in 8" :key="i">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Malefetsane Shelile
                                </th>
                                <td class="px-6 py-4">
                                   122121212121
                                </td>
                                <td class="px-6 py-4">
                                   Theft
                                </td>
                                <td class="px-6 py-4">
                                    Critical
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
                    <iframe  class="w-full" height="315" src="https://www.youtube.com/embed/3LXQWU67Ufk?si=hhcijQwOX66hHYtk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <!-- <iframe class="h-auto max-w-full rounded-lg" src="https://www.youtube.com/watch?v=ZxL5Hm3mIBk" frameborder="0" allowfullscreen/> -->
                    <!-- <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""> -->
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
// This compiler macro works in both <script> and <script setup>
definePageMeta({
  // you can also pass a string or a computed property
//   key: route => route.slug,
  transition: {
    name: 'index',
  },
  keepalive: {
    exclude: ['modal']
  },
})
</script>
  