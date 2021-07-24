import React from 'react'
import styled from 'styled-components'
import { Grid } from './Grid';

const Container: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export interface DashboardProps {
  tinyWorld: any
}

export function Dashboard(props: DashboardProps) {
  const {
    tinyWorld,
  } = props

  return (
    <Container>
      <Grid cells={tinyWorld} />
    </Container>
  )
}