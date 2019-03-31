<template>
  <v-app dark>
    <menu-component></menu-component>
    <v-content>
      <v-container fluid>
        <UsersComponent/>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import UsersComponent from './components/UsersComponent.vue'
import MenuComponent from './components/MenuComponent.vue'
export default {
  name: 'app',
  components: {
      MenuComponent,
      UsersComponent
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