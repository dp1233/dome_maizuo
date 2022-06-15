import Films from '@/views/Films/Index.vue'
import NowPlaying from '@/views/Films/NowPlaying.vue'
import ComingSoon from '@/views/Films/ComingSoon.vue'
import Detail from '@/views/Films/Detail'
var film = [
    {
        path: '/films',
        component: Films,
        children: [
            {
                path: 'nowPlaying',
                component:NowPlaying
            },
            {
                path: 'comingSoon',
                component:ComingSoon
            }
        ]
    },
    {
        path: '/film/:filmId',
        component:Detail
    }
]

export default film