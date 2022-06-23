import { HeroSection } from '@/component/home'
import ChooseYourPlan from '@/component/home/choose-your-plan'
import Introduct from '@/component/home/feature-introduct'
import NetWorkImg from '@/component/home/img-network'
import Infor from '@/component/home/information'
import { MainLayout } from '@/component/layout'
import { Box } from '@mui/material'
import { NextPageWithLayout } from '../models'

const Home: NextPageWithLayout = () => {

  return (
    <Box >
      <HeroSection />
      <Infor />
      <Introduct />
      <ChooseYourPlan />
      <NetWorkImg />
    </Box>

  )
}
Home.Layout = MainLayout

export default Home
