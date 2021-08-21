<template>
  <div>

     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
       
        <router-link class="navbar-brand" :to="{ name: 'inicio' }">Inicio</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link  class="nav-link active" :to="{ name: 'busqueda' }">Búsqueda</router-link>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link active" :to="{ name: 'ventas' }">Ventas</router-link>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link active" :to="{ name: 'total' }">Total</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    
    <!-- <router-link :to="{ name: 'store' }"></router-link> -->

    <transition name="vista">
      <router-view></router-view>
    </transition>

    
  </div>
</template>

<script>

export default {
  
  computed: {
    
  },
};
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
