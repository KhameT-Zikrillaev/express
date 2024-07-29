<script setup>

</script>


<template>
    <div class="login mt-[50px]">
       <div class="container p-[10px]  p992:p-[25px] flex justify-center">
        <form action="" class=" flex flex-col gap-5 w-[300px] p480:w-[350px] text-[14px] p480:text-[18px]">
            <h3 class="font-bold text-center">Войти -</h3>
            <label class="font-bold" for="">Номер Телефона</label>
            <input class="block w-full p-2 border-[#212529] border  rounded-md" type="text">
            <label class="font-bold" for="">Пароль </label>
            <input class="block w-full p-2 border-[#212529] border  rounded-md" type="text">      
            <div class="flex items-center font-bold "><input type="checkbox" class="mr-[5px]">Запомни меня <NuxtLink to="/Account/ForgotPassword" class="ml-[15px] text-[#0d6efd] underline">Забыли пароль?</NuxtLink></div>
            <span><NuxtLink to="/" class=" px-4 py-2 rounded-md text-white bg-[#0d6efd]">Войти</NuxtLink></span>
            <div class="mt-[50px] text-[18px] font-bold flex justify-between">Еще нет аккаунта?<NuxtLink to="/Account/Register" class="text-[#0d6efd] underline">Зарегистрироваться</NuxtLink></div>
        </form>
       </div>
    </div>
</template>



<style scoped>

</style>