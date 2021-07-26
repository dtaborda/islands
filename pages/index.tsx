import Head from 'next/head'
import {
  ContextBar,
  ContextBarProps,
  Dashboard,
  Layout,
  Logo,
  Text,
} from '../components';

import {
  useData,
  useIsland,
  useSelector,
} from '../hooks'

export default function Home() {
  const selectorData: any = useSelector()

  const {
    tinyWorldWidth,
    tinyWorldHeight,
  } = selectorData

  const gridProps = useData({ 
    axlesX: tinyWorldWidth.value, 
    axlesY: tinyWorldHeight.value,
  })

  const { 
    tinyWorld,
    landLotDataSelected,
  } = gridProps

  const islandData: any = useIsland({
    tinyWorld,
    landLotDataSelected,
  })

  const contextBarProps: ContextBarProps = {
    ...islandData,
    ...selectorData,
  }
  
  return (
    <>
      <Head>
        <title>Island</title>
        <meta name="description" content="Creating island" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        header={
          <ContextBar {...contextBarProps} />
        }
        footer={<Text>Damian Taborda, Software Engineer</Text>}
      >
        <Dashboard {...gridProps} />
      </Layout>
    </>
  )
}
