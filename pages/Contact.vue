<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
const token = import.meta.env.VITE_TG_TOKEN
const chatId = import.meta.env.VITE_TG_CHATID

const name = ref("")
const company = ref("")
const telnumber = ref("")
const message = ref("")
const notify = ()=>{
  toast.success("Успешно!",{
    autoClose:1000,
  });
}
const notifyError = ()=>{
  toast.error("Ошибка!",{
    autoClose:1000,
  });
}


const isValidName = ref(true);
const validateName = () => {
  isValidName.value = /^[a-zA-Z]+$/.test(name.value);
};



function submit(){
if(isValidName.value){
  const fullMessage= `Name: ${name.value}, telephone: ${telnumber.value}, Company : ${company.value}, Text: ${message.value} `;
     console.log(fullMessage)
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullMessage}`)
    name.value = "";
    company.value = "";
    telnumber.value="";
    message.value ="";
    notify()
} else{
  notifyError()
}
 
    
    
  
}


</script>

<template>
    <div class="contact bg-black pb-[10px] p631:pb-[100px] mt-[80px]" id="contact">
        <div class="container overflow-hidden py-[50px] px-[10px] flex justify-center p1240:justify-between flex-wrap gap-8">

            <div class="contact-left-con max-w-[280px] w-full text-white text-center p992:text-left">
                <LayoutInfotext class=" p992:mt-[-50px]" title="Контакты" color="white" data-aos="fade-right"/>  
                <p class="font-bold mt-[35px] text-[18px]" data-aos="fade-right">Авиапочта:</p>
                <ul class="mt-[15px]">
                    <li class="txt-n leading-tight" data-aos="fade-right"><a href="">+998 99 353 33 35</a></li>
                    <li class="txt-n leading-tight" data-aos="fade-right"><a href="">+998 99 813 59 99</a></li>
                </ul>
                <p class="font-bold mt-[35px] text-[18px]" data-aos="fade-right">Контейнер, фура:</p>
                <ul class="mt-[15px]" data-aos="fade-right">
                    <li class="txt-n leading-tight"><a href="">+998 90 331 50 05</a></li>
                </ul>
                <p class="font-bold mt-[35px] text-[18px]">E-mail:</p>
                <ul class="mt-[15px]">
                    <li><a href="" data-aos="fade-right">mr.bobur7146mail.ru</a></li>
                </ul>
                <p class="font-bold mt-[35px] text-[18px]" data-aos="fade-right">Мы в соц сетях:</p>
                <div class="browsers flex gap-4 mt-[15px] justify-center p992:justify-start" data-aos="fade-right">
                    <a class="hover:bg-white rounded-lg  transition-all" href=""><img class="w-[30px]" src="@/components/assets/images/instagram.webp" alt=""></a>
                    <a class="hover:bg-white rounded-lg  transition-all" href=""><img class="w-[30px]" src="@/components/assets/images/facebook.webp" alt=""></a>
                    <a class="hover:bg-white rounded-lg  transition-all" href=""><img class="w-[30px]" src="@/components/assets/images/telegram.webp" alt=""></a>
                </div>
            </div>

            <div class="contact-center-con-maps px-[15px] p631:px-[0px]   p631:max-w-[500px] w-full p992:h-[550px] order-2 p1240:order-1" data-aos="zoom-in">
                <iframe class="maps rounded-xl  w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11990.866135779439!2d69.2456487!3d41.2932734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x495c328d77eb7a4c!2sSpaceexpress!5e0!3m2!1sru!2s!4v1658771377391!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div class="contact-right-con-send px-[15px] p631:px-[0px] p631:max-w-[300px] p1240:max-w-[350px] w-full  order-1 p1240:order-2">
                <h3 class="text-[30px] p1240:text-[40px] mx-auto text-center  p992:text-left p992:mx-[0px] font-bold text-white" data-aos="fade-left">Оставьте заявку
               </h3>
               <form action="" method="POST" @submit.prevent="submit" class="flex flex-col gap-6 mt-[20px]">
                <input required v-model="name" @input="validateName" class=" py-[10px] pl-[20px] text-[16px] outline-none text-[#222221]" placeholder="Имя" type="text" data-aos="fade-left">
                <input required v-model="company" class=" py-[10px] pl-[20px] text-[16px] outline-none text-[#222221]" placeholder="Название компании" type="text" data-aos="fade-left">
                <input required v-model="telnumber" class=" py-[10px] pl-[20px] text-[16px] outline-none text-[#222221]" placeholder="Телефон" type="text" data-aos="fade-left">
                <textarea required v-model="message" class="user-text h-[175px] py-[10px] pl-[20px] outline-none" name="user_message" id="user-message" cols="30" rows="9" placeholder="Примечания"  data-aos="fade-left"></textarea>
                <button class="modal__button border-none outline-none bg-[#f00] text-[18px] text-white font-bold py-[20px] rounded-sm" type="submit" data-aos="fade-left" data-aos-offset="50" >Отправить</button>
               </form>
            </div>
        </div>

    </div>
</template>



<style scoped>

</style>