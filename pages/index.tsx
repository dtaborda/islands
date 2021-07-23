import Head from 'next/head'
import {
  Dashboard,
  DashboardProps,
  Layout,
  Logo,
} from '../components';

import { useData } from '../hooks'

export default function Home() {

  const { tinyWorld } = useData({ axlesX: 3, axlesY: 7 })

  const gridProps: DashboardProps = {
    tinyWorld,
    islandCounter: 0,
  }

  return (
    <>
      <Head>
        <title>Island</title>
        <meta name="description" content="Creating island" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        header={<Logo>Island</Logo>}
        footer={<Logo>Footer</Logo>}
      >
        <Dashboard {...gridProps} />
      </Layout>
    </>
  )
}
