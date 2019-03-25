<template>
  <div class="hello">
    <div class="test">
        <h3>{{test}}</h3>
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
          test:"",
      }
  },
  created(){
      try{
          this.udata = UsersService.getUsers().then((data) => {
              console.log(data)
              this.test = data
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
    color: #42b983;}
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
