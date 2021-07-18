import { Ref } from 'vue'

export const leftRef = (leftRefValue?: Ref<any>, rightRefValue?: Ref<any>) => {
  if (!leftRefValue) return rightRefValue
  if (leftRefValue.value === null || leftRefValue.value === undefined)
    return rightRefValue
  return leftRefValue
}
