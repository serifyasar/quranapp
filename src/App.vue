<template>
  <div id="app">
    <nav v-if="$store.state.currentUser.email" class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Start Bootstrap</a><button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button
    ><!-- Navbar Search-->
      <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div class="input-group">
          <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button"><font-awesome-icon icon="fas fa-search"></font-awesome-icon></button>
          </div>
        </div>
      </form>
      <!-- Navbar-->
      <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="#">Settings</a><a class="dropdown-item" href="#">Activity Log</a>
            <div class="dropdown-divider"></div>
            <a @click="logout" class="dropdown-item">Logout</a>
          </div>
        </li>
      </ul>
    </nav>
    <div id="layoutSidenav">
      <div v-if="$store.state.currentUser.email" id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav">
              <div class="sb-sidenav-menu-heading">Yönetim Paneli</div>
              <router-link class="nav-link" to="/"
              ><div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                Anasayfa</router-link>


              <div class="sb-sidenav-menu-heading">Bileşenler</div>
              <router-link class="nav-link" to="/ayetler"
              ><div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                Ayetler</router-link
              ><a class="nav-link" href="tables.html"
            ><div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
              Kullanıcılar</a
            >
            </div>
          </div>
          <div class="sb-sidenav-footer" >
            <div class="small">Logged in as:</div>
            {{$store.state.currentUser.email.split('@')[0]}}
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main class="p-4">
         <router-view/>
        </main>
        <footer v-if="$store.state.currentUser.email" class="py-4 bg-light mt-auto">
          <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between small">
              <div class="text-muted">Copyright &copy; Your Website 2019</div>
              <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
  export default {
      name:'App',
      created(){
        this.$store.state.currentUser.email=firebase.auth().currentUser.email
      },
      methods:{
          logout(){
              firebase.auth().signOut();
              this.$store.state.currentUser={};
              this.$router.replace('login');
          }
      }
  }
</script>

<style lang="scss">

</style>
