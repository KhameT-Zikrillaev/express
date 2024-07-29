<script setup lang="ts">
import photo1 from '@/components/assets/images/services-1.webp'
import photo2 from '@/components/assets/images/services-2.webp'
import photo3 from '@/components/assets/images/services-3.webp'
import photo4 from '@/components/assets/images/services-4.webp'
import photo5 from '@/components/assets/images/services-5.webp'
import photo6 from '@/components/assets/images/services-6.webp'
</script>

<template>
    <div class="uslug my-[30px] p992:mt-[100px]">
     <div class="container px-4">
        <LayoutInfotext title="Наши услуги" color="black" data-aos="fade-right" /> 
            <div class="uslug__grid flex flex-wrap  gap-[30px] justify-center p1200:justify-between mt-[40px]">
                <LayoutCard :photo="photo1" title="Автомобильные перевозки" data-aos="zoom-in"/> 
                <LayoutCard :photo="photo2" title="Мультимодальные перевозки" data-aos="zoom-in"/>
                <LayoutCard :photo="photo3" title="Железнодорожные перевозки" data-aos="zoom-in"/>
                <LayoutCard :photo="photo4" title="Авиа карго и Авиапочта" data-aos="zoom-in"/>
                <LayoutCard :photo="photo5" title="4PL логистика" data-aos="zoom-in"/>
                <LayoutCard :photo="photo6" title="Перевозка сборных грузов" data-aos="zoom-in"/>
                
            </div>
     </div>
     <span id="rabota"></span>
    </div>
</template>



<style scoped>

</style>