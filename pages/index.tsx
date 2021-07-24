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

const genSelectorOption = (max: number) => {
  const options = []
  for (let index = 5; index <= max; index++) {
    options.push({ value: index, label: `${index}`})
  }
  return options;
}

const tinyWorldHeightOptions = genSelectorOption(8)

const tinyWorldWidthOptions = genSelectorOption(12)

export default function Home() {

  const {
    tinyWorldHeightOptions,
    tinyWorldWidthOptions,
    tinyWorldHeight,
    tinyWorldWidth,
    setTinyWorldHeight,
    setTinyWorldWidth,
  } = useSelector()

  const { tinyWorld } = useData({ axlesX: tinyWorldWidth.value, axlesY: tinyWorldHeight.value })

  const gridProps: DashboardProps = {
    tinyWorld,
  }

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
