<template>
    <div>
        <p>Number of Clicks  {{clicks}} </p>
        <p>Another Counter is: {{ counter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        computed: mapGetters({
            counter: 'doubleCounter',
            clicks: 'stringCounter'
        })
    }
</script>