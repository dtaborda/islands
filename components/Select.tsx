import React from 'react';
import styled from 'styled-components'
import ReactSelect, { OptionTypeBase } from 'react-select';
import { Label } from './typography'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }: any) => theme.sizes.xs};
  margin-left: ${({ theme }: any) => theme.sizes.xs};
`

const ReactSelectStyled = styled(ReactSelect)`
  margin-left: ${({ theme }: any) => theme.sizes.xs};
  width: ${({ theme }: any) => theme.sizes.cell};
`

export interface SelectProps {
  label: string
  options: OptionTypeBase[]
  value: OptionTypeBase,
  onChange: () => void
}

export type SelectOptionsProps = OptionTypeBase;

export function Select(props: SelectProps) {
  const {
    label,
    value,
    onChange,
    options,
  } = props

  return (
    <Container>
      <Label>{label}</Label>
      <ReactSelectStyled
        value={value}
        onChange={onChange}
        options={options}
      />
    </Container>
  )
}