import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {

    juegosVendidos: [],
    juegos: [
      {
        codigo: "0001", nombre: "Sekiro", stock: 100, precio: 30000, color:
          "red", destacado: "true"
      },
      {
        codigo: "0002", nombre: "Fifa 21", stock: 100, precio: 25000, color:
          "blue", destacado: "false"
      },
      {
        codigo: "0003", nombre: "Gears of War 4", stock: 100, precio: 15000, color:
          "green", destacado: "true"
      },
      {
        codigo: "0004", nombre: "Mario tennis Aces", stock: 100, precio: 35000, color:
          "yellow", destacado: "false"
      },
      {
        codigo: "0005", nombre: "Bloodborne", stock: 100, precio: 10000, color:
          "blue", destacado: "false"
      },
      {
        codigo: "0006", nombre: "Forza Horizon 4", stock: 100, precio: 20000, color:
          "red", destacado: "true"
      }
    ]
  },
  getters: {
    listadoJuegos: state => {
      return state.juegos.filter((juegos) => {
        return juegos.stock > 0
      })
    },
    filtrarJuegos: state => filtro => {
      return state.juegos.filter((juego) => juego.codigo.includes(filtro))
    },
    juegosTotales: state => {
      return state.juegos.length
    },
    stockTotal: state => {
      return state.juegos.reduce((acc, juego) => acc + juego.stock, 0)
    },
    totalVentas: state => {
      return state.juegosVendidos.reduce((acc, juego) => acc + juego.precio, 0)
    }

  },

  mutations: {
    venderJuego(state, codigo) {
      const juegoBuscado = state.juegos.find((juego) => juego.codigo === codigo)
      if (juegoBuscado) juegoBuscado.stock--
    },
    agregarJuego(state, juego) {
      state.juegosVendidos.push(juego)
    }
  },
  actions: {
    async venderJuego({ commit }, juego) {
      function timeOutPromesa(tiempo) {
        return new Promise((resolve) => {
          setTimeout(() => { resolve() }, tiempo)
        })
      }
      await timeOutPromesa(2000)
      commit('venderJuego', juego.codigo)
      await timeOutPromesa(1000)
      commit('agregarJuego', juego)
      alert('Venta procesada')

    }
  }
});

export default store;
