<template>
    <div class="body-bg">
        <!-- 海报 -->
        <div class="lazy-img">
            <div class="padding">
                <img v-lazy="filmInfo.poster" width="100%">
            </div>
        </div>
        <!-- 电影详情 -->
        <div class="film-detail">
            <div class="col">
                <div class="film-name">
                    <span class="name">
                        {{filmInfo.name}}
                    </span>
                    <span v-if="filmInfo.filmType" class="item">
                        {{filmInfo.filmType.name}}
                    </span>
                </div>
                <div class="film-grade">
                    <span class="grade">
                        {{filmInfo.grade}}
                    </span>
                    <span class="grade-text">
                        分
                    </span>
                </div>
            </div>
            <div class="film-dec">
                {{filmInfo.category}}
            </div>
            <div class="film-dec">
                {{filmInfo.premiereAt | parsePremiereAt}} 上映
            </div>
            <div class="film-dec">
                {{filmInfo.nation}} | {{filmInfo.runtime}} 分钟
            </div>
            <div class="test film-dec">
                {{filmInfo.synopsis}}
            </div>
            <div  class="film-synopsis film-dec" :class="{hidde:isHidde}">
                {{filmInfo.synopsis}}
            </div>
            <div class="toggle" @click="handleClick">
                <img :class="{upper:isUpper}" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAAAXNSR0IArs4c6QAAAQlJREFUKBWNkT1Lw1AUht8TIlJExKlj/4WQFNIacWyHCoLQ1cXdj59g7e7i6CA4OAhOpbdNIKn2X3Ts1NGhocdzbgmk1NJmuCHnvM+Tc+8lEyVfDBzDxdVZtTrBDk8/SSrI8EbAzBH4EAwPc/qJ4/RkG28zklVGWefoYL8BQg/gcsYYmmjU2iQx8feFZjSrjLIyBTBgdjlKn8V4TUQszfsw8LtFkYnTW/lrh5lJoBeq+TenRJkV5EEzHN2B+LEY0t6KnOkhrHtPObMi0KKOCV68iqS03JoacC6T/QLUDmveRw7re02gRT2o+QKfdq9aAE33HDSDwB/bz8Lyr0D7y6uid5t1+XLTFf8Bk+NpPwQfd0oAAAAASUVORK5CYII=" alt="">
            </div>
        </div>
        <!-- 演职人员信息 -->
        <div class="actors">
            <div class="actors-title-bar">
                <span class="actors-title-text">
                    演职人员
                </span>
            </div>
            <div :style="{padding:'0 15px'}">
                <Actors :key="filmInfo.actors.length">
                    <div class="swiper-slide" v-for="(item,index) in filmInfo.actors" :key="index">
                        <div class="actors-img">
                            <img :src="item.avatarAddress" width="85">
                        </div>
                        <span class="actors-name">
                            {{item.name}}
                        </span>
                        <span class="actors-role">
                            {{item.role}}
                        </span>
                    </div>
                </Actors>
            </div>
            
        </div>
        <!-- 剧照 -->
        <div class="photos">
            <div class="photos-title-bar">
                <span class="photos-title-text">
                    剧照
                </span>
                <span class="photos-to-all">
                    全部({{filmInfo.photos.length}})
                    <i class="iconfont icon-jiantou2" style="font-size:13px"></i>
                </span>
            </div>
            <div :style="{padding:'0 15px'}">
                
                    <Photos :key="filmInfo.actors.length">
                        <div class="swiper-slide" style="width:150px" v-for="(item,index) in filmInfo.photos" :key="index">
                            <div class="photos-img">
                                <img :src="item" alt="" width="150">
                            </div>
                        </div>
                    </Photos>
                    
                
            </div>
        </div>
    </div>
