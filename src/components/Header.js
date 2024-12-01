import React from 'react';
import { HStack, VStack, Image, Heading, Text, Box } from "@chakra-ui/react";
import res_food from "../assets/images/restauranfood.jpg";

export default function Header() {
    return (
        <header>
            <HStack
                spacing={10} // Add space between the two sections
                align="center"
                justify="space-between" // Ensures proper spacing
                padding="4"
                // Optional: Adds a background color
            >
                {/* Left Section: Text Content */}
                <VStack
                    align="start" // Align content to the left
                    spacing={4} // Adds vertical space between text elements
                    maxW="500px" // Restrict width for better readability
                >
                    <Heading className="markazi-heading" fontSize="4xl">
                        Little Lemon
                    </Heading>
                    <Text className="markazi-text" fontSize="xl" fontWeight="medium">
                        Chicago
                    </Text>
                    <Text
                        className="karla-text"
                        fontSize="md"
                        maxW="auto" /* Restricts the width */
                        textAlign="left" /* Aligns text to the left within the box */
                    >
                        Little Lemon is the perfect place for food lovers! Located at the heart of
                        town, we offer a unique dining experience with a wide variety of dishes
                        that cater to all tastes. Whether you're here for a casual lunch, a
                        celebratory dinner, or a special event, Little Lemon is sure to satisfy
                        your cravings.
                    </Text>
                </VStack>

                {/* Right Section: Image */}
                <Box>
                    <Image
                        src={res_food}
                        alt="Restaurant Food"
                        boxSize="300px" // Slightly larger for prominence
                        objectFit="cover" // Ensures the image fills its box
                        borderRadius="md" // Optional: Adds rounded corners
                        shadow="md" // Optional: Adds a slight shadow for depth
                    />
                </Box>
            </HStack>
        </header>
    );
}
