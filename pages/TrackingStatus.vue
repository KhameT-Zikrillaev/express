<script setup>

</script>


<template>
    <div class="login mt-[50px]">
       <div class="container p-[10px]  p992:p-[25px] flex justify-center">
        <form action="" class=" flex flex-col gap-1 max-w-[650px] w-full text-[14px] p480:text-[18px]">
            <label class="font-bold" for="">Введите трек номера</label>
            <div class="search flex">
                <input placeholder="Например: XZFW123ED12"  class="w-full p-2 border-[#212529] border  rounded-tl-md rounded-bl-md" type="text">
                <button   class="px-4 py-2 rounded-tr-md rounded-br-md text-white bg-[#0d6efd] ml-[-1px]"><img class="w-[25px]" src="@/components/assets/icon/search.svg" alt=""></button>
            </div>
           
            
        </form>
       </div>
    </div>
</template>



<style scoped>

</style>