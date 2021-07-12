import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Meet from '../views/Meet.vue'
import Profile from '../views/Profile.vue'
import Me from '../views/Me.vue'
import CreatePost from '../views/CreatePost.vue'
import EditUser from '../views/EditUser.vue'

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Фид',
        component: Home
    },
    {
        path: '/meet',
        name: 'Люди',
        component: Meet
    },
    {
        path: '/me',
        name: 'Я',
        component: Me
    },
    {
        path: '/create-post',
        name: 'Создать публикацию',
        component: CreatePost
    },
    {
        path: '/profile/:id',
        name: 'Пользователь',
        component: Profile
    },
    {
        path: '/edit-user',
        name: 'Редактировать профиль',
        component: EditUser
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    animated: true
})

export default router