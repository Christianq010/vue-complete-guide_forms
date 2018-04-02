export const fruitMixin ={
    data(){
        return {
            text: 'Some random stuff',
            fruits: ['Watermelon', 'Guava', 'Cranberry', 'Blackberry'],
            filterText: ''
        }
    },
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        }
    },
    computed: {
        filterFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            })
        }
    }
};