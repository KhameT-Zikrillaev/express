<script setup>
import Contact from "@/pages/Contact.vue";
import { ref, onMounted, onUnmounted } from 'vue';
import { useCounterStore } from '../stores/counter';
import Replain from '@/components/Replain.vue';
const counterStore = useCounterStore();
const activescroll = ref(false)
counterStore.load()
const updateVisibility = () => {
  if (typeof window !== 'undefined') {
    const scrollTop = window.scrollY || 0;
    activescroll.value = scrollTop >= 900 ? true : scrollTop < 200 ? false : activescroll.value;
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
function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

  

</script>


<template>
  <Replain/>
    <div class="bg-white">
        <div v-if="counterStore.movieload" class="preload left-0 top-0">
            <video  class="w-full h-full object-cover" preload="auto" autoplay muted>
           <source src="@/components/assets/movie/video.mp4" type="video/mp4">
             </video>
        </div>
       
           <header>
            <LayoutNavbar/>
           </header>
           <main>
            <slot/>
           </main>
           <footer>
            <Contact/>
            <div class="endfooter py-[20px] px-[10px]">
                <div class="container">
                    <ul class="flex  flex-col text-center p768:flex-row p768:text-left gap-4 justify-between text-white">
                    <li class="ft-tvt1 font-bold">
                        © SPACE EXPRESS - ВСЕ ПРАВА ЗАЩИЩЕНЫ
                    </li>
                    <li class="ft-tvt1 font-thin">
                        Developed by ALLIANCEMEDIA
                    </li>
                </ul>
                </div>
               
      
            </div>
           </footer>
           <button @click="scrollToTop()" class="scrollbtn fixed bottom-[4.5%] right-[27%] p480:right-[15%] p768:right-[11%] p992:right-[9%]  p1240:right-[7%] transition-all" :class="{'z-[-99] opacity-0' : !activescroll,'z-[1] opacity-1' : activescroll}">
           <svg width="44" height="44" viewBox="0 0 44 44" fill="#f00" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1" fill="white">
                <path d="M2.85305e-06 22C2.32194e-06 34.1503 9.84974 44 22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 -4.30546e-07 22 -9.6165e-07C9.84974 -1.49276e-06 3.38415e-06 9.84973 2.85305e-06 22Z"></path>
                <path d="M30.8 25.3L22 16.5L13.2 25.3"></path>
            </mask>
            <path d="M29.3858 26.7142C30.1668 27.4953 31.4332 27.4953 32.2142 26.7142C32.9953 25.9332 32.9953 24.6668 32.2142 23.8858L29.3858 26.7142ZM22 16.5L23.4142 15.0858C23.0391 14.7107 22.5304 14.5 22 14.5C21.4696 14.5 20.9609 14.7107 20.5858 15.0858L22 16.5ZM11.7858 23.8858C11.0047 24.6668 11.0047 25.9332 11.7858 26.7142C12.5668 27.4953 13.8332 27.4953 14.6142 26.7142L11.7858 23.8858ZM22 42C10.9543 42 2 33.0457 2 22L-2 22C-2 35.2548 8.74516 46 22 46L22 42ZM2 22C2 10.9543 10.9543 2 22 2L22 -2C8.74517 -2 -2 8.74516 -2 22L2 22ZM22 2C33.0457 2 42 10.9543 42 22L46 22C46 8.74517 35.2548 -2 22 -2L22 2ZM42 22C42 33.0457 33.0457 42 22 42L22 46C35.2548 46 46 35.2548 46 22L42 22ZM32.2142 23.8858L23.4142 15.0858L20.5858 17.9142L29.3858 26.7142L32.2142 23.8858ZM20.5858 15.0858L11.7858 23.8858L14.6142 26.7142L23.4142 17.9142L20.5858 15.0858Z" fill="" class="top-svg" mask="url(#path-1-inside-1)"></path>
        </svg>
        </button>
    </div>
</template>


<style scoped>
.endfooter{
    background: rgb(17, 18, 22);

}
.preload{
    background: #000;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    position: fixed;
}
</style>