</template>
<script>
//引用懒加载
import Vue from 'vue'
import vueLazyLoad from 'vue-lazyload'
import moment from 'moment'
Vue.use(vueLazyLoad,{
    loading:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.51dangpu.com%2FUploads%2FImage%2FArticle%2F2017-12-09%2F5a2abbaa6bbda.png&refer=http%3A%2F%2Fm.51dangpu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656591764&t=bad851bf4acfec4e02864d90e7efa55a'
})
import uri from '@/config/uri'
import Actors from '@/views/Films/Actors'
import Photos from '@/views/Films/Photos'
import '@/assets/font_jiantou/iconfont.css'
export default {
     beforeCreate() {
        document.getElementsByTagName('body')[0].className = 'body-bg'
    },
    created(){
        this.$http.get(uri.getDetail + 'filmId=' + this.$route.params.filmId).then(ret => {
            this.filmInfo = ret.data.film
        })
        //进入时通知App隐藏底部导航
        // this.$eventBus.$emit("show_jiojio",false)
        this.$store.commit('global/setFooter',false)
    },
    beforeDestroy(){
        // this.$eventBus.$emit("show_jiojio",true)
        this.$store.commit('global/setFooter',true)
    },
   data(){
       return{
           filmInfo:{actors:[],photos:[]},
           isUpper:false,
           isHidde:true
       }
   },
   filters:{
       parsePremiereAt(time){
           return moment(time * 1000).format("YYYY-MM-DD")
       }
   },
   components:{
        Actors,
        Photos
   },
   methods:{
       handleClick(){
           this.isUpper = !this.isUpper
           this.isHidde = !this.isHidde
       }
   }
}
</script>
<style scoped>
.body-bg{
    font: 12px/1.5 Tahoma,Helvetica,Arial,sans-serif;
    font-family: Microsoft YaHei,Tahoma,Helvetica,Arial,sans-serif;;
    background-color: #f4f4f4
}
.lazy-img{
    width: 100%;
}
.padding{
    height: 56vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.film-detail{
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;
}
.col{
    display: flex;
    align-items: center;
}
.film-name{
    width: 256px;
}
.name{
    color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;
}
.item{
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    display: inline-block;
}
.film-detail .film-name span {
    vertical-align: middle;
}
.film-grade{
    width: calc(100% - 250px);
    text-align: center;
    color: #ffb332;
}
.grade{
    font-size: 18px;
    font-style: italic;
}
.grade-text{
    font-size: 10px;
}
.film-dec{
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
}
.test{
    width: calc(100vw - 30px);
    opacity: 0;
    position: absolute;
    top: 1px;
    margin-left: -10000px;
}
.hidde{
    height: 38px!important;
    overflow: hidden;
}
.film-detail .film-synopsis, .film .film-detail .hidde{
    transition: height 0.5s ease;
}
.film-synopsis{
    margin-top: 12px;
}
.toggle{
    text-align: center;
    display: block;
    height: auto;
    width: 20px;
    margin: auto;
    line-height: normal;
}
.toggle img {
    width: 8px;
    margin: auto;
}
.upper{
    transform: rotate(180deg);
}
.actors{
    margin-top: 10px;
    background-color: #fff;
}
.actors-title-bar {
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.actors .actors-title-bar .actors-title-text {
    font-size: 16px;
    text-align: left;
    color: #191a1b;
}
.actors .actors-title-bar span {
    display: inline-block;
    height: 22.5px;
    line-height: 22px;
}
.actors-img{
    width: 85px;
    height: 85px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.actors-name{
    padding-top: 10px;
    font-size: 12px;
    color: #191a1b;
    width: 85px;
    height: 18px;
    display: block;
    overflow: hidden;   
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.actors-role{
    font-size: 10px;
    color: #797d82;
    width: 85px;
}
.actors  span{
    display: block;
    text-align: center;
}
.photos{
    margin-top: 10px;
    margin-bottom: 60px;
    background-color: #fff;
}
.photos-title-bar {
    height: 62px;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.photos-title-text{
    font-size: 16px;
    text-align: left;
    color: #191a1b;
}
.photos-title-bar span {
    display: inline-block;
    height: 22.5px;
    line-height: 22px;
}
.photos-to-all {
    font-size: 13px;
    color: #797d82;
    float: right;
}
.photos-img{
    width: 150px;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>