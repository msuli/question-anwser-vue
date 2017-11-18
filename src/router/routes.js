import Competition from '../components/competition/Competition.vue';
import AddQuote from '../components/quote/AddQuote.vue';
import Header from '../components/header/Header.vue';
//懒加载
const User = resolve => {
    require.ensure(['../components/user/user.vue'], ()=>{
        resolve(require('../components/user/user.vue'))
    })
};
const AnotherUser = resolve => {
    require.ensure(['../components/anotherUser/User.vue'], ()=>{
        resolve(require('../components/anotherUser/User.vue'))
    })
};
const UserDetail = resolve => {
    require.ensure(['../components/anotherUser/UserDetail.vue'], ()=>{
        resolve(require('../components/anotherUser/UserDetail.vue'))
    })
};
const UserStart = resolve => {
    require.ensure(['../components/anotherUser/UserStart.vue'], ()=>{
        resolve(require('../components/anotherUser/UserStart.vue'))
    })
};

const UserEdit = resolve => {
    require.ensure(['../components/anotherUser/UserEdit.vue'], ()=>{
        resolve(require('../components/anotherUser/UserEdit.vue'))
    })
};

export const routes = [
    {
        path: '', components: {
        default: Competition,
        'header-top': Header
    }
    },
    {
        path: '/user', components: {
        default: User,
        'header-top': Header
    }
    },
    {
        path: '/addQuote', components: {
        default: AddQuote,
        'header-bottom': Header
    }
    },
    {
        path: '/anotherUser', component: AnotherUser,
        children: [
            {path: '', component: UserStart, name: 'userStart'},
            {
                path: ':id', component: UserDetail,
                beforeEnter: (to, from, next)=> {
                    console.log('beforeEnter');
                    next();
                }
            },

            {path: ':id/edit', component: UserEdit, name: 'userEdit'},

        ]
    },
    {path: '*', redirect: '/'}
]