import {defineStore} from 'pinia'

const goBackArrow = defineStore('goBackArrow', {
    state: () => ({
        leftArrow: true,
        name: "go"
    }),
    getters: {
        doubleCount: (state) => state.leftArrow = false,
    },
    actions: {
        disableGoBackArrow()  {
            this.leftArrow = false;
        },
        goBackArrow() {
            this.leftArrow = true;
        },
        setPageName(pageName) {
            this.name = pageName;
        },
    },
})

export default goBackArrow;