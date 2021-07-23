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
  tinyWorld: any
  islandCounter: number
}

export function Dashboard(props: DashboardProps) {
  const {
    islandCounter,
    tinyWorld,
  } = props

  return (
    <Container>
      <Title>Number of islands discovered: {islandCounter}</Title>
      <Grid cells={tinyWorld} />
    </Container>
  )
}