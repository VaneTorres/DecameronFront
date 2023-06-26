<template>
  <div class="container mt-2">
    <h1>Hoteles</h1>
    <button
      type="button"
      class="btn btn-outline-primary mb-2"
      data-bs-toggle="modal"
      data-bs-target="#formularioModal"
      v-on:click="ActualizarComponente(null)"
    >
      Nuevo Hotel
    </button>
    <div class="table-responsive">
      <table ref="tabla_hoteles" class="display responsive nowrap"></table>
    </div>
  </div>
  <DetallesHotel :id="id" />
  <FormularioHotel
    :titulo="titulo"
    :id="id"
    v-on:actualizar="ActualizarTabla"
  />
</template>

<script>
/* Imports */
import DetallesHotel from "@/components/DetallesHotel.vue";
import FormularioHotel from "@/components/FormularioHotel.vue";
import $ from "jquery";
import "datatables.net";
import axios from "axios";
import Swal from "sweetalert2";
import "datatables.net-responsive";

export default {
  name: "InicioView",
  /* Componentes */
  components: {
    DetallesHotel /* Modal de detalles del hotel */,
    FormularioHotel /* Modal del formulario para editar o agregar hotel */,
  },
  data() {
    return {
      id: null,
      titulo: "",
      hoteles: [],
    };
  },
  created() {
    /* Ontien los hoteles */
    axios.get(this.$store.state.url + "hoteles").then((response) => {
      this.hoteles = response.data.hoteles;
      $(this.$refs.tabla_hoteles).DataTable({
        language: {
          url: "//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json",
        },
        responsive: true,
        data: this.hoteles,
        columns: [
          {
            data: "nit",
            title: "Nit",
            className: "text-center",
            responsivePriority: 1,
          },
          { data: "nombre", title: "Nombre", className: "text-center" },
          { data: "direccion", title: "Dirección", className: "text-center" },
          { data: "ciudad", title: "Ciudad", className: "text-center" },
          {
            data: "numero_habitaciones",
            title: "Número de habitaciones",
            className: "text-center",
          },
          {
            data: "id",
            title: "Acciones",
            className: "text-center",
            responsivePriority: 1,
            render: function (data) {
              /* Boton de ver */
              var html =
                '<button class="btn-look"   data-bs-toggle="modal" data-bs-target="#detalleModal"></><i data-id="' +
                data +
                '" class=" fas fa-eye"></i></button>';
              /* Boton de editar */
              html +=
                '<button class="btn-edit"  data-bs-toggle="modal" data-bs-target="#formularioModal"><i data-id="' +
                data +
                '" class="fas fa-edit" ></i></button>';
              /* Boton de eliminar */
              html +=
                '<button class="btn-delete"><i class="fas fa-trash-alt" data-id="' +
                data +
                '"></i></button> ';
              return html;
            },
          },
        ],
      });
    });
    /* Eventos de los botones de la tabla */
    /* Boton de ver */
    $(document).on("click", ".btn-look", (e) => {
      this.ActualizarComponente($(e.target).attr("data-id"));
    });
    /* Boton de editar */
    $(document).on("click", ".btn-edit", (e) => {
      this.ActualizarComponente($(e.target).attr("data-id"));
    });
    /* Boton de eliminar */
    $(document).on("click", ".btn-delete", (e) => {
      Swal.fire({
        title: "¿Está seguro de eliminar el hotel?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí, eliminar",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              this.$store.state.url + "hoteles/" + $(e.target).attr("data-id")
            )
            .then((response) => {
              Swal.fire("¡Eliminado!", response.data.mensaje, "success");
              this.ActualizarTabla();
            });
        }
      });
    });
  },

  methods: {
    /* Actualiza la tabla de hoteles */
    ActualizarTabla() {
      axios.get(this.$store.state.url + "hoteles").then((response) => {
        this.hoteles = response.data.hoteles;
        //recargar tabla
        $(this.$refs.tabla_hoteles)
          .DataTable()
          .clear()
          .rows.add(this.hoteles)
          .draw();
      });
    },
    /* Actualiza el componente de formulario */
    ActualizarComponente(id) {
      this.id = null;
      if (id) {
        this.id = id;
        this.titulo = "Actualizar hotel";
      } else {
        this.titulo = "Nuevo hotel";
      }
    },
  },
};
</script>
