import React from 'react'
import { Grid, GridProps } from './Grid';

export interface DashboardProps {
  axlesX: number
  axlesY: number
}

export function Dashboard(props: DashboardProps) {
  const {
    axlesX,
    axlesY,
  } = props

  const cells = Array(3).fill(Array(3).fill(0));

  return <Grid cells={cells} />
}