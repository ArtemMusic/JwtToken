<template>
    <router-link v-if="access_token" :to="{name:'users.index'}" class="mr-2">List</router-link>
    <router-link v-if="!access_token" :to="{name:'users.login'}" class="mr-2">Login</router-link>
    <router-link v-if="!access_token" :to="{name:'users.register'}" class="mr-2">Register</router-link>
    <router-link v-if="access_token" :to="{name:'user.person'}" class="mr-2">Person</router-link>
    <button @click="logOut" v-if="access_token">LogOut</button>
    <div class="mt-2">
        <router-view :key="$route.fullPath" ></router-view>
    </div>
</template>

<script>
import api from "../api.js";
export default {
    name: "App",
    data() {
        return {
            access_token: null
        }
    },
    mounted() {
        this.getAccessToken();
    },
    updated () {
        this.getAccessToken();
    },
    methods: {
        getAccessToken() {
            this.access_token = localStorage.getItem('access_token');
        },
        logOut() {
            api.post('/api/auth/logout')
                .then(data=>{
                    localStorage.removeItem('access_token');
                    this.$router.push({name:'users.login'});
                })
        }
    }
}
</script>
<style>

</style>
