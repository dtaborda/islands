import React from 'react'
import { Grid } from './Grid';
import { Title } from './typography';

import styled from 'styled-components'

const Container: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export interface DashboardProps {
  axlesX: number
  axlesY: number
  islandCounter: number
}

export function Dashboard(props: DashboardProps) {
  const {
    axlesX,
    axlesY,
    islandCounter,
  } = props

  const cells = Array(axlesX).fill(Array(axlesY).fill(0));

  return (
    <Container>
      <Title>Number of islands discovered: {islandCounter}</Title>
      <Grid cells={cells} />
    </Container>
  )
}