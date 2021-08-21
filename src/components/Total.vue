
<template>
  <div>
      <h3>Total de la venta : ${{total}}</h3>
    <ul>
      <li
        v-for="({ codigo, nombre, precio }, index) in juegos"
        :key="index"
      >
        <label></label> {{ codigo }} | {{ nombre }} | {{ precio }} 
      </li>
    </ul>
  </div>
</template>
    
    <script>
export default {
  components: {},
 
  computed: {
    juegos() {
      return this.$store.state.juegosVendidos;
    },
    total(){
        return this.$store.getters.totalVentas;
    }
  },
};
</script>
    
<style scope>
h3{
  margin: 1rem;
}
ul{
  margin: 0.2rem;
}
</style>