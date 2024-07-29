<script setup>
const props =defineProps({
    photo:{
        type:String,
        required:true
     },
     title:{
       type:String,
       required:true
     }

})
</script>


<template>
    <div class="card shadow-lg max-w-[350px] hover:cursor-pointer w-full overflow-hidden rounded-t-[32px] flex flex-col items-center relative">
        <div class="card-content  w-full h-[200px] overflow-hidden"><img class="card-content-img object-cover h-full" :src="photo" alt=""></div>
        <h3  class="text-[22px] px-[10px] leading-none  max-w-[300px] w-full text-center font-bold my-[30px] ">{{ title }}</h3>
        <span class="bg-[#f00] w-full h-1 absolute bottom-0"></span>
    </div>
</template>



<style scoped>

.card:hover  .card-content-img{
                transform: scale(1.3);
            }
.card-content{
          
            transition: 0.5s;
}
.card-content-img{
    width: 470px;
                transition: 0.5s;  
} 

</style>