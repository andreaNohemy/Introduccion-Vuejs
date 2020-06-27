export default {
  data: function() {
    return {
      PrimerNombretxt: "pn",
      PrimerApellidotxt: "pa",
      Edadtxt: 22
    };
  },

  methods: {
    agregarUsuario() {
      this.$emit(
        "usuario-agregado",
        this.PrimerNombretxt,
        this.PrimerApellidotxt,
        this.Edadtxt
      );
      this.PrimerNombretxt = "";
      this.PrimerApellidotxt = "";
      this.Edadtxt = "";
    }
  },

  template: `<div>
    <div class="input-group mt-5 ml-2 col-4">
      <div class="input-group-prepend">
        <span class="input-group-text" id="nombre">Primer Nombre:</span>
      </div>
      <input
        name="primerNombre"
        type="text"
        class="form-control"
        aria-describedby="nombre"
        v-model="PrimerNombretxt"
      />
    </div>

    <div class="input-group mt-3 ml-2 col-4">
      <div class="input-group-prepend">
        <span class="input-group-text" id="apellido">Primer Apellido:</span>
      </div>
      <input
        name="primerApellido"
        type="text"
        class="form-control"
        aria-describedby="apellido"
        v-model="PrimerApellidotxt"
      />
    </div>

    <div class="input-group mt-3 ml-2 col-2">
      <div class="input-group-prepend">
        <span class="input-group-text" id="edad">Edad:</span>
      </div>
      <input
        name="edad"
        type="number"
        class="form-control"
        aria-describedby="edad"
        min="0"
        max="100"
        v-model="Edadtxt"
      />
    </div>

    <button
      type="button"
      class="btn btn-outline-success mt-3 offset-2"
      v-on:click="agregarUsuario"
    >
      Agregar
    </button>
  </div>`
};
