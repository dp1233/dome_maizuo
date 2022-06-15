<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$store.state.global.isShowFooter"></Footer>
  </div>
</template>
<script>
import uri from '@/config/uri'
import Footer from '@/components/Navigation/Footer'
export default {
  created(){
    this.$http.get(uri.getCity)
    // this.$eventBus.$on("show_jiojio",(flag) => {
    //   this.isShow = flag
    // })
  },
  components:{
    Footer,
  }
}
</script>
