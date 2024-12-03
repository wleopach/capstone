import React from 'react'
import About from './About'
import Testimonials from "./Testimonials";
import Highlights from "./Highlights";
import {VStack} from "@chakra-ui/react"
export default function Main() {

    return (
        <main id="main">
            <VStack spacing={2}>
                <Highlights/>
                <Testimonials/>
                <About id="about"/>
            </VStack>
        </main>
    )
}
