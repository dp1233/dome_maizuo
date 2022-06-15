<template>
    <div :class="{header:isSticky}">
        <div v-show="isSticky" class="nav">电影</div>
        <van-tabs @change="onClick" v-model="active" line-width="5rem">
            <van-tab title="正在热映"></van-tab>
            <van-tab title="即将上映"></van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
export default {
    created(){
        this.active = this.urls.indexOf(this.$route.path) > -1 ? this.urls.indexOf(this.$route.path) : 0
    },
    mounted(){
        window.addEventListener("scroll",() => {
            let scrollHeight = document.documentElement.scrollTop
            if(scrollHeight >= 150){
                this.isSticky = true
            }else{
                this.isSticky = false
            }
        })
    },
   data(){
       return{
           active:0,
           urls:["/films/nowPlaying","/films/comingSoon"],
           isSticky:false
       }
   },
   methods:{
       onClick(index){
           this.$router.push(this.urls[index])
       }
   }
}
</script>
<style scoped>
.header{
    position: fixed;
    z-index: 100;
    width: 100%;
}
.nav{
    text-align: center;
    height: 44px;
    line-height: 44px;
    border-bottom:1px solid #ededed ;
    background-color: #fff;
}
</style>