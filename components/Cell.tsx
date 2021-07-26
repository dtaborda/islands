import React from 'react'
import styled from 'styled-components'

const CellContainer: any = styled.button`
  height: ${({ theme }) => theme.sizes.cell};
  width: ${({ theme }) => theme.sizes.cell};
  background-color: ${({ theme, data }: any) => data.value ? theme.colors.green : theme.colors.primary};
  border-right: 1px dotted ${({ theme, data }: any) => data.value ? theme.colors.lightGreen : theme.colors.blue};
  border-bottom: 1px dotted ${({ theme, data }: any) => data.value ? theme.colors.lightGreen : theme.colors.blue};
  border-left: none;
  border-top: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, data }: any) => data.value ? theme.colors.lightGreen : theme.colors.blue};
  }
  &:active {
    background-color: ${({ theme, data }: any) => data.value ? theme.colors.green : theme.colors.primary};
    border: 3px solid ${({ theme, data }: any) => data.value ? theme.colors.green : theme.colors.primary};
  }
`

export interface CellProps {
  data: any
  onClick: (data: any) => void
}

export function Cell(props: CellProps) {
  const { data, onClick } = props

  const handleClick = (event: any) => {
    event.stopPropagation()
    onClick(data)
  }

  return (
    <CellContainer data={data} onClick={handleClick} />
  )
}