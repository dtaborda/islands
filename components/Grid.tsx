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
  onCellClick: (data: any) => void
}

export function Grid(props: GridProps) {
  const { cells, onCellClick } = props
  
  const renderCells = () => (
    cells.map((axlesX: string[], axisY: number) => (
      axlesX.map((value: string, axisX: number) => (
        <Cell key={`${axisY}-${axisX}`} data={{ axisX, axisY, value }} onClick={onCellClick} />
      ))
    ))
  )

  return (
    <GridContainer columns={cells[0].length}>{renderCells()}</GridContainer>
  )
}