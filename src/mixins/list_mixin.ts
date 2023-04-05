import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const list = ref<Object[]>([
    { id: uuidv4(), children: [] }
])
const _active_element_id = ref<string>('')
export const useListMixin = () => {
    const updata_active_id = (id: string) => {
        _active_element_id.value = id
    }
    const active_element_id = computed(() => _active_element_id.value)
    return { list, active_element_id, updata_active_id }
}