<template>
    <div>
        <input
            v-model="email"
            type="email"
            placeholder="email:"
            class="30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
    </div>
    <div>
        <input
            v-model="password"
            type="password"
            placeholder="password:"
            class="30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
    </div>
    <div>
        <button @click="login"
                class="w-30 mt-2 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Sign in
        </button>
        <div v-if="error">{{error}}</div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },
    methods: {
        login() {
            axios.post('/api/auth/login', {email: this.email, password: this.password})
                .then(res => {
                    localStorage.access_token = res.data.access_token;
                    this.$router.push({name:'user.person'});
                    // const data = {
                    //     'token': res.data.access_token
                    // }
                    // localStorage.setItem('data', JSON.stringify(data));
                })
                .catch(res=>{
                    this.error = res.response.data.error;
                })
        }
    }
}
</script>
