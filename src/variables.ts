import { useSize } from './hooks/style'

export const [drawerWidth] = useSize(210)
export const [drawerHeight, { calc: drawerCalcHeight }] = useSize(100, '%')

export const [fabHeight] = useSize(56)
export const [fabOffsetY, { change: chanegFab, toggle: toggleFab }] = useSize(fabHeight.value)
