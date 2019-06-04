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
            <!--<v-btn large round depressed @click.prevent="seeBtn" >See QR CODE</v-btn>  -->
            <button class="btn btn-info" data-toggle="modal" data-target="#exampleModal">show QR CODE image</button>
             <example-modal ref="modal"></example-modal>
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


