<template>

 
   
   <v-layout wrap>

           <v-flex xs12 md6>
           <div >

            <h1 class='white--text'>Information about the available Orders:</h1>
            <br>
            <br>
           <dl>
         <dt  v-for="order in orders">

                <h2  class="blue--text" > ORDER {{order.id}}</h2>
                <br>
                <span class='white--text'> Table Number :{{order.tableNumber}}</span>
                <br>
                <span   class='white--text'> Waiter :{{order.username}}</span> 
                <br>
          <span class='white--text'> Client :{{order.firstname}} {{order.lastname}}</span> 
                <br>
                <br>

        </dt>
        </dl>
          </div>

          </v-flex>
          </v-layout>


</template>

<script>
import  OrdersService from "../OrdersService"

export default {
    name: 'OrdersListComponent',
    data() {
        return{
        orders:[],
        
        }
    },
    methods:{
        getOrders: function(){
           OrdersService.getOrders().then((data) => {
             this.orders=data.payload
             console.log(data.payload)

          })
        }
      },
       mounted: function () {
        this.getOrders();
    }
    
}
</script>