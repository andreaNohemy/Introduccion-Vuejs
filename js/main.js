import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js";
import usuarioItem from "../componentes/usuarioItem.js";
import agregar from "../componentes/agregar.js";

Vue.component("agregar-usuario", agregar);
Vue.component("usuario-item", usuarioItem);

new Vue({
  el: "#formulario",
  data: {
    usuarios: []
  },
  methods: {
    agregarUsuario(nombre, apellido, edad) {
      const usuario = {
        primerNombre: nombre,
        primerApellido: apellido,
        edad: edad
      };

      this.usuarios.push(usuario);
    },

    eliminarUsuario(index) {
      this.usuarios.splice(index, 1);
      console.log(index);
    }
  }
});
