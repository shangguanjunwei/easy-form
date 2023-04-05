import { ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const list = ref<Object[]>([
    { id: uuidv4(), children: [] }
])
export const useListMixin = () => {

    watch(() => list.value, (newVal) => {
        console.log('list changed', newVal)
    }, { deep: true })
    return { list }
}