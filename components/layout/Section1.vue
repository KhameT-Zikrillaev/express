<script setup lang="ts">
import images1 from '@/components/assets/images/bg-1.webp'
import images2 from '@/components/assets/images/bg-2.webp'
import images3 from '@/components/assets/images/bg-3.webp'
type TypeUser = {
  photo:string;
}


const items:TypeUser[] = [
  { photo: images1},
  { photo: images2},
  { photo: images3}
];
</script>


<template>
    <div>
      <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full', indicators: {
    wrapper: 'relative bottom-[50px] p480:bottom-[100px]',
    inactive: 'bg-transparent border-[3px] w-[15px] h-[15px]',
    active: 'bg-[#f00] border-[3px] w-[15px] h-[15px]',
  } }" class="overflow-hidden" indicators>
    
      <div class="relative  w-full h-full">
        <img :src="item.photo" class="w-full h-full p992:h-[900px] filter brightness-75" draggable="false" />
     
        <div class="absolute inset-0 flex items-center justify-center mx-[10px]">
          <span  class="text-white leading-[1.2] bg-black bg-opacity-50 px-4 py-2 rounded-2xl text-[14px] p768:text-[22px] max-w-[300px] p768:max-w-[500px] p992:text-[48px] p992:max-w-[900px] w-full font-bold text-center">
            ГАРАНТИЯ НАИБОЛЕЕ ВЫГОДНЫХ МАРШРУТОВ И ЦЕНА НА ПЕРЕВОЗКУ ГРУЗОВ
          </span>  
          
        </div>
       
      </div>
      
    </UCarousel>
    <span id="about" class="absolute mt-[-100px] z-[-99]"></span>
    </div>
</template>



<style  scoped>
/* Переопределение стилей для индикаторов карусели */

</style>