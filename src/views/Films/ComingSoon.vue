<template>
    <div class="container">
        <van-list
            v-model="isLoading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-card
                v-for="item in list"
                :key="item.filmId"
                >
                <template #thumb>
                    <div class="img">
                        <img :src="item.poster" width="66">
                    </div>
                
                </template>
                <template #title>
                    <div class="title">
                        {{item.name}}
                        <span class="item">
                            {{item.filmType.name}}
                        </span>
                    </div>
                </template>
                <template #desc>
                    <div class="label">
                        主演：{{item.actors | priceActors}}
                    </div>
                    <div class="label">
                        上映日期：
                        <span>
                            {{item.premiereAt | parsePremiereAt}}
                        </span>
                    </div>
                    <div class="nowPlayingFilm-buy" style="float:right">
                        <span>预购</span>
                    </div>
                </template>
            </van-card>
       </van-list>
    </div>
</template>
<script>
import uri from '@/config/uri.js'
import Vue from 'vue';
import moment from 'moment'
import { Loading,Toast ,Card,List  } from 'vant';


Vue.use(Toast );
Vue.use(Card);
Vue.use(List);
export default {
    data(){
        return{
            isLoading:false,
            list:[],
            pageNum:1,
            finished:false
        }
    },
    filters:{
         priceActors(actors){
           if(actors){
               var str = ""
               actors.forEach(el => {
                   str += el.name + " "
               })
               return str.length > 10 ? str.substr(0,10) + "..." : str
           }else{
               return "暂无主演"
           }
        },
        parsePremiereAt(time){
           const arr = [
               "周一",
               "周二",
               "周三",
               "周四",
               "周五",
               "周六",
               "周日"
           ]
           const week = arr[moment(time * 1000).format("d")]
           const day = moment(time * 1000).format("D")
           const month = moment(time * 1000).format("M")
           return `${week} ${month}月${day}日`
        }
    },
    methods:{
        onLoad(){
            this.getData();
        },
        getData(){
            this.$http.get(uri.getComingSoon + 'pageNum=' + this.pageNum).then(ret => {
            if(ret.data){
                if(this.pageNum <= Math.ceil(ret.data.total / 10)){
                    this.list = [...this.list,...ret.data.films]
                    this.pageNum++
                }else{
                    this.finished = true
                }
                
            }else{
                Toast.fail('网络繁忙！');
            }
            this.isLoading = false
        })
        }
    }
}
</script>
<style scoped>
.loading{
    text-align: center;
    padding-top: 10px;
}
.title{
    font-size: 16px;
    margin-right:5px;
}
.img{
    width: 66px;
    height: 94px;
    overflow: hidden;
}
.item{
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
}
.label{
    font-size: 13px;
    margin-top: 4px;
    color: #797d82;
}
.grade{
    color: #ffb232;
    font-size: 14px;
}
.nowPlayingFilm-buy{
    line-height: 25px;
    height: 25px;
    width: 50px;
    color: #ff5f16;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: relative;

    /* position: absolute; */
    border: 1px solid #ff5f16;
    top: -40%;
    right: -50%;
    bottom: -50%;
    left: 0;
    border-radius: 4px;
}
.container{
    margin-bottom:50px;
}
.van-card{
    height: 110px;
}
</style>