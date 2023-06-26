<template>
  <div class="formulario">
    <div
      class="modal fade"
      id="formularioModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">{{ titulo }}</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs" id="TabsHotel" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="informacion-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#informacion-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Información tributaria
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="habitaciones-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#habitaciones-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Tipos de habitaciones
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <div
                class="tab-pane fade show active"
                id="informacion-tab-pane"
                role="tabpanel"
                aria-labelledby="informacion-tab"
                tabindex="0"
              >
                <div class="row mt-4">
                  <div class="col-md-6">
                    <label for="nit" class="form-label">Nit</label>
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': validaciones.nit }"
                      name="nit"
                      v-model="hotel.nit"
                    />
                    <div
                      class="invalid-feedback"
                      v-html="validaciones.nit"
                    ></div>
                  </div>
                  <div class="col-md-6">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': validaciones.nombre }"
                      name="nombre"
                      v-model="hotel.nombre"
                    />
                    <div
                      class="invalid-feedback"
                      v-html="validaciones.nombre"
                    ></div>
                  </div>
                  <div class="col-md-6">
                    <label for="ciudades" class="form-label">Ciudades</label>
                    <select
                      id="ciudades"
                      class="form-control"
                      :class="{ 'is-invalid': validaciones.ciudades }"
                      name="ciudades"
                      v-model="hotel.ciudad_id"
                    >
                      <option value="" selected>Seleccione una ciudad</option>
                      <option
                        v-for="ciudad in ciudades"
                        :key="ciudad.id"
                        :value="ciudad.id"
                      >
                        {{ ciudad.nombre }}
                      </option>
                    </select>
                    <div
                      class="invalid-feedback"
                      v-html="validaciones.numero_habitaciones"
                    ></div>
                  </div>
                  <div class="col-md-6">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': validaciones.direccion }"
                      name="direccion"
                      v-model="hotel.direccion"
                    />
                    <div
                      class="invalid-feedback"
                      v-html="validaciones.direccion"
                    ></div>
                  </div>
                  <div class="col-md-6">
                    <label for="numero_habitaciones" class="form-label"
                      >Número de habitaciones</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      :class="{
                        'is-invalid': validaciones.numero_habitaciones,
                      }"
                      name="numero_habitaciones"
                      v-model="hotel.numero_habitaciones"
                    />
                    <div
                      class="invalid-feedback"
                      v-html="validaciones.numero_habitaciones"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="habitaciones-tab-pane"
                role="tabpanel"
                aria-labelledby="habitaciones-tab"
                tabindex="0"
              >
                <div class="row mt-4">
                  <div class="col-md-6">
                    <label for="tipo_habitacion" class="form-label"
                      >Tipos de habitaciones</label
                    >
                    <select
                      class="form-control"
                      name="tipo_habitacion"
                      v-model="habitacion.tipo_habitacion"
                      v-on:change="ObtenerAcomodaciones"
                      :class="{
                        'is-invalid': validaciones_habitaciones.tipo_habitacion,
                      }"
                    >
                      <option value="" selected>Seleccione una tipo</option>
                      <option
                        v-for="tipo_habitacion in tipo_habitaciones"
                        :key="tipo_habitacion.id"
                        :value="tipo_habitacion.id"
                      >
                        {{ tipo_habitacion.nombre }}
                      </option>
                    </select>
                    <div
                      class="invalid-feedback"
                      v-html="validaciones_habitaciones.tipo_habitacion"
                    ></div>
                  </div>
                  <div class="col-md-6">
                    <label for="acomodacion" class="form-label"
                      >Acomodación</label
                    >
                    <select
                      class="form-control"
                      name="acomodacion"
                      v-model="habitacion.acomodacion"
                      :class="{
                        'is-invalid': validaciones_habitaciones.acomodacion,
                      }"
                    >
                      <option value="" selected>
                        Seleccione una acomodación
                      </option>
                      <option
                        v-for="acomodacion in acomodaciones"
                        :key="acomodacion.id"
                        :value="acomodacion.id"
                      >
                        {{ acomodacion.nombre }}
                      </option>
                    </select>
                    <div
                      class="invalid-feedback"
                      v-html="validaciones_habitaciones.acomodacion"
                    ></div>
                  </div>
                  <div class="col-md-6">
                    <label for="cantidad" class="form-label">Cantidad</label>
                    <input
                      type="text"
                      class="form-control"
                      :class="{
                        'is-invalid':
                          validaciones_habitaciones.cantidad_habitaciones,
                      }"
                      name="nit"
                      v-model="habitacion.cantidad_habitaciones"
                    />
                    <div
                      class="invalid-feedback"
                      v-html="validaciones_habitaciones.cantidad_habitaciones"
                    ></div>
                  </div>
                  <table class="table table-striped my-3">
                    <thead>
                      <tr>
                        <th>Tipo de habitación</th>
                        <th>Acomodación</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(habitacion, index) in hotel.habitaciones"
                        :key="index"
                      >
                        <td>{{ habitacion.tipo_habitacion }}</td>
                        <td>{{ habitacion.acomodacion }}</td>
                        <td>{{ habitacion.cantidad_habitaciones }}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-danger"
                            v-on:click="EliminarHabitacion(habitacion)"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="col-md-12 mx-auto">
                    <button
                      type="submit"
                      class="btn btn-outline-primary"
                      v-on:click="AgregarHabitacion"
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-outline-primary"
                v-on:click="Registro"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import "select2";
