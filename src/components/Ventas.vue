
<template>
  <div>
    <ul>
      <li
        v-for="({ codigo, nombre, color, stock, precio }, index) in juegos"
        :key="index"
        :style="{ background: color }"
      >
        <label></label> {{ codigo }} | {{ nombre }} | {{ stock }} | {{ precio }} <button @click="venta(codigo, nombre, precio)">vender</button>
      </li>
    </ul>
  </div>
</template>
    
    <script>
export default {
  components: {},
  methods:{
      venta(codigo, nombre, precio){
          const juego = {codigo, nombre, precio}
          this.$store.dispatch('venderJuego', juego )
      }
  },
  computed: {
    juegos() {
      return this.$store.state.juegos;
    },
  },
};
</script>
    
<style scope>
ul {
  margin: 1rem;
  list-style: none;
}
button {
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
    margin: 0.2rem;
    border-radius: 2px;
}

button:hover {background-color: #e7e7e7;}
</style>