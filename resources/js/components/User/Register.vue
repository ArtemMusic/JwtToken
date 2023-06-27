<template>
    <div>
        <input
            v-model="name"
            type="text"
            placeholder="name:"
            class="30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
    </div>
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
        <input
            v-model="password_confirmation"
            type="password"
            placeholder="confirm password:"
            class="30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
    </div>
    <div>
        <button @click="userRegistration"
                class="w-30 mt-2 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Sign up
        </button>
    </div>
    <div v-if="error">{{error}}</div>
</template>

<script>
import axios from "axios";

export default {
    name: "Register",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            error:null
        }
    },
    methods: {
        userRegistration() {
            axios.post('/api/users', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then(data => {
                localStorage.setItem('access_token', data.data.access_token);
                this.$router.push({name: 'user.person'})
            }).catch(res => {
                this.error = res.response.data.error;
            })
        }
    }
}
</script>