import Swal from "sweetalert2";

export default {
  name: "FormularioHotel",
  props: {
    titulo: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      total: 0,
      ciudades: [],
      acomodaciones: [],
      tipo_habitaciones: [],
      hotel: {
        nit: "",
        nombre: "",
        direccion: "",
        numero_habitaciones: 0,
        ciudad: "",
        habitaciones: [],
      },
      habitacion: {
        tipo_habitacion: "",
        acomodacion: "",
        cantidad_habitaciones: "",
      },

      url: this.$store.state.url,
      validaciones: [],
      validaciones_habitaciones: [],
    };
  },
  methods: {
    AgregarHabitacion() {
      this.validaciones_habitaciones.tipo_habitacion = !this.habitacion
        .tipo_habitacion
        ? "El tipo de habitación es obligatorio"
        : null;
      this.validaciones_habitaciones.acomodacion = !this.habitacion.acomodacion
        ? "La acomodación es obligatoria"
        : null;
      this.validaciones_habitaciones.cantidad_habitaciones = !this.habitacion
        .cantidad_habitaciones
        ? "La cantidad es obligatoria"
        : null;
      if (
        parseInt(this.habitacion.cantidad_habitaciones) + this.total >
        parseInt(this.hotel.numero_habitaciones)
      ) {
        this.validaciones_habitaciones.cantidad_habitaciones =
          "La cantidad debe ser menor o igual a " +
          (this.hotel.numero_habitaciones - this.total);
      } else {
        if (parseInt(this.habitacion.cantidad_habitaciones) < 1) {
          this.validaciones_habitaciones.cantidad_habitaciones =
            "La cantidad debe ser mayor a 0";
        }
      }
      if (this.validaciones_habitaciones.length != 0) {
        return;
      } else {
        this.total += parseInt(this.habitacion.cantidad_habitaciones);
        this.hotel.habitaciones.push({
          tipo_habitacion: this.tipo_habitaciones.find(
            (tipo_habitacion) =>
              tipo_habitacion.id == this.habitacion.tipo_habitacion
          ).nombre,
          tipo_habitacion_id: this.habitacion.tipo_habitacion,
          acomodacion_id: this.habitacion.acomodacion,
          acomodacion: this.acomodaciones.find(
            (acomodacion) => acomodacion.id == this.habitacion.acomodacion
          ).nombre,
          cantidad_habitaciones: this.habitacion.cantidad_habitaciones,
        });
        this.habitacion = {
          tipo_habitacion: "",
          acomodacion: "",
          cantidad: "",
        };
      }
    },
    EliminarHabitacion(habitacion) {
      this.total -=
        this.hotel.habitaciones.indexOf(habitacion).cantidad_habitaciones;
      this.hotel.habitaciones.splice(
        this.hotel.habitaciones.indexOf(habitacion),
        1
      );
    },
    ObtenerAcomodaciones() {
      axios
        .get(this.url + "acomodaciones/" + this.habitacion.tipo_habitacion)
        .then((response) => {
          this.acomodaciones = response.data;
        });
    },
    ObtenerHotel() {
      axios.get(this.url + "hoteles/" + this.id).then((response) => {
        this.hotel = response.data.hoteles;
        this.hotel.habitaciones = this.hotel.habitaciones.map((habitacion) => {
          this.total += parseInt(habitacion.cantidad_habitaciones);
          return {
            tipo_habitacion:
              habitacion.acomodaciones_tipos.tipos_habitaciones.nombre,
            tipo_habitacion_id:
              habitacion.acomodaciones_tipos.tipos_habitaciones.id,
            acomodacion_id: habitacion.acomodaciones_tipos.acomodaciones.id,
            acomodacion: habitacion.acomodaciones_tipos.acomodaciones.nombre,
            cantidad_habitaciones: habitacion.cantidad_habitaciones,
          };
        });
      });
    },
    Validaciones() {
      this.validaciones = [];
      this.validaciones.nit = !this.hotel.nit ? "El nit es obligatorio" : null;
      this.validaciones.nombre = !this.hotel.nombre
        ? "El nombre es obligatorio"
        : null;
      this.validaciones.direccion = !this.hotel.direccion
        ? "La dirección es obligatoria"
        : null;
      this.validaciones.numero_habitaciones = !this.hotel.numero_habitaciones
        ? "El número de habitaciones es obligatorio"
        : null;
      this.validaciones.numero_habitaciones =
        this.hotel.numero_habitaciones < 1
          ? "El número de habitaciones debe ser mayor a 0"
          : null;
      this.validaciones.ciudad = !this.hotel.ciudad_id
        ? "La ciudad es obligatoria"
        : null;
    },
    Registro() {
      this.Validaciones();
      if (this.validaciones.length != 0) {
        return;
      } else {
        if (this.titulo == "Nuevo hotel") {
          this.Registrar();
        } else {
          this.Actualizar();
        }
      }
    },
    Registrar() {
      axios
        .post(this.url + "hoteles", this.hotel)
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.$emit("actualizar");
          $("#formularioModal").removeClass("in");
          $(".modal-backdrop").remove();
          $("#formularioModal").hide();
        })
        .catch((error) => {
          this.validaciones = error.response.data.errors;
        });
    },
    Actualizar() {
      axios
        .put(this.url + "hoteles/" + this.id, this.hotel)
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });

          this.$emit("actualizar");
          $("#formularioModal").removeClass("in");
          $(".modal-backdrop").remove();
          $("#formularioModal").hide();
        })
        .catch((error) => {
          this.validaciones = error.response.data.errors;
        });
    },
  },
  watch: {
    /* Cuando se actualiza el id, se obtiene el hotel */
    id: function (val) {
      if (val) {
        this.ObtenerHotel();
      } else {
        this.hotel = {
          nit: "",
          nombre: "",
          direccion: "",
          numero_habitaciones: "",
          ciudad_id: "",
        };
      }
    },
  },
  mounted() {
    /* Ontiene las ciudades para el select */
    axios.get(this.url + "ciudades").then((response) => {
      this.ciudades = response.data;
    });
    /* Ontiene los tipos de habitaciones para el select */
    axios.get(this.url + "tipo_habitaciones").then((response) => {
      this.tipo_habitaciones = response.data;
    });
  },
};
</script>

