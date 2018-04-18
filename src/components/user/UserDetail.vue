<template>
    <div>
        <h3>Some User Details</h3>
        <p>Has some ID of  {{$route.params.id}} </p>
        <router-link 
            tag="button" 
            v-bind:to="{ name: 'userEdit', params: {id: $route.params.id},
                        query: {locale: 'en', q: 100}}">
                Edit User
        </router-link>
    </div>
</template>