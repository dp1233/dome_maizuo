<template>
    <div>
        <Header/>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '@/components/Navigation/Header.vue'
export default {
    components:{
        Header,
    }
}
</script>