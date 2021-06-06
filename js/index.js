const app = new Vue({
    el: '#app',
    data: {
        goals: [],
        userInput: ''
    },
    methods: {
        addGoal(event) {
            event.preventDefault();
            if(this.userInput){
                this.goals.push(this.userInput)
            }
        }
    }
})