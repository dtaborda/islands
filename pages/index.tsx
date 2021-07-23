import Head from 'next/head'
import styled from 'styled-components'

import { Dashboard, DashboardProps } from '../components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {

  const gridProps: DashboardProps = {
    axlesX: 2, axlesY: 4
  }

  return (
    <>
      <Head>
        <title>Island</title>
        <meta name="description" content="Creating island" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Title>Island</Title>
        <Dashboard {...gridProps} />
      </div>
    </>
  )
}
