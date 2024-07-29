<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore();
const burger = ref(false);
const isVisible = ref(false);
const toggleMobileMenu = () => {
  burger.value = !burger.value;
};

const updateVisibility = () => {
  if (typeof window !== 'undefined') {
    const scrollTop = window.scrollY || 0;
    isVisible.value = scrollTop >= 900 ? true : scrollTop < 200 ? false : isVisible.value;
    counterStore.topse = scrollTop >= 900 ? true : scrollTop < 200 ? false : counterStore.topse;
  }  
};

onMounted(() => {

  updateVisibility();


  window.addEventListener('scroll', updateVisibility);
  window.addEventListener('resize', updateVisibility);
});

onUnmounted(() => {

  window.removeEventListener('scroll', updateVisibility);
  window.removeEventListener('resize', updateVisibility);
});

</script>



<template>
  <div class="bg-white shadow-md top-0 left-0" :class="{'fixed z-10 w-full':isVisible}">
    <nav class="container">
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~desktop version -->
      <div
        class="navbar-full h-[80px] px-[15px] mt-[10px] hidden p992:flex items-center py-2"
      >
        <NuxtLink to="/" @click="counterStore.load">
          <img class="w-[80px]" src="@/components/assets/images/logo.webp" alt="" />
        </NuxtLink>
        <ul
          class="menu flex uppercase font-bold text-[14px] gap-8 ml-auto mr-[30px]"
        >
          <li class="nav_link relative cursor-pointer">
            <NuxtLink to="/#about" class="text-black hover:text-red-800 relative"
              >О нас</NuxtLink
            >
            <span class="line"></span>
          </li>
          <li class="nav_link relative cursor-pointer">
            <NuxtLink to="/#uslug"  class="text-black hover:text-red-800 relative"
              >Услуги</NuxtLink
            >
            <span class="line"></span>
          </li>
          <li class="nav_link relative cursor-pointer">
            <NuxtLink to="/#rabota" class="text-black hover:text-red-800 relative"
              >наши работы</NuxtLink
            >
            <span class="line"></span>
          </li>
          <li class="nav_link relative cursor-pointer">
            <NuxtLink to="/#contact" class="text-black hover:text-red-800 relative"
              >контакты</NuxtLink
            >
            <span class="line"></span>
          </li>
          <li class="nav_link relative cursor-pointer">
            <NuxtLink to="/TrackingStatus" class="text-black hover:text-red-800 relative"
              >ОТСЛЕЖИВАНИЕ ПОСЫЛКИ</NuxtLink
            >
            <span class="line"></span>
          </li>
        </ul>
        <NuxtLink
          to="/Account/Login"
          class="btn-acc border-[3px] border-[#df1b31] bg-[#df1b31] py-[8px] px-[32px] font-bold text-white uppercase rounded-lg mr-[20px] text-[14px] hover:bg-[white] hover:text-black transition-all"
          >Войти</NuxtLink
        >
      </div>

      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~mobile version -->

      <div
        class="navbar-mobile shadow-md bg-black h-[60px] flex items-center flex-col py-2 relative p992:hidden"
      >
        <button
          class="burger-btn absolute z-[1] mt-[10px] right-[10px] md:hidden"
          :class="{ active: burger }"
          @click="toggleMobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a
          href=""
          class="text-white block ml-auto mt-[10px] right-[50px] z-[2] absolute"
          >+99899 0000 441</a
        >
        <div
          class="mobile-menu z-[1]  fixed left-0 w-full h-[100dvb] bg-black flex flex-col items-center shadow-md p-[20px]"
          :class="{
            'top-[-100dvb] opacity-0': !burger,
            'top-0 opacity-100': burger,
          }"
        >
          <ul
            class="flex flex-col items-center mt-[50px] gap-8 text-white text-[24px] uppercase font-bold"
          >
            <li><NuxtLink to="/#about" @click="burger =false">О нас</NuxtLink></li>
            <li><NuxtLink to="/#uslug" @click="burger =false">Услуги</NuxtLink></li>
            <li><NuxtLink to="/#rabota" @click="burger =false">Наши работы</NuxtLink></li>
            <li><NuxtLink to="/#contact" @click="burger =false">Контакты</NuxtLink></li>
            <li class="text-center" ><NuxtLink to="/TrackingStatus" @click="burger =false">ОТСЛЕЖИВАНИЕ ПОСЫЛКИ</NuxtLink></li>
          </ul>
          <NuxtLink
            to="/Account/Login" @click="burger =false"
            class="btn-acc border-[3px] border-[#df1b31] bg-[#df1b31] py-[8px] px-[32px] font-bold text-white uppercase rounded-lg mr-[20px] text-[32px] mt-[20px] hover:bg-[white] hover:text-black transition-all"
            >Войти</NuxtLink
          >
        </div>
      </div>
    </nav>
  
  </div>
</template>
  
  
  <style scoped>

.menu li {
  position: relative;
}

.menu li a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.menu li a:hover {
  color: #f00;
}

.menu li span{
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #f00;
  transition: width 0.3s ease;
}

.menu li:hover span {
  width: 100%;
}
.btn-acc .router-link-active{
color:red;
}

.burger-btn {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  z-index: 10;
}

.burger-btn span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #f00;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.burger-btn.active span:nth-child(1) {
  animation: burgerX 0.5s forwards;
}

.burger-btn.active span:nth-child(2) {
  opacity: 0;
}

.burger-btn.active span:nth-child(3) {
  animation: burgerY 0.5s forwards;
}

/* Анимация возвращения в исходное состояние */
.burger-btn:not(.active) span:nth-child(1) {
  animation: burgerXReverse 0.5s forwards;
}

.burger-btn:not(.active) span:nth-child(2) {
  opacity: 1;
}

.burger-btn:not(.active) span:nth-child(3) {
  animation: burgerYReverse 0.5s forwards;
}

@keyframes burgerX {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(45deg) translateY(6px) translateX(8px);
  }
}

@keyframes burgerXReverse {
  0% {
    transform: rotate(45deg) translateY(6px) translateX(8px);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes burgerY {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(135deg) translateY(6px) translateX(-8px);
  }
}

@keyframes burgerYReverse {
  0% {
    transform: rotate(135deg) translateY(6px) translateX(-8px);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.mobile-menu {
  transition: 0.5s;
}
</style>
  