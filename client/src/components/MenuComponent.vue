<template>
    <div>
        <v-navigation-drawer
                v-model="drawer"
                clipped
                fixed
                app
        >
            <v-list dense>
                <v-list-tile  v-if="!$store.state.current_user.email" @click="loginRedirect">
                    <v-list-tile-action>
                        <v-icon>lock_open</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Log in</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                 <v-list-tile  v-if="!$store.state.current_user.email" @click="registerRedirect">
                    <v-list-tile-action>
                        <v-icon>person_add</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Register</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile v-if="$store.state.current_user.email" @click="startRedirect">
                    <v-list-tile-action>
                        <v-icon>send</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Start</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="placesRedirect">
                    <v-list-tile-action>
                        <v-icon>restaurant_menu</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Places</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile v-if="$store.state.current_user.email" @click="profileRedirect">
                    <v-list-tile-action>
                        <v-icon>account_circle</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Profile</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile  v-if="$store.state.current_user.email" @click="logout" >
                    <v-list-tile-action>
                        <v-icon>lock</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Log out</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <!--  <v-list-tile v-if=" $store.state.userType==='manager' " @click="QRListRedirect"> -->
                 <v-list-tile @click="QRListRedirect"> 
                    <v-list-tile-action>
                        <v-icon>assignment</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>See QR List</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="OrdersRedirect"> 
                    <v-list-tile-action>
                        <v-icon>assignment</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>See Orders</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                

                <v-list-tile @click="viewTypeRedirect">
                    <v-list-tile-action>
                        <v-icon>visibility</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Change User Type</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="testsRedirect">
                    <v-list-tile-action>
                        <v-icon>tablet_android</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Tests</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title > <router-link class ="white--text" to="/">
     <span class ="white--text" v-on:click="HomeRedirect">QRit {{currentUser}}</span>
</router-link>
</v-toolbar-title>
        </v-toolbar>

        <v-footer app fixed>
            <span>&copy; 2019</span>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name:"MenuComponent",
        data: () => ({
            drawer: null
        }),
        computed:{
            currentUser()
            {
                return (this.$store.getters.getCurrentUser.firstname?"- " + this.$store.getters.getCurrentUser.firstname:"")
            }
        },
        methods:{
            HomeRedirect(){
                this.$store.commit('redirect',0)
            },

            loginRedirect(){
                this.$store.commit('redirect', 1)
                //this.$store.state.showlogin=1-this.$store.state.showlogin;
            },
            registerRedirect(){
                this.$store.commit('redirect', 2)
                //this.$store.state.showlogin=1-this.$store.state.showlogin;
            },
            placesRedirect(){
                this.$store.commit('redirect', 3)
            },
            testsRedirect(){
                this.$store.commit('redirect', 4)
            },
            viewTypeRedirect(){
                this.$store.commit('redirect', 5)
            },

            QRListRedirect(){
                this.$store.commit('redirect', 6)
            },
            OrdersRedirect(){
                this.$store.commit('redirect',7)
            },

            profileRedirect(){
                this.$store.commit('redirect', 5)
            },
            startRedirect(){
                this.$store.commit('redirect', 6)
            },
            logout(){
                this.$store.commit('setToken', "")
                this.$store.commit('setUser', {})
                this.placesRedirect();
            }

        },
        props: {
            source: String
        }
    }
</script>