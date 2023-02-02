import {defineStore} from 'pinia'

const getMachineId = defineStore('getMachineId', {
    state: () => ({
        MachineId: 0,
        name: "go"
    }),
    getters: {
        getMachineId: (state) => state.MachineId,
    },
    actions: {
        setMachineId(newMachineId) {
            this.MachineId = newMachineId;
        },
    },
})

export default getMachineId;