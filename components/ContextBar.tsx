import React from 'react'
import styled from 'styled-components'
import { Logo, Title } from './typography'
import { Select, SelectOptionsProps } from './Select'

const Container: any = styled.div`
  display: flex;
  justify-content: ${
    ({ isAlignCenter,  isAlignLeft}: any) => 
      isAlignCenter ? 
        'center' : isAlignLeft ? 
        'flex-end' : 'space-between'
  };
  align-items: center;
  ${({ lengthFlex }: any) => `flex: ${lengthFlex}`}
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
      <Container lengthFlex={1}>
        <Logo>Tiny World</Logo>
      </Container>
      <Container lengthFlex={2} isAlignCenter>
        <Title>Number of islands discovered: {islandCounter}</Title>
      </Container>
      <Container lengthFlex={1} isAlignLeft>
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
    </Container>
  )
}