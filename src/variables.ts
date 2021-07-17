import { useOpacity, useSize } from './hooks/style'

export const [drawerHeight, { calc: drawerCalcHeight }] = useSize(100, '%')
export const [drawerWidth] = useSize(240)
export const [drawerOffsetX, { toggle: toggleDrawerOffset }] = useSize(256)
export const [drawerOpacity, { toggle: toggleDrawerOpacity }] = useOpacity(1)

export const toggleDrawer = (close?: boolean) => {
  toggleDrawerOffset(close)
  toggleDrawerOpacity(close)
}

export const [fabHeight] = useSize(56)
export const [fabOffsetY, { toggle: toggleFab }] = useSize(fabHeight.value)
