import Competition from '../components/competition/Competition.vue';
import User from '../components/user/user.vue';
import AddQuote from '../components/quote/AddQuote.vue';
export const routes = [
    {path: '', component: Competition},
    {path: '/user', component: User},
    {path: '/addQuote', component: AddQuote}
]