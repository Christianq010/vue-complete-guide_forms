<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <h3>Loaded ID: {{id}} </h3>
        <button @click="navgateToHome" class="btn btn-info">Go to Home</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to, from) {
                this.id = to.params.id;
            }
        },
        methods: {
            navgateToHome() {
                this.$router.push('/');
            }
        }
    }
</script>
