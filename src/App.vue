<template>
  <nav class="navbar bg-dark">
    <div class="container-fluid mx-5">
      <router-link to="/" class="navbar-brand">
        <img
          src="./assets/logo.png"
          alt="logo"
          width="130"
          class="d-inline-block align-text-top"
        />
      </router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
:root,
[data-bs-theme="light"] {
  --bs-dark-rgb: 43, 35, 90 !important;
}
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn-outline-primary {
  --bs-btn-color: #2b235a !important;
  --bs-btn-border-color: #2b235a !important;
  --bs-btn-hover-color: #fff !important;
  --bs-btn-hover-border-color: #fff !important;
  --bs-btn-focus-color: #fff !important;
  --bs-btn-hover-bg: #2b235a !important;
}
.btn-edit,
.btn-delete,
.btn-look {
  background-color: transparent;
  border: none;
}
.btn-delete {
  color: #e74c3c !important;
}
.btn-edit {
  color: #479ec5 !important;
}
.btn-look {
  color: #f39c12 !important;
}
.btn-edit:hover,
.btn-delete:hover {
  cursor: pointer;
}
h1 {
  font-family: "Times New Roman", Times, serif;
}
</style>

