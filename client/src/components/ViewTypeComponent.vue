<template>
        <v-container app>
        <v-form>
        <v-layout wrap>
            
            
            <p class="v-label theme--dark" id=para1> Select type of User from the available options below:  </p>
            
           
        </v-layout>
            
        
        <v-layout wrap>

           <v-flex xs12 md6>
           <div class ="v-all-labels">

           <dl >

           <v-radio-group v-model="checkedTypes">

  			<dt class="values">

            <v-radio id="waiter" value="waiter"  label="  Waiter"></v-radio>
            </dt>
        
            <br>

            <dt class ="values">
            <v-radio  id="manager" value="manager"  label="Manager"></v-radio>
            </dt>
     
            <br>

            <dt class="values">
            <v-radio id="client" value="client" label="Client"></v-radio>
            </dt>


            </v-radio-group>
               
            </dl>

            <br>
            <!-- <span>Checked types: {{ checkedTypes }}</span> -->
           
           
            <div id="wrapper">
            <v-btn @click.prevent="viewType" large> View your account!</v-btn>
           
            <br>
            <br>
            </div>



            </div>

            </v-flex >


        </v-layout>

      
            </v-form>
            
            
        </v-container>
</template>

<script>
export  default {
  	name: 'ViewTypeComponent',
  	data() {
      return {
      checkedTypes: "",
      }
      },

    methods:{
    	viewType: function(){
    		console.log(this.checkedTypes);
    		this.$store.commit("changeType",this.checkedTypes);
    	}
      }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#app{
	
	border-radius: 4px;
  	padding: 25px;
  	transition: all 0.2s;
}




#para1 {
	
	font-size:1.5rem;
	font-weight:30;
	justify-content: center;
	
}



#wrapper {
   display: flex;
  align-items: center;
  justify-content: center;
}

.v-all-labels
{

	display: block;
	position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    font-family: sans-serif;
    font-size: 20px;
    color: black;
    vertical-align: middle;
    text-align: center;
}



.values{

	color: #FFFFFF;
	text-align: left;

}



</style>
