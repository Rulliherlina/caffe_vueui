<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Pesanan</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Pesanan</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pesanans.menu" />
      <div class="alert alert-danger" v-if="validation.menu">
        {{ validation.menu[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">No Telepon</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="pesanans.jumlah"/>
    <div class="alert alert-danger" v-if="validation.jumlah">
        {{ validation.jumlah[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">total</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan total"
    v-model="pesanans.total" />
    <div class="alert alert-danger" v-if="validation.total">
        {{ validation.total[0] }}
      </div>
   </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const pesanan = reactive({
     pesanan: '',
      jumlah: '',
      total: '',
    })

    const validation = ref([])

    const router = useRouter()
    function store(){
      let pesanan= pesanan.menu
      let jumlah= pesanan.jumlah
      let total= pesanan.total

      axios.post('http://127.0.0.1:8000/api/pesanan', {
      pesanan:menu,
      jumlah:jumlah,
      total:total,
      }).then(() => {
        router.push({
          name:'Pesanan'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      pesanan,
      validation,
      router, 
      store
    
    }
  },
}
</script>