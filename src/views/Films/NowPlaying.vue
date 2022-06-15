<template>
    <div class="container">
        <van-pull-refresh
            v-model="isLoading"
            success-text="刷新成功"
            @refresh="onRefresh"
        >
            <van-loading class="loading" v-show="loading" type="spinner" size="24px" />
            <van-card
                v-for="item in list"
                :key="item.filmId"
                @click="toDetail(item.filmId)"
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
                        观众评分 
                        <span class="grade">
                            {{item.grade}}
                        </span>
                    </div>
                    <div class="label">
                        主演：{{item.actors | priceActors}}
                    </div>
                    <div class="label">
                        {{item.nation}} | {{item.runtime}}分钟
                    </div>
                    <div class="nowPlayingFilm-buy" style="float:right">
                        <span>购票</span>
                    </div>
                </template>
            </van-card>
        </van-pull-refresh>
    </div>
</template>
<script>
import uri from '@/config/uri.js'
import Vue from 'vue';
import { Loading,Toast ,Card,PullRefresh  } from 'vant';

Vue.use(Loading);
Vue.use(Toast );
Vue.use(Card);
Vue.use(PullRefresh);
export default {
    created(){
        this.getData()
    },
    data(){
        return{
            loading:true,
            isLoading:true,
            list:[],
            pageNum:1
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
        }
    },
    methods:{
        onRefresh(){
            this.getData();
        },
        getData(){
            this.$http.get(uri.getNowPlaying + 'pageNum=' + this.pageNum).then(ret => {
            if(ret.data){
                if(this.pageNum <= Math.ceil(ret.data.total / 10)){
                    this.list = [...ret.data.films,...this.list]
                    this.pageNum++
                }
                
                console.log(this.list)
            }else{
                Toast.fail('网络繁忙！');
            }
            this.loading = false
            this.isLoading = false
        })
        },
        toDetail(filmId){
            this.$router.push('/film/' + filmId)
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