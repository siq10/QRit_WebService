<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-avatar  size=180 class="my-3" color="green darken-4">
                <v-icon v-if="!$store.state.current_user.image" size="140" dark>account_circle</v-icon>
                <img
                        v-else
                        :src="'http://127.0.0.1:8000/' + $store.state.current_user.image"
                >
            </v-avatar>
            <v-card>
                <v-list two-line>
                        <v-list-tile ripple @click="">
                            <v-list-tile-content>
                                <v-list-tile-title>Email</v-list-tile-title>
                                <v-list-tile-sub-title>{{$store.state.current_user.email}}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text>Edit</v-list-tile-action-text>
                                <v-icon color="grey lighten-1">edit</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-divider ></v-divider>
                    <v-list-tile ripple @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>Firstname</v-list-tile-title>
                            <v-list-tile-sub-title>{{$store.state.current_user.firstname}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-list-tile-action-text>Edit</v-list-tile-action-text>
                            <v-icon color="grey lighten-1">edit</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-divider ></v-divider>
                    <v-list-tile ripple @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>Lastname</v-list-tile-title>
                            <v-list-tile-sub-title>{{$store.state.current_user.lastname}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-list-tile-action-text>Edit</v-list-tile-action-text>
                            <v-icon color="grey lighten-1">edit</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-divider ></v-divider>
                    <v-list-tile >
                        <v-list-tile-content>
                            <v-list-tile-title>Roles</v-list-tile-title>
                            <v-list-tile-sub-title>Client</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>

            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

    export default {
        name: 'ProfileComponent',
        data() {
            return {
            }
        },
        methods:{

        },
        created(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*h3 {*/
        /*margin: 40px 0 0;*/
        /*color: #42b983;}*/
    /*ul {*/
        /*list-style-type: none;*/
        /*padding: 0;*/
    /*}*/
    /*li {*/
        /*display: inline-block;*/
        /*margin: 0 10px;*/
    /*}*/
    /*a {*/
        /*color: #42b983;*/
    /*}*/
</style>
