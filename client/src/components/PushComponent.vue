<template>

</template>

<script>

    export default {
        name: 'PushComponent',
        data() {
            return {
                publicVapidKey:"BHKYhmiTHfLUHeC360qI6aCS5w8d87sZdG4bbiWtbv2az4IBtDFAtu2jYSsKctfbWSPp-FNvfqeFrH1toH9gm64",
            }
        },
        methods:{
            async send() {
                console.log("Registeringd Service worker...")
                const register = await navigator.serviceWorker.register('../worker.js', {
                    scope:'/'
                })
                console.log("Registered Service worker...")
                const subscription = await register.pushManager.subscribe({
                    userVisibleOnly:true,
                    applicationServerKey: this.urlBase64ToUint8Array(this.publicVapidKey)
                })
                await fetch('https://localhost:5000/api/subscriptions',{
                    method:'POST',
                    body:JSON.stringify(subscription),
                    headers:{
                        'content-type' : 'application/json'
                    }
                })
                console.log("Push sent...")
            },
            urlBase64ToUint8Array(base64String) {
                const padding = '='.repeat((4 - base64String.length % 4) % 4);
                const base64 = (base64String + padding)
                    .replace(/-/g, '+')
                    .replace(/_/g, '/');

                const rawData = window.atob(base64);
                const outputArray = new Uint8Array(rawData.length);

                for (let i = 0; i < rawData.length; ++i) {
                    outputArray[i] = rawData.charCodeAt(i);
                }
                return outputArray;
            }
        },

        mounted(){
            if('serviceWorker' in navigator) {
                console.log("Initialising push component...")
                this.$eventHub.$on('webpush-example', () => {this.send().catch(err => console.error("err"))});
            }
        },
        beforeDestroy() {
            this.$eventHub.$off('webpush-example');
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
