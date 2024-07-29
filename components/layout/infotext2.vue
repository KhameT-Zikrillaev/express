<script setup >
const props =defineProps({
    title:{
        type:String,
        required:true
     },
    color:{
       type:String,
       required:true
     },
     colorspan:{
       type:String,
       required:true
     }
})
</script>


<template>
    <div>
        <h3 class="text-[30px] p992:text-[50px] mx-auto text-center  p992:mx-[0px] font-bold p992:mt-[50px]" :style="{ color: color }">{{title}}
            <span class="animate-linear-1 mx-auto  mt-[5px] block w-[48px] h-[5px]" :style="{ background: colorspan }"></span>
        </h3>
    </div>
</template>



<style scoped>

</style>