import { computed, ComputedRef } from 'vue'
import useStore, { NOTION, NotionComponentNames } from './store'

export const useToggle = (
  name: NotionComponentNames,
): [ComputedRef<boolean>, CallableFunction] => {
  const { state, commit } = useStore()

  const status = computed(() => state[NOTION][name])
  const toggle = (_status: boolean) => {
    commit('_toggle_', name, typeof _status === 'boolean' ? _status : undefined)
  }

  return [status, toggle]
}
