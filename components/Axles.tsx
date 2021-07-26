import React from 'react'
import styled from 'styled-components'

const AxlesContainer = styled.div`
  display: flex;
  flex-direction: ${({ isXAxis }: any) => isXAxis ? 'row' : 'column'};
`
const AxlesCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: ${({ theme }) => theme.sizes.cell};
  width: ${({ theme }) => theme.sizes.cell};
`
const AxlesLabel = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`

export interface AxlesProps {
  isXAxis: Boolean
  maxAxles: number
}

export function Axles(props: AxlesProps) {
  const { isXAxis, maxAxles } = props

  const renderAxles: any = () => (
    [...Array(maxAxles)].map((value: undefined, index: number) => (
      <AxlesCell key={index}>
        <AxlesLabel>{index + 1}</AxlesLabel>
      </AxlesCell>
    ))
  )

  return (
    <AxlesContainer 
      isXAxis={isXAxis}
    >
      {renderAxles()}
    </AxlesContainer>
  )
}