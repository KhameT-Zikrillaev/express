<script setup>

</script>


<template>
    <div class="login mt-[50px]">
       <div class="container p-[10px]  p992:p-[25px] flex justify-center">
        <form action="" class=" flex flex-col gap-5 w-[300px] p480:w-[350px] text-[14px] p480:text-[18px]">
            <h3 class="font-bold text-center">Регистрация -</h3>
            <label class="font-bold" for="">Имя</label>
            <input class="block w-full p-2 border-[#212529] border  rounded-md" type="text">
            <label class="font-bold" for="">Имя </label>
            <input class="block w-full p-2 border-[#212529] border  rounded-md" type="text"> 
            <label class="font-bold" for="">Пароль </label>
            <input class="block w-full p-2 border-[#212529] border  rounded-md" type="text"> 
            <label class="font-bold" for="">Повторите пароль</label>
            <input class="block w-full p-2 border-[#212529] border  rounded-md" type="text"> 
            <label class="font-bold" for="">Номер телефона</label>
            <input class="block w-full p-2 border-[#212529] border  rounded-md" type="text">      
            <span><NuxtLink to="/" class=" px-4 py-2 rounded-md text-white bg-[#0d6efd]">Зарегистрироваться</NuxtLink></span>   
        </form>
       </div>
    </div>
</template>



<style scoped>

</style>