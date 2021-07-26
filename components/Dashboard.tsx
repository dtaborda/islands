import React from 'react'
import styled from 'styled-components'
import { Axles } from './Axles';
import { Grid } from './Grid';

const Container: any = styled.div`
  display: flex;
  flex-direction: ${({ direction }: any) => direction};
  justify-content: center;
  align-items: center;
`

export interface DashboardProps {
  tinyWorld: any
  onCreateIsland: any
  axlesX: number
  axlesY: number
}

export function Dashboard(props: DashboardProps) {
  const {
    tinyWorld,
    onCreateIsland,
    axlesX,
    axlesY,
  } = props

  return (
    <Container direction="row">
      <Axles maxAxles={axlesY} />
      <Container direction="column">
        <Axles isXAxis maxAxles={axlesX} />
        <Grid cells={tinyWorld} onCellClick={onCreateIsland} />
        <Axles isXAxis maxAxles={axlesX} />
      </Container>
      <Axles maxAxles={axlesY} />
    </Container>
  )
}