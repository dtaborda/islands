import React from 'react'
import { Cell } from './Cell';

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
    <div>{renderCells()}</div>
  )
}