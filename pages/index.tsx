import Head from 'next/head'
import {
  Dashboard,
  DashboardProps,
  Layout,
  Logo,
} from '../components';

export default function Home() {

  const gridProps: DashboardProps = {
    axlesX: 8,
    axlesY: 5,
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
