import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'

import moment from 'moment'
import type { MomentInput } from 'moment'
import 'moment/dist/locale/zh-cn'

import { localeRef } from '../locale'

moment.locale(localeRef.value)

export const useMoment = (input?: Ref<MomentInput>, strict?: boolean) => {
  const now = ref('')

  const getInstance = () => moment(input?.value, strict)

  watchEffect(() => {
    const instance = getInstance()
    now.value = instance.toNow()
  })

  return <const>[{ now }, getInstance()]
}
