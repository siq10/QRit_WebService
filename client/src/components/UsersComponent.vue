<template>
  <div class="hello">
    <div class="muts" v-for="x in breeds">
        <h3>{{x[0]}}</h3>
        <p v-for="types in x[1]">{{types}}</p>
    </div>
  </div>
</template>

<script>
import UsersService from "../UsersService"
export default {
  name: 'UsersComponent',
  data() {
      return {
          data:{},
          breeds:[],
      }
  },
  created(){
      try{
          this.udata = UsersService.getUsers().then((data) => {
              console.log(data)
              this.breeds = Object.entries(data)
              alert("done1")
          })
      }
      catch(err)
      {
          console.log(err)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
