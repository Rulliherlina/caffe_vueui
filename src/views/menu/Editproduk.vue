<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit menu</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama menu</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="menus.nama_menu" />
      <div class="alert alert-danger" v-if="validation.nama_menu">
        {{ validation.nama_menu[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Harga menu</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="menus.harga_menu"/>
    <div class="alert alert-danger" v-if="validation.harga_menu">
        {{ validation.harga_menu[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Varian Rasa</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan Varian Rasa"
    v-model="menus.varian_rasa" />
    <div class="alert alert-danger" v-if="validation.varian_rasa">
        {{ validation.varian_rasa[0] }}
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

    const menus = reactive({
      nama_menu: '',
      harga_menu: '',
      varian_rasa: ''
    })

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/menu/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama_menu)

     menus.nama_menu = response.data.data.nama_menu
      menus.harga_menu = response.data.data.harga_menu
      menus.varian_rasa = response.data.data.varian_rasa
      }).catch(error =>{
        console.log(error.response.data)
      })
      
    function update(){
      let nama_menu = menus.nama_menu
      let harga_menu = menus.harga_menu
      let varian_rasa = menus.varian_rasa
    

      axios.put(`http://127.0.0.1:8000/api/menu/${route.params.id}`, {
        nama_menu: nama_menu,
       harga_menu:harga_menu,
        varian_rasa: varian_rasa
        
      })
      .then(() => {
        router.push({
          name:'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      menus,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>
