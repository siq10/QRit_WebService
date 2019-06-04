<template>
  <v-app dark>


    <menu-component></menu-component>

    <v-content>
     <HomeComponent v-if="$store.state.menuchoice===0"></HomeComponent>
      <v-container fluid>
        <UsersComponent v-if="$store.state.menuchoice===2"></UsersComponent>
        <LogComponent v-if="$store.state.menuchoice===1"></LogComponent>
        <PlacesComponent v-if="$store.state.menuchoice===3"></PlacesComponent>
        <TestComponent v-if="$store.state.menuchoice===4"></TestComponent>
        <ViewTypeComponent v-if="$store.state.menuchoice===5"></ViewTypeComponent>
        <QRListComponent v-if=" $store.state.menuchoice===6 "></QRListComponent>
        <OrdersListComponent v-if=" $store.state.menuchoice===7 "></OrdersListComponent>
        <router-view></router-view>
      </v-container>
    </v-content>
    <PushComponent></PushComponent>
  </v-app>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import UsersComponent from './components/UsersComponent.vue'
import MenuComponent from './components/MenuComponent.vue'
import LogComponent from './components/LogComponent.vue'
import PlacesComponent from './components/PlacesComponent.vue'
import TestComponent from './components/TestComponent.vue'
import PushComponent from './components/PushComponent.vue'
import ViewTypeComponent from './components/ViewTypeComponent.vue'
import QRListComponent from './components/QRListComponent.vue'
import OrdersListComponent from './components/OrdersListComponent.vue'

export default {
  computed: {
    // login(){
    //   console.log("comp" + this.$store.state.showlogin)
    //   return this.$store.state.showlogin
    // }
     
      },
  name: 'app',
  components: {
      HomeComponent,
      MenuComponent,
      UsersComponent,
      LogComponent,
      PlacesComponent,
      TestComponent,
      PushComponent,
      ViewTypeComponent,
      QRListComponent,
      OrdersListComponent,
  }
}
</script>
<style src='vuetify/dist/vuetify.min.css'>
  /* global styles */
</style>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:aquamarine;
}
</style>
<style>
  html{
    overflow-y:auto;
  }
  /*v-navigation-drawer v-navigation-drawer--clipped v-navigation-drawer--fixed v-navigation-drawer--is-mobile v-navigation-drawer--open theme--dark*/
</style>