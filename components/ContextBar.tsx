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
  tinyWorldHeight: SelectOptionsProps
  tinyWorldWidth: SelectOptionsProps
  setTinyWorldHeight: any
  setTinyWorldWidth: any
}

export function ContextBar(props: ContextBarProps) {
  const {
    islandCounter,
    tinyWorldHeightOptions,
    tinyWorldWidthOptions,
    tinyWorldHeight,
    tinyWorldWidth,
    setTinyWorldHeight,
    setTinyWorldWidth,
  } = props

  return (
    <Container>
      <Title>Number of islands discovered: {islandCounter}</Title>
      <Select
        label="Height"
        value={tinyWorldHeight}
        onChange={setTinyWorldHeight}
        options={tinyWorldHeightOptions}
      />
      <Select
        label="Width"
        value={tinyWorldWidth}
        onChange={setTinyWorldWidth}
        options={tinyWorldWidthOptions}
      />
    </Container>
  )
}