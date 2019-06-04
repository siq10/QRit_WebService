<template>
   
    
    <div id="app">
  <v-app id="inspire">
  <v-layout >

      <v-flex xs10 offset-xs1 >
      
      <br>
      <br>
    <v-carousel>


      <v-carousel-item
        v-for="(image,index) in images"
          :key="image.id"
        :src="image.src"
        
      >
      <v-jumbotron dark>
            <v-container fill-height>
              <v-layout align-top>
                <v-flex>
                  <h3 class="display-3 blue--text" >{{ image.title }}</h3>
                  <span class="subheading" >{{ image.text }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-jumbotron>
      </v-carousel-item>
    </v-carousel>
     </v-flex>
    </v-layout>
  </v-app>
</div>
      

</template>



<script>
   export default {
        name:"HomeComponent",
         data () {
       return {
         
          images: [
                   {
                    id: '1',
                    src: require('@/assets/test.jpg'),
                    title: "Welcome to QRit!"
                },
                 {
                    id: '2',
                    src: require('@/assets/img2.jpg'),
                    title: "Excelent services!"
                },
                {
                    id: '3',
                    src: require('@/assets/img3.jpg'),
                    title: "A diversity of restaurants and coffee shops!"
                },
                {
                    id: '4',
                    src: require('@/assets/img4.jpg'),
                    title: "Quality and high-standards"
                },
                {
                    id: '5',
                    src: require('@/assets/img5.jpg'),
                     title: "A trustworthy reservation system"
                },
                {
                    id: '6',
                    src: require('@/assets/img6.jpg'),
                    title:"Great atmoshpere!"
                }
                ]
      }
  },
  props: {
            source: String
        }

  }
</script>



<style lang="stylus" scoped>

.v-content {
  padding: 0em 20em;
}




.v-responsive {
  position: relative;
  overflow: hidden;
  flex: 1 0 auto;
  display: flex;
}
.v-responsive__content {
  flex: 1 0 0px;
}
.v-responsive__sizer {
  transition: padding-bottom 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
  flex: 0 0 0px;
}

  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>