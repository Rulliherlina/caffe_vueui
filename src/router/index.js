import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/menu/Home.vue'
import Createmenu from '../views/menu/Createmenu.vue'
import Editmenu from '../views/menu/Editmenu.vue'
import Detailmenu from '../views/menu/Detailmenu.vue'
import Pesanan from '../views/pesanan/pesanan.vue'
import Createpesanan from '../views/pesanan/Createpesanan.vue'
import Editpesanan from '../views/pesanan/Editpesanan.vue'
import Detailpesanan from '../views/pesanan/Detailpesanan.vue'

const routes = [
{
path: '/',
name: 'Home',
component: Home
},
{
path: '/createmenu',
name: 'Createmenu',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Createmenu
},
{
path: '/editmenu/:id',
name: 'Editmenu',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editmenu
},
{
path: '/detailmenu/:id',
name: 'Detailmenu',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Detailmenu
},
{
path: '/pesanan',
name: 'pesanan',
component: pesanan
},
{
path: '/createpesanan',
name: 'Createpesanan',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Createpesanan
},
{
path: '/editpesanan/:id',
name: 'Editpesanan',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editpesanan
},
{
path: '/detailpesanan/:id',
name: 'Detailpesanan',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Detailpesanan
}
]

const router = createRouter({
history: createWebHashHistory(),
routes
})

export default router

