import { watch } from 'vue'
import { useOpacity, useUnitSize } from './hooks/style'

// base
export const PADDING_SIZE_NORMAL = 16

// Drawer
export const DRAWER_WIDTH = 240
export const [drawerHeight, { calc: drawerCalcHeight }] = useUnitSize(100, '%')
export const [drawerWidth] = useUnitSize(DRAWER_WIDTH)
export const [drawerOffsetX, { toggle: toggleDrawerOffset }] = useUnitSize(
  DRAWER_WIDTH + PADDING_SIZE_NORMAL,
)
export const [drawerOpacity, { toggle: toggleDrawerOpacity }] = useOpacity(1)

export const toggleDrawer = (close?: boolean) => {
  toggleMask(close)
  toggleDrawerOffset(close)
  toggleDrawerOpacity(close)
}

// Float Action Bar
export const [fabHeight] = useUnitSize(56)
export const [fabOffsetY, { toggle: toggleFab }] = useUnitSize(fabHeight.value)

// Mask
export const [maskVisibility, { toggle: toggleMask }] = useOpacity()

export const stopWatchMask = watch(maskVisibility, (visibility: number) => {
  const status = Boolean(visibility)

  toggleDrawer(!status)
})

// Initial Components
;(() => {
  toggleDrawer(true)
  toggleMask(true)
})()
