<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-highlight:background.delayed="'red'">Directives</h1>
                <h3 v-highlight="'red'">Random text</h3>
                <p v-text="'Some text'"></p>
                <h1 v-local-highlight:background.delayed="'red'">Local Directive</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    // Add delay of 3 seconds before style is applied
                    var delay = 0;
                    if (binding.modifiers['delayed']) {
                    delay = 3000;
                    }
                    setTimeout(() => {
                    if (binding.arg == 'background') {
                        el.style.backgroundColor = binding.value;
                    } else {
                        el.style.color = binding.value;
                    }
                    }, delay);
                }
            }
        }
    }
</script>

<style>

</style>
