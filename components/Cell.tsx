import React from 'react'
import styled from 'styled-components'

const CellContainer: any = styled.button`
  height: ${({ theme }) => theme.sizes.cell};
  width: ${({ theme }) => theme.sizes.cell};
  background-color: ${({ theme, data }: any) => data ? theme.colors.white : theme.colors.primary};
  border: 1px dotted ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  &:hover {
    opacity:0.1;
    border: 1px dotted ${({ theme }) => theme.colors.white};
  }
  &:active {
    background-color: ${({ theme, data }: any) => data ? theme.colors.white : theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

export interface CellProps {
  data: string
  onClick: () => void
}

export function Cell(props: CellProps) {
  const { data, onClick } = props

  return (
    <CellContainer data={data} onClick={onClick}/>
  )
}