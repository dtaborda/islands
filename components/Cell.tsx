import React from 'react'

export interface CellProps {
  data: string
}

export function Cell(props: CellProps) {
  const { data } = props

  return (
    <div>{data}</div>
  )
}