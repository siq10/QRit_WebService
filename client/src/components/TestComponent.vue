<template>
        <v-container app>
            <v-layout wrap>
                <v-flex xs12 md6>
                    <v-btn @click.prevent="getqr" large>TestQr</v-btn>
                </v-flex>
                <v-flex xs12 md6>
                    <img :src="qrbase64" contain
                         height="300px">
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
    import QrsService from "../QrsService"

    export default {
        name: 'TestComponent',
        data() {
            return {
                qrbase64:"",
            }
        },
        methods:{
        getqr()
        {
            try{
                this.udata = QrsService.getQr(1).then((data) => {
                    console.log(data)
                    this.qrbase64 = "data:image/png;base64, " + data
                },(reason)=>console.log(reason))
            }
            catch(err)
            {
                console.log(err)
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
