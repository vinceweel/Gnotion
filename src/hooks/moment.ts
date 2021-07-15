import moment from 'moment'
import 'moment/dist/locale/zh-cn'

moment.locale('zh')

export const useMoment = (inp?: moment.MomentInput, strict?: boolean) => {
  return moment(inp, strict)
}
