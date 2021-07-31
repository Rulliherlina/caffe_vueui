<template>
<div class="nama">
<!--<img alt="Vue logo" src="../assets/logo.png"> -->
<Slider />
<hr class="my-3">
<router-link class="btn btn-primary" to="/createnama">Add Pesanan</router-link>

<Cardnama :pesanan="pesanan" />

<table class="table">
<thead>
<tr>
<th scope="col">Nama Pelanggan</th>
<th scope="col">No Telepon</th>
<th scope="col">Alamat</th>
<th scope="col">Aksi</th>
</tr>
</thead>
<tbody>
<tr v-for="(pesanans, index) in pesanan" :key="index">
<td>{{ pesanans.menu}}</td>
<td>{{ pesanans.jumlah }}</td>
<td>{{ pesanans.total }}</td>
<td>
<router-link class="btn btn-success" :to="{name:'Editpesanan', params:{id:pesanans.id}}">Edit</router-link>
<button @click.prevent="namaDelete(pesanans.id)" class="btn btn-danger">Delete</button>
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
import Cardpesanan from "@/components/Cardpesanan.vue";
import { ref, onMounted } from 'vue';

export default {
name: "Pesanan",
components: {
Slider,
Cardpesanan,
},
setup(){
let pesanan = ref([])

onMounted(() => {
axios.get('http://127.0.0.1:8000/api/pesanan')
.then(response => {
pesanan.value = response.data.data
})
.catch(error => {
console.log(error)
})
})

function pesananDelete(id){
axios.delete(`http://127.0.0.1:8000/api/pesanan/${id}`)
.then(()=>{
let z = this.pesanan.map(pesanan => pesanan.id).indexOf(id);
this.pesanan.splice(z, 1)
}).catch(error => {
console.log(error)
})
}

return {
pesanan,
pesananDelete
}
}
};
</script>