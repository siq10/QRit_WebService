<template>
    <v-container app>
        <QrcodeStream v-if="!done" :camera="camera" @detect="onDetect"></QrcodeStream>
        <v-alert
                :value="status!=''"
                type="success"
                class="my-3"
        >
            {{status}}
        </v-alert>

        <v-list three-line v-if="order">
            <o>{{place.type}} : {{place.name}}</o>
            <template v-for="(item, index) in menu">
                <v-list-tile
                        :key="item.title"
                        avatar
                        @click=""
                >
                    <v-list-tile-avatar>
                        {{item.price}}
                    <br>LEI
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.name"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>

            </template>
        </v-list>

    </v-container>
</template>

<script>
    import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
    import MenusService from "../MenusService"
    import PlacesService from "../PlacesService"

    export default {
        name: 'StartComponent',
        data() {
            return {
                status:"",
                camera:"auto",
                done:false,
                place:{},
                menu:[],
                order:false,
            }
        },
        components:{QrcodeStream},
        methods:{
            async onDetect (promise) {
                try {
                    const {
                        imageData,    // raw image data of image/frame
                        content,      // decoded String
                        location      // QR code coordinates
                    } = await promise
                    console.log(content)
                    this.camera="off"
                    var data = JSON.parse(content)
                    await this.$store.commit("setQr",data)
                    console.log(data)
                    this.status = "Qr has been decoded!"
                    this.done = true

                    const [place, products] = await Promise.all([PlacesService.getPlace(data.place_id),
                        MenusService.getMenu(data.place_id)]);
                    console.log(place,products)
                    this.place = place.data
                    this.menu = products.data
                    this.status=""
                    this.order = true;
                    //post order
                    // ...
                } catch (error) {
                    console.log(error.message)
                    this.camera='off'
                }
            }
        },
        created(){

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
