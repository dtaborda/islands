import styled from 'styled-components'

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.md};
  color: ${({ theme }) => theme.colors.white};
`

export const Logo = styled.span`
  font-size: ${({ theme }) => theme.sizes.md};
  color: ${({ theme }) => theme.colors.white};
`

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.white};
`
