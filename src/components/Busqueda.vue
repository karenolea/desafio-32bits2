
<template>
  <div class="m-3">
    <h1>Productos Disponibles</h1>
    <input type="text" v-model.trim="filtro" /> 
    <p>Los juegos totales son :{{juegosTotales}}</p> 
    <p>El stock total es : {{stockTotal}}</p>

    <lista-juegos :juegos="juegos"></lista-juegos>
    
    <!-- <ListaJuegos/> -->
  </div>
</template>

<script>
import { mapGetters} from "vuex";
import ListaJuegos from "./ListaJuegos.vue";

export default {
  data() {
    return {
        filtro : "",
        
    };
  },
  components: {
    ListaJuegos,
   
  },
  computed: {
    juegos() {
        if (this.filtro){
            return this.$store.getters.filtrarJuegos(this.filtro)
        }else{
            return this.$store.state.juegos;
        }
    },
    ...mapGetters(["juegosTotales", "stockTotal"])
  },
};
</script>

<style>
</style>