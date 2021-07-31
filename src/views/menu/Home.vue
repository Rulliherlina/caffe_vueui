<template>
<div class="home">
<!--<img alt="Vue logo" src="../assets/logo.png"> -->
<Slider />
<hr class="my-3">
<router-link class="btn btn-primary" to="/createmenu">Add menu</router-link>

<Cardmenu :menu="menu" />

<table class="table">
<thead>
<tr>
<th scope="col">Nama makanan</th>
<th scope="col">Harga </th>
<th scope="col">Stok</th>
<th scope="col">Aksi</th>
</tr>
</thead>
<tbody>
<tr v-for="(menus, index) in menu" :key="index">
<td>{{ menus.nama_makanan }}</td>
<td>{{ menus.harga }}</td>
<td>{{ menus.stok }}</td>
<td>
<router-link class="btn btn-success" :to="{name:'Editmenu', params:{id:menus.id}}">Edit</router-link>
<button @click.prevent="menuDelete(menus.id)" class="btn btn-danger">Delete</button>
</td>
</tr>
</tbody>
</table>
</div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardmenu from "@/components/Cardmenu.vue";
import { ref, onMounted } from 'vue';

export default {
name: "Home",
components: {
Slider,
Cardmenu,
},
setup(){
let menu = ref([])

onMounted(() => {
axios.get('http://127.0.0.1:8000/api/menu')
.then(response => {
menu.value = response.data.data
})
.catch(error => {
console.log(error)
})
})

function menuDelete(id){
axios.delete(`http://127.0.0.1:8000/api/menu/${id}`)
.then(()=>{
let z = this.menu.map(menu => menu.id).indexOf(id);
this.menu.splice(z, 1)
}).catch(error => {
console.log(error)
})
}

return {
menu,
menuDelete
}
}
};
</script>