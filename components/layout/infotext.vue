<script setup >
const props =defineProps({
    title:{
        type:String,
        required:true
     },
    color:{
       type:String,
       required:true
     }

})
</script>


<template>
    <div>
        <h3 class="text-[30px] p992:text-[50px] mx-auto text-center  p992:text-left p992:mx-[0px] font-bold p992:mt-[50px]" :style="{ color: color }">{{title}}
            <span class="animate-linear-1 mx-auto p992:mx-[0px] mt-[5px] block w-[48px] h-[5px] bg-[#f00]"></span>
        </h3>
    </div>
</template>



<style scoped>

</style>