<template>

  <v-app id="inspire">
    <v-layout v-for="place in places">
      <v-flex xs8 offset-xs2 sm6 offset-sm3 md4 offset-md4>
        <br>
        <v-card >
          <v-img
            contain
            class="white--text"
            height="300px"
            :src="place.image"
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
              <span class="title blue--text">{{place.name}}</span><br>
              <v-rating readonly small dense background-color="orange" color="orange" v-model="place.rating"></v-rating>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn large round depressed :color="color" class="mx-auto" @click="colchange">Check place</v-btn>  
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>

</template>

<script>
import PlacesService from "../PlacesService"

export default {
    name: 'PlacesComponent',
    data() {
        return{
        list:null,
        places:[],
        color:"grey lighten-2"
        }
    },
    methods:{
        colchange(){
        this.color = this.color === "blue"?"grey lighten-2":"blue";
        },
         getPlaces: function(){
           PlacesService.getPlaces().then((data) => {
             this.places=data
             //console.log(this.places)
             for(var i in data)
             {
               data[i].image="http://127.0.0.1:8000/"+data[i].image+".jpg"
             }
          })
        }
      },
       mounted: function () {
        this.getPlaces();
    }
    
}
</script>