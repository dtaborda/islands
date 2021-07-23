import React from 'react'
import styled from 'styled-components'

const CellContainer: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.sizes.cell};
  width: ${({ theme }) => theme.sizes.cell};
  background-color: ${({ theme, data }: any) => data ? theme.colors.white : theme.colors.primary};
  border: 1px dotted ${({ theme }) => theme.colors.white};
`

export interface CellProps {
  data: string
}

export function Cell(props: CellProps) {
  const { data } = props

  return (
    <CellContainer data={data} />
  )
}