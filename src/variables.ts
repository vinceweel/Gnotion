import { watch } from 'vue'
import { useOpacity, useSize } from './hooks/style'

// Drawer
export const [drawerHeight, { calc: drawerCalcHeight }] = useSize(100, '%')
export const [drawerWidth] = useSize(240)
export const [drawerOffsetX, { toggle: toggleDrawerOffset }] = useSize(256)
export const [drawerOpacity, { toggle: toggleDrawerOpacity }] = useOpacity(1)

export const toggleDrawer = (close?: boolean) => {
  toggleMask(close)
  toggleDrawerOffset(close)
  toggleDrawerOpacity(close)
}

// Float Action Bar
export const [fabHeight] = useSize(56)
export const [fabOffsetY, { toggle: toggleFab }] = useSize(fabHeight.value)

// Mask
export const [maskVisibility, { toggle: toggleMask }] = useOpacity()

export const stopWatchMask = watch(maskVisibility, (visibility: number) => {
  const status = Boolean(visibility)

  toggleDrawer(!status)
})

// Initial Components
toggleDrawer(true)
toggleMask(true)
