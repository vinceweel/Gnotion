import { computed } from 'vue'
import useStore, { NOTION, NotionComponentNames } from './store'

export const useToggle = (name: NotionComponentNames) => {
  const { state, commit } = useStore()
  const status = computed(() => state[NOTION][name])
  const toggle = () => commit('_toggle_', name)
  return [status, toggle]
}
