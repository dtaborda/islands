import styled from 'styled-components'

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.md};
  color: ${({ theme }) => theme.colors.white};
  padding: 0;
  margin: 0;
`

export const Logo = styled.span`
  font-size: ${({ theme }) => theme.sizes.md};
  color: ${({ theme }) => theme.colors.blue};
`

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.white};
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.sizes.sm};
  color: ${({ theme }) => theme.colors.white};
`
