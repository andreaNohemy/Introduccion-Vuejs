export default {
  props: ["usuario"],

  template: `<tr>
                <td>{{ usuario.primerNombre }}</td>
                <td>{{ usuario.primerApellido }}</td>
                <td>{{ usuario.edad }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    v-on:click="$emit('borrar')"
                  >
                  Eliminar
                  </button>
                </td>  
              </tr>`
};
