<template>
    <div>
        <h3>Some User Details</h3>
        <p>Has some ID of  {{$route.params.id}} </p>
        <router-link 
            tag="button" 
            v-bind:to="{ name: 'userEdit', params: {id: $route.params.id} }">
                Edit User
        </router-link>
    </div>
</template>