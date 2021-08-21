
<template>
  <div>
    <ul >
      <li v-for="({codigo, nombre, color, stock, precio} , index) in juegos" :key="index" :style="{background: color}" >
        <label ></label> {{codigo}} | {{nombre}} | {{stock}} | {{precio}}
      </li>
    </ul>
  </div>
</template>
    
    <script>
    
export default {
  props: ["juegos"],
};
</script>
    
<style scope>
    
</style>