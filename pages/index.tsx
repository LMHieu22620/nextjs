import { HeroSection, ChooseYourPlan, Introduct, Infor, NetWorkImg, ListReview } from '@/component/home'
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
      <ListReview />
    </Box>

  )
}
Home.Layout = MainLayout

export default Home
