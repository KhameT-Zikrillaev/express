<script setup>
import { ref, nextTick } from 'vue';
import img1 from '@/components/assets/images/work-slide1.webp';
import img2 from '@/components/assets/images/work-slide2.webp';
import img3 from '@/components/assets/images/work-slide3.webp';
import img4 from '@/components/assets/images/work-slide4.webp';
import img5 from '@/components/assets/images/work-slide5.webp';
import img6 from '@/components/assets/images/work-slide6.webp';

const images = [img1, img2, img3, img4, img5, img6];
const currentImageIndex = ref(0);

function nextImage() {
  const nextIndex = (currentImageIndex.value + 1) % images.length;
  currentImageIndex.value = nextIndex;
  scrollToThumbnail(nextIndex);
}

function prevImage() {
  const prevIndex = (currentImageIndex.value - 1 + images.length) % images.length;
  currentImageIndex.value = prevIndex;
  scrollToThumbnail(prevIndex);
}

function scrollToThumbnail(index) {
  nextTick(() => {
    const container = document.querySelector('.miniature-container');
    const thumbnail = container?.children[index];
    if (thumbnail) {
      const containerHeight = container.clientHeight;
      const thumbnailTop = thumbnail.offsetTop;
      const thumbnailHeight = thumbnail.clientHeight;
      
      // Scroll to center the clicked thumbnail
      container.scrollTo({
        top: thumbnailTop - (containerHeight / 2) + (thumbnailHeight / 2),
        behavior: 'smooth'
      });
    }
  });
}
</script>

<template>
  <div class="work  p768:h-[960px]">
    <div class="container py-[25px] px-[5px]">
      <LayoutInfotext title="Наши услуги" color="white" data-aos="fade-right"/>
      <div class="corusel flex w-full h-[250px] p480:h-[300px] mt-[35px] p768:h-[700px] relative overflow-hidden" data-aos="zoom-in">
        <div class="corusel-left border-red-400  w-[80%] relative">
         
          <img :src="images[currentImageIndex]" alt="Current Image" class="current-image w-full h-full p768:object-cover" />
          <button @click="prevImage" class="carousel-button transition-all prev-button left-[10px] opacity-0">&#8249;</button>
          <button @click="nextImage" class="carousel-button transition-all next-button right-[10px] opacity-0">&#8250;</button>
        </div>
        <div class="corusel-right overflow-hidden  w-[20%] flex flex-col items-center">
     
          <div class="miniature-container w-full  flex flex-col gap-1">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              :alt="'Thumbnail ' + (index + 1)"
              class="thumbnail h-[300px]"
              :class="{ 'active-thumbnail': index === currentImageIndex }"
              @click="currentImageIndex = index; scrollToThumbnail(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work{
  background: url(@/components/assets/images/work-bg.webp) no-repeat center;
    background-size: cover;
    margin-top: 80px;
    margin-bottom: -80px;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.corusel-left {
  position: relative;
  overflow: hidden;
}
.corusel-left img {
  display: block;
  width: 100%;
  height: 100%;
}
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  border: none;
  font-size: 6rem;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 10;
}
.corusel-left:hover .prev-button{
 opacity: 75%;
}
.corusel-left:hover .next-button{
 opacity: 75%;
}

.miniature-container {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  max-height: 100%;
}
.thumbnail {
  cursor: pointer;
  width: 100%;
  object-fit: cover;
  opacity: 40%;
  transition: opacity 0.3s ease, border 0.3s ease;
}
.thumbnail:hover {
  opacity: 0.8;
}
.active-thumbnail {
  border: 3px solid rgb(156, 0, 0);
  opacity: 1;
}
</style>
