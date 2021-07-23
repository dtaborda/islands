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

  const handleClickCell = ({ axisX, axisY, value }: any) => {
    console.log({ axisX, axisY, value })
  }

  const renderCells = () => (
    cells.map((axlesX: string[], axisY: number) => (
      axlesX.map((value: string, axisX: number) => (
        <Cell key={`${axisY}-${axisX}`} data={value} onClick={() => handleClickCell({
          axisX, axisY, value,
        })} />
      ))
    ))
  )

  return (
    <GridContainer columns={cells.length}>{renderCells()}</GridContainer>
  )
}