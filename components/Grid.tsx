import React from 'react'
import styled from 'styled-components'
import { Cell } from './Cell';

const GridContainer: any = styled.div`
  width: ${({ theme, columns }: any) => `${parseInt(theme.sizes.cell)*columns}rem`};
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
`
export interface GridProps {
  cells: string[][]
}

export function Grid(props: GridProps) {
  const { cells } = props

  const renderCells = () => (
    cells.map((axlesX: string[], indexY: number) => (
      axlesX.map((axis: string, indexX: number) => (
        <Cell key={`${indexY}-${indexX}`} data={axis} />
      ))
    ))
  )

  return (
    <GridContainer columns={cells.length}>{renderCells()}</GridContainer>
  )
}