"use client"
import { Box, Typography } from '@mui/material'
import IndianDestinations from '../component/IndianDestinations'
import InternationalDestinations from '../component/InternationalDestinations'
import AdvexSpecials from '../component/AdvexSpecials'
import ReadingCorner from '../component/ReadingCorner'
import WhyAdvex from '../component/WhyAdvex'
import SimpleSlider from '../component/SimpleSlider'
import Magazine from '../component/Magazine'
import Holidays from '../component/Holidays'
import HeroSection from '../component/HeroSection'

export default function Home() {
    return (
        <Box>
            <HeroSection />
            <IndianDestinations />
            {/* <SimpleSlider /> */}
            <InternationalDestinations />
            <AdvexSpecials />
            <ReadingCorner />
            <WhyAdvex />
            <Holidays />
            <Magazine />
        </Box>
    )
}
