<template lang="html">
    <v-flex md8 offset-md2 class="pa-1">


        <input label="Solo" placeholder="Type Your Message" v-model="message" solo ref="message">
        <button @submit.prevent="sendMessage">hello</button>

        <p v-if="isConnected">We're connected to the server!</p>
        <p>Message from server: "{{socketMessage}}"</p>
        <button @click="pingServer()">Ping Server</button>
    </v-flex>

</template>

<script>
export default {
    data() {
        return {
            isConnected: false,
            socketMessage: ''
        }
    },

    sockets: {
        connect() {
           
            this.isConnected = true;
        },

        disconnect() {
            this.isConnected = false;
        },
        messageChannel(data) {
            this.socketMessage = data
        }
    },

    methods: {
        pingServer() {
    
            this.$socket.emit('pingServer', 'PING!')
        },
        async sendMessage() {
            if (this.handle || this.message) {
                let message = {
                    handle: this.handle,
                    message: this.message
                }
                let response = await this.$socket.emit('chat', message);
                this.message = "";
                return response
            }
        }
    }
}
</script>