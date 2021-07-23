import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  min-height: ${({ theme }) => theme.sizes.xl};
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  padding: ${({ theme }) => theme.sizes.sm};
`

const Main = styled.main`
  flex: auto;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.sizes.sm};
`

const Footer = styled.footer`
  min-height: ${({ theme }) => theme.sizes.xl};
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.grey};;
  padding: ${({ theme }) => theme.sizes.sm};
`

export interface LayoutProps {
  header: React.ReactNode
  children: React.ReactNode
  footer: React.ReactNode
}

export function Layout(props: LayoutProps) {
  const { header, children, footer } = props

  return (
    <>
      <Header>{header}</Header>
      <Main>{children}</Main>
      <Footer>{footer}</Footer>
    </>
  )
}
