<template>
  <v-app dark>
    <v-content>
      <menu-component></menu-component>
      <img alt="Vue logo" src="./assets/logo.png">
      <UsersComponent/>
      <v-container fluid>
        <router-view></router-view>
      </v-container>    </v-content>
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
