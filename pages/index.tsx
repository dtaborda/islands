import Head from 'next/head'
import {
  ContextBar,
  ContextBarProps,
  Dashboard,
  DashboardProps,
  Layout,
  Logo,
} from '../components';

import { useData, useSelector } from '../hooks'

export default function Home() {
  const {
    tinyWorldHeightOptions,
    tinyWorldWidthOptions,
    tinyWorldHeight,
    tinyWorldWidth,
    setTinyWorldHeight,
    setTinyWorldWidth,
  } = useSelector()

  const gridProps: DashboardProps = useData({ 
    axlesX: tinyWorldWidth.value, 
    axlesY: tinyWorldHeight.value,
  })

  const contextBarProps: ContextBarProps = {
    islandCounter: 0,
    tinyWorldWidthOptions,
    tinyWorldHeightOptions,
    tinyWorldHeight,
    tinyWorldWidth,
    setTinyWorldHeight,
    setTinyWorldWidth,
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
        <ContextBar {...contextBarProps} />
        <Dashboard {...gridProps} />
      </Layout>
    </>
  )
}
