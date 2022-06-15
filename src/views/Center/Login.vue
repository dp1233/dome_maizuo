<template>
    <div class="web-login">
        <div class="logo">
            <img width="60px" src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" alt="">
        </div>
        <div class="login-from">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="mobile"
                    name="mobile"
                    label="手机号"
                    placeholder="手机号"
                    :rules="[{pattern, required: true, message: '请填写正确手机号' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button square block type="info" native-type="submit">登录</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Form , Field,Button,Toast} from 'vant';

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast)

export default {
    created(){
        this.$store.commit('global/setFooter',false)
    },
    beforeDestroy(){
        this.$store.commit('global/setFooter',true)
    },
    data(){
        return{
            mobile:'',
            password:'',
            pattern:/^1[3-9]\d{9}$/

        }
    },
    methods:{
        onSubmit(values){
            this.$http.post('http://39.103.75.172:2004/backend/login',values).then(ret => {
                if(ret.error_code == 0){
                    Toast.success('登录成功！')
                    if(this.$route.query.callback){
                        this.$router.push(this.$route.query.callback)
                    }else{
                        this.$router.push('/center')

                    }
                    
                }else{
                    Toast.fail('登录失败！')
                }
            })
        }
    }
}
</script>
<style scoped>
.logo {
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
}
</style>