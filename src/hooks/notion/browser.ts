import { ref } from 'vue'
import useStore from '../store'

export const useBrowser = () => {
  const list = ref([])
  const { dispatch } = useStore()
  const load = async () => {
    list.value = await dispatch('getArticleList')()
  }

  return { list, load }
}
