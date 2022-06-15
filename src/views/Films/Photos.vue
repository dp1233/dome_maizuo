<template>
    <div>
        <div class="swiper mySwiper2">
            <div class="swiper-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
    mounted(){
        new Swiper(".mySwiper2", {
        slidesPerView: "auto",
        spaceBetween: 10,
      });
    }
}

</script>
<style scoped>
.swiper-slide {
       width: 150px;
      }
</style>