<template>
    <div class="max-w-screen-xl mx-auto px-4 md:px-8">
        <div class="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table class="w-full table-auto text-sm text-left">
                <thead class="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                    <th class="py-3 px-6">Id</th>
                    <th class="py-3 px-6">Name</th>
                    <th class="py-3 px-6">Price</th>
                </tr>
                </thead>
                <tbody class="text-gray-600 divide-y">
                <tr v-for="user in testsUsers">
                    <td class="px-6 py-4 whitespace-nowrap">{{user.id}}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{user.name}}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{user.price}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import api from "../../api.js";

export default {
    name: "Index",
    data() {
        return {
            testsUsers: null,
        };
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        getUsers() {
            api.get('/api/auth/tests/')
                .then(data => {
                    this.testsUsers = data.data.data;
                });
        }
    }
}
</script>
