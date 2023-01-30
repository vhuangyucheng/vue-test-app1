import { defineStore } from 'pinia'
 export const goBackArrow = defineStore('goBackArrow', {
    state: true,
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        disableGoBackArrow() {
            this.state = false;
        },
        goBackArrow() {
            this.state = true;
        },
    },
})