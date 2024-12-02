import React from 'react';
import { Heading, Image, VStack, Text, HStack } from "@chakra-ui/react";
import mario_adrian_a from '../assets/images/Mario and Adrian A.jpg';
import mario_adrian_b from '../assets/images/Mario and Adrian b.jpg';

export default function About() {
    return (
        <section id="about">
            <HStack
                display="grid"
                gridTemplateColumns={{ base: "1fr", sm: "repeat(3, minmax(0, 1fr))" }} // Single column on mobile, 3 columns on larger screens
                alignItems="center"
                justifyContent="center" // Center everything for mobile
                gap={6}
                padding="2rem" // Add padding for better spacing
            >
                <VStack
                    spacing={4}
                    align="start"
                    maxW="500px"
                >
                    <Heading
                        className="markazi-heading"
                        color="rgb(73, 94, 87)"
                        fontSize="3xl"
                        textAlign={{ base: "center", sm: "left" }} // Center on mobile, left-align on larger screens
                    >
                        Little Lemon
                    </Heading>
                    <Text
                        className="karla-text"
                        fontSize="xl"
                        fontWeight="medium"
                        textAlign="left"
                        color="rgb(73, 94, 87)"
                    >
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </Text>
                </VStack>

                <HStack
                    spacing={6}
                    justify="center"
                    align="center"
                    flexWrap="wrap" // Allow images to wrap on small screens
                >
                    <Image
                        src={mario_adrian_a}
                        alt="Mario and Adrian A"
                        boxSize={{ base: "250px", sm: "300px" }} // Adjust image size based on screen size
                        objectFit="contain"
                        mb={{ base: 4, sm: 0 }} // Add margin on mobile for spacing
                    />
                    <Image
                        src={mario_adrian_b}
                        alt="Mario and Adrian B"
                        boxSize={{ base: "250px", sm: "300px" }}
                        objectFit="contain"
                        mb={{ base: 4, sm: 0 }}
                    />
                </HStack>
            </HStack>
        </section>
    );
}
