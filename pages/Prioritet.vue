<script setup lang="ts">
import { ref, onMounted } from 'vue';

const numbers = ref({
  tonsDelivered: 7899,
  satisfiedClients: 2757,
  partners: 154
});

const displayedNumbers = ref({
  tonsDelivered: 0,
  satisfiedClients: 0,
  partners: 0
});

function formatNumber(number: number, length: number): string {
  return number.toString().padStart(length, '0');
}

function animateNumbers() {
  const numberElements = document.querySelectorAll('.number');
  numberElements.forEach((el) => {
    const targetValue = parseInt(el.getAttribute('data-target') || '0', 10);
    let currentValue = 0;
    
    const updateNumber = () => {
      if (currentValue < targetValue) {
        currentValue += Math.ceil(targetValue / 100); // Adjust this for the speed of the animation
        el.textContent = formatNumber(currentValue, targetValue.toString().length);
        requestAnimationFrame(updateNumber);
      } else {
        el.textContent = formatNumber(targetValue, targetValue.toString().length);
      }
    };

    updateNumber();
  });
}

function resetNumbers() {
  const numberElements = document.querySelectorAll('.number');
  numberElements.forEach((el) => {
    el.textContent = formatNumber(0, 4); // Assuming a default width of 4 digits
  });
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers();
      } else {
        resetNumbers();
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

  const target = document.querySelector('.Prioritet-numbers');
  if (target) {
    observer.observe(target);
  }
});
</script>

<template>
  <div class="Prioritet bg-cover w-full h-[980px] mt-[0px] mb-[200px] p480:mb-[0px] p768:h-[780px] p768:mt-[70px] p768:mb-[150px] relative">
    <div class="container px-[20px] pt-[100px] p480:pt-[150px] p768:pt-[50px] p1024:pt-[0px]">
      <LayoutInfotext2 class="p-logo p768:mb-[15px] p768:pt-[15px]" title="Наши приоритеты" color="white" colorspan="#f00" data-aos="fade-right"/> 
      <p class="prioritet-text text-[17px] max-w-[980px] w-full text-center mx-auto leading-tight text-white font-bold" data-aos="zoom-in">
        Наша надежность, оперативность и высокий уровень сервиса доказаны многими годами работы с внешнеторговыми компаниями, многими выполненными перевозками и высокой оценкой наших партнеров. Наши Клиенты не могут себе позволить рисковать ценным грузом, поэтому доверяют перевозку товаров и продукции профессионалам.
      </p>
      <div class="Prioritet-content mt-[50px] p768:mt-[150px] p992:mt-[80px] flex flex-wrap justify-center p768:justify-between gap-[20px] p1024:gap-2">
        <div class="Prioritet-content-card flex flex-col items-center max-w-[95px] p992:max-w-[140px] p1024:max-w-[220px] w-full" data-aos="zoom-in">
          <img class="max-w-[55px] max-h-[55px] p480:max-w-[135px] p480:max-h-[135px] w-full h-full" src="@/components/assets/images/prioritet-1.webp" alt="">
          <h3 class="text-white text-[15px] p1024:text-[18px] text-center font-bold w-full mt-[20px] leading-tight">Экономия Вашего времени</h3>
        </div>
        <div class="Prioritet-content-card flex flex-col items-center max-w-[95px] p992:max-w-[140px] p1024:max-w-[220px] w-full" data-aos="zoom-in">
          <img class="max-w-[55px] max-h-[55px] p480:max-w-[135px] p480:max-h-[135px] w-full h-full" src="@/components/assets/images/prioritet-2.webp" alt="">
          <h3 class="text-white text-[15px] p1024:text-[18px] text-center font-bold w-full mt-[20px] leading-tight">Экономия Вашего времени</h3>
        </div>
        <div class="Prioritet-content-card flex flex-col items-center max-w-[95px] p992:max-w-[140px] p1024:max-w-[220px] w-full " data-aos="zoom-in">
          <img class="max-w-[55px] max-h-[55px] p480:max-w-[135px] p480:max-h-[135px] w-full h-full" src="@/components/assets/images/prioritet-3.webp" alt="">
          <h3 class="text-white text-[15px] p1024:text-[18px] text-center font-bold w-full mt-[20px] leading-tight">Экономия Вашего времени</h3>
        </div>
        <div class="Prioritet-content-card flex flex-col items-center max-w-[95px] p992:max-w-[140px] p1024:max-w-[220px] w-full" data-aos="zoom-in">
          <img class="max-w-[55px] max-h-[55px] p480:max-w-[135px] p480:max-h-[135px] w-full h-full" src="@/components/assets/images/prioritet-4.webp" alt="">
          <h3 class="text-white text-[15px] p1024:text-[18px] text-center font-bold w-full mt-[20px] leading-tight">Экономия Вашего времени</h3>
        </div>
      </div>
      <!-- Numbers -->
      <div class="Prioritet-numbers relative py-[5px] w-[280px] p768:w-full mx-auto mt-[25px] p992:mt-[100px] p768:h-[255px] p1024:w-[970px] p992:h-[345px] rounded-[25px]">
        <LayoutInfotext2 class="p-logo2 p992:mt-[-15px]" title="Мы в цифрах" color="white" colorspan="white" data-aos="fade-up"/>
        <div class="numbers-content p768:flex justify-evenly gap-[20px]">
          <div class="numbers-card flex flex-col items-center" data-aos="zoom-in">
            <h4 class="number text-[30px] p768:text-[60px] p992:text-[100px] text-white font-bold" data-target="7899">7899</h4>
            <p class="number-text mt-[5px] p768:mt-[20px] uppercase text-[14px] p480:text-[16px] text-white font-bold">ТОНН ДОСТАВЛЕНО</p>
          </div>
          <div class="numbers-card flex flex-col items-center" data-aos="zoom-in">
            <h4 class="number text-[30px] p768:text-[60px] p992:text-[100px] text-white font-bold" data-target="2757">2757</h4>
            <p class="number-text mt-[5px] p768:mt-[20px] uppercase text-[14px] p480:text-[16px] text-white font-bold">ДОВОЛЬНЫЕ КЛИЕНТЫ</p>
          </div>
          <div class="numbers-card flex flex-col items-center" data-aos="zoom-in">
            <h4 class="number text-[30px] p768:text-[60px] p992:text-[100px] text-white font-bold" data-target="154">154</h4>
            <p class="number-text mt-[5px] p768:mt-[20px] uppercase text-[14px] p480:text-[16px] text-white font-bold">ПАРТНЕРЫ</p>
          </div>
          <div class="bg-[#f00] absolute w-full h-[3px] mt-[100px] bottom-[-55px]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Prioritet {
    background: url(@/components/assets/images/prioritet-bg.webp) no-repeat center;
    background-size: cover;
}
.Prioritet-numbers {
    background: url(@/components/assets/images/numbers-bg.webp) no-repeat center;
}
.number {
    transition: opacity 0.5s ease, transform 0.5s ease; /* Ensure animation is smooth */
}
</style>
