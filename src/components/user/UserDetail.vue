<template>
    <div>
        <h3>Some User Details</h3>
        <p>Has some ID of  {{$route.params.id}} </p>
        <router-link 
            tag="button" 
            v-bind:to="link">
                Edit User
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit', 
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en', 
                        q: 100
                    },
                    hash: '#data'
                }
            }
        }
    }
</script>
