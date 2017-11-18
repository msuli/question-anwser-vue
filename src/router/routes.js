import Competition from '../components/competition/Competition.vue';
import User from '../components/user/user.vue';
import AddQuote from '../components/quote/AddQuote.vue';
import AnotherUser from '../components/anotherUser/User.vue';
import UserDetail from '../components/anotherUser/UserDetail.vue';
import UserStart from '../components/anotherUser/UserStart.vue';
import UserEdit from '../components/anotherUser/UserEdit.vue';
import Header from '../components/header/Header.vue';

export const routes = [
    {path: '', components: {
        default: Competition,
        'header-top': Header
    }},
    {path: '/user', components: {
        default: User,
        'header-top': Header
    }},
    {path: '/addQuote', components: {
        default:AddQuote,
        'header-bottom': Header
    }},
    {path: '/anotherUser', component: AnotherUser,
        children: [
            {path: '', component: UserStart, name: 'userStart'},
            {path: ':id', component: UserDetail},
            {path: ':id/edit', component: UserEdit, name: 'userEdit'},

        ]
    },
    {path: '*', redirect: '/'}
]