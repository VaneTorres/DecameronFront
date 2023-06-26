<template>
  <div class="detalles">
    <div class="modal fade" id="detalleModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Detalles</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <p class="col-md-6">
                <strong>Nit:</strong> <br />{{ hotel.nit }}
              </p>
              <p class="col-md-6">
                <strong>Nombre:</strong>
                <br />
                {{ hotel.nombre }}
              </p>
              <p class="col-md-6">
                <strong>Dirección:</strong> <br />{{ hotel.direccion }}
              </p>
              <p class="col-md-6">
                <strong>Ciudad:</strong><br />{{
                  hotel.ciudades ? hotel.ciudades.nombre : ""
                }}
              </p>
              <p class="col-md-6">
                <strong>Número de habitaciones:</strong>
                <br />{{ hotel.numero_habitaciones }}
              </p>
            </div>
            <!-- Tabla con informacion de habitaciones -->
            <div class="table-responsive">
              <table
                class="table table-striped table-hover table-bordered mt-3"
              >
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
                    <td>
                      {{
                        habitacion.acomodaciones_tipos.tipos_habitaciones.nombre
                      }}
                    </td>
                    <td>
                      {{ habitacion.acomodaciones_tipos.acomodaciones.nombre }}
                    </td>
                    <td>{{ habitacion.cantidad_habitaciones }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetallesHotel",
  props: {
    id: String,
  },
  data() {
    return {
      hotel: {
        habitaciones: [],
      },
    };
  },
  methods: {
    /* Obtiene el hotel */
    ObtenerHotel(val) {
      axios.get(this.$store.state.url + "hoteles/" + val).then((response) => {
        this.hotel = response.data.hoteles;
      });
    },
  },
  watch: {
    /* Cuando se cambia el id del hotel, se obtiene el hotel */
    id: function (val) {
      if (val) {
        this.ObtenerHotel(val);
      }
    },
  },
};
</script>

