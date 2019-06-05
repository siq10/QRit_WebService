<template>
   
   <v-app id="inspire">
   <h1> These are the available tables from your place:</h1>
    <v-layout v-for="table in tables">

      <v-flex xs8 offset-xs2 sm6 offset-sm3 md4 offset-md4>
        <br>

        <v-card >
        <br>
          <v-img
            contain
            class="white--text"
            height="300px"
            :src="table.qr"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title class="justify-center">
            <div class="mx-5">
              <span class="title green--text">Number of the table: {{table. tableNumber }}</span>
            </div>
          </v-card-title>
          <v-card-actions>

           <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h1 class="green--text left">QR CODE</h1>
          
          </div>
        </div>
      </div>
    </transition>
    <button @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Open" }} here for details
    </button>
  </div>





          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
 

</template>

<script>

import TablesService from "../TablesService"




export  default {

  	name: 'QRListComponent',
  	data() {
      return {
         list:null,
        tables:[],
        qr:" ",
        isOpen: false,
      }
      },

    methods:{

    getTables: function(){

        TablesService.getTables().then((data) => {
             this.tables=data.payload
             console.log(this.tables)
             for(var i in data.payload)
             {
               data.payload[i].qr = "data:image/png;base64,"+data.payload[i].qr+" "
          }
        })
      },

},
    mounted: function () {
        this.getTables();
    }

      
    
    }

</script>






<style scoped>

.left {
  
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.modal {
  width: 800px;
  margin: 0px auto;
  padding: 150px;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
button {
  padding: 7px;
  margin-top: 10px;
  background-color: green;
  color: white;
  font-size: 1.1rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
</style>