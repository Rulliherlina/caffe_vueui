<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Pesanan</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Pesanan</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pesanans.pesanan" />
      <div class="alert alert-danger" v-if="validation.pesanan">
        {{ validation.pesanan[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">No Telepo</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="pesanans.no_tlp"/>
    <div class="alert alert-danger" v-if="validation.no_tlp">
        {{ validation.no_tlp[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan Alamat"
    v-model="pesanan.alamat" />
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
      </div>
      </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const pesanans = reactive({
      namapelanggan: '',
      no_tlp: '',
      alamat: '',
    })

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/namapelanggan/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama)

        pesanans.pesanan= response.data.data.pesanan
        pesanans.no_tlp = response.data.data.no_tlp
        pesanans.alamat = response.data.data.alamat
        
      }).catch(error =>{
        console.log(error.response.data)

    function update(){
      let pesanan = pesanans.pesanan
      let no_tlp = pesanans.no_tlp
      let alamat = pesanans.alamat
     

      axios.put(`http://127.0.0.1:8000/api/namapelanggan/${route.params.id}`, {
        pesanan: pesanan,
        no_tlp: no_tlp,
        alamat: alamat
     
      })
      .then(() => {
        router.push({
          name:'Nama'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      pesanans,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>
