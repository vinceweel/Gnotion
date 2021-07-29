import { useToggle } from './hooks/global'
import { useUnitSize } from './hooks/style'

export const [baseSize] = useUnitSize(8)
export const [baseSizePadding] = useUnitSize(16)
export const [baseSizeAction] = useUnitSize(48)

export const [globalMock] = useToggle(false)
