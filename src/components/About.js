import React from 'react'
import {HStack, Heading, Image, VStack, Text} from "@chakra-ui/react"
import mario_adrian_a from '../assets/images/Mario and Adrian A.jpg'
import mario_adrian_b from '../assets/images/Mario and Adrian b.jpg'
export default function About() {
    return (
        <section id="about">
        <HStack>
            <VStack
                spacing={2}
                align="start" // Align content to the leff
                maxW="500px" // Restrict width for better readability
            >
                <Heading
                    className="markazi-heading"
                    color= "rgb(73, 94, 87)"
                    margin = "2rem"
                    padding = "1.5rem"
                >
                    Little Lemon
                </Heading>
                <Text
                    className="karla-text"
                    fontSize="xl"
                    fontWeight="medium"
                    maxW="auto" /* Restricts the width */
                    textAlign="left" /* Aligns text to the left within the box */
                    color= "rgb(73, 94, 87)"
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>
            </VStack>

          <Image
            src={mario_adrian_a}
            alt="Company Logo footer"
            boxSize="200px"
            objectFit="contain"
          />
            <Image
                src={mario_adrian_b}
                alt="Company Logo footer"
                boxSize="200px"
                objectFit="contain"
            />
        </HStack>
        </section>
    )
}
