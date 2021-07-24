import React from 'react'
import styled from 'styled-components'
import { Title } from './typography'
import { Select, SelectOptionsProps } from './Select'

const Container: any = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
`
export interface ContextBarProps {
  islandCounter: number
  tinyWorldHeightOptions: SelectOptionsProps[]
  tinyWorldWidthOptions: SelectOptionsProps[]
}

export function ContextBar(props: ContextBarProps) {
  const {
    islandCounter,
    tinyWorldHeightOptions,
    tinyWorldWidthOptions,
  } = props

  return (
    <Container>
      <Title>Number of islands discovered: {islandCounter}</Title>
      <Select
        label="Height"
        value={tinyWorldHeightOptions[0]}
        onChange={(e: any) => { console.log(e) }}
        options={tinyWorldHeightOptions}
      />
      <Select
        label="Width"
        value={tinyWorldWidthOptions[0]}
        onChange={(e: any) => { console.log(e) }}
        options={tinyWorldWidthOptions}
      />
    </Container>
  )
}