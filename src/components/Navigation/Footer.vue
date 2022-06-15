<template>
    <div>
        <van-tabbar v-model="active" @change="changeItem"  active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item>
            <span>电影</span>
            <template>
                <van-icon class-prefix="iconfont icon-dianyingpiaoiocn" slot="icon" size="20" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item>
            <span>影院</span>
            <template>
                <van-icon class-prefix="iconfont icon-yingyuan" slot="icon" size="20" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item>
            <span>我的</span>
            <template>
                <van-icon class-prefix="iconfont icon-wode" slot="icon" size="20" />
            </template>
        </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import '@/assets/font/iconfont.css'
import Vue from 'vue';
import { Tabbar, TabbarItem, Icon } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
    created(){
        this.active = this.urls.indexOf(this.$route.path) > -1 ? this.urls.indexOf(this.$route.path) : 0
    },
    data(){
        return{
            active:0,
            urls:["/films/nowPlaying","/cinemas","/center"]
        }
    },
    methods:{
        changeItem(index){
            this.$router.push(this.urls[index])
        }
    }
}
</script>