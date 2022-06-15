import Center from '@/views/Center/index'
import Login from '@/views/Center/Login.vue'
import Balence from '@/views/Center/Balence.vue'
var center = [
    {
        path: '/center',
        component:Center,
    },
    {
        path: '/login',
        component:Login
    },
    {
        path: '/balence',
        component:Balence
    }
]
export default center