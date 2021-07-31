<template>
    <div class="card text-center mt-4" v-for="p in pesanans" :key="p.id">
  <div class="card-header">
    Detail Pelanggan
  </div>
  <div class="card-body">
    <h5 class="card-title">{{p.pesanan}}</h5>
    <p class="card-text">{{p.no_tlp}}</p>
    <p class="card-text">{{p.alamat}}</p>
   
  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Editnama', params:{id:p.id}}">Edit</router-link>
        <button @click.prevent="namaDelete(p.id)" class="btn btn-danger">Delete</button>
  </div>
</div>

</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
      let pesanans = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/pesanan/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);

        pesanans.value = response.data.data;
        
      }).catch(error =>{
        console.log(error.response.data);
      });
    });

    function namaDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/pesanan/${id}`)
      .then(()=>{
        router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

    
    return {
      pesanans,
      router, 
      namaDelete,
      route
    }
  },
}
</script>

