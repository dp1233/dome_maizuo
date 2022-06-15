<template>
    <!-- <div>
        <van-index-bar :index-list="indexList">
            <div v-for="item in dataList" :key="item.title">
                <van-index-anchor :index="item.title" />
                <van-cell v-for="el in item.data" :title="el.name" :key="el.cityId" />
            </div>
            
        </van-index-bar>
    </div> -->

    <div>
        <van-index-bar :index-list="indexList">
            <template v-for="(item,index) in dataList">
                <van-index-anchor :key="index" :index="index">{{item.title}}</van-index-anchor>
                <van-cell v-for="el in item.data" :title="el.name" :key="el.cityId" />
            </template>
        </van-index-bar>
    </div>
</template>
<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor, Cell } from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell)

import uri from '@/config/uri'
export default {
   data(){
       return{
           //索引列表
           indexList:[],
           //城市列表
           dataList:[],
           //临时列表
           strList:[]
       }
   },
   created(){
       //底部导消失
       this.$store.commit('global/setFooter',false)
        //发请求
       this.$http.get(uri.getCity).then(ret => {
           if(ret.status == 0){
               for(var i = 65; i <= 90; i++){
                   this.strList.push(String.fromCharCode(i))
               }
               this.strList.forEach((el) => {
                   let tmp = ret.data.cities.filter(item => el.toLowerCase() == item.pinyin.substr(0,1))
                   if(tmp.length > 0){
                       this.indexList.push(el)
                       this.dataList.push({
                           title:el,
                           data:tmp
                       })
                   }
               })
               console.log(this.dataList)
           }
       })
   },
   beforeDestory(){
        //底部导航显示
       this.$store.commit('global/setFooter',true)
   }
}
</script>