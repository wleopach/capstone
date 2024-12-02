import React from 'react';
import { HStack, VStack, Image, Heading, Text, Box, Button } from "@chakra-ui/react";
import res_food from "../assets/images/restauranfood.jpg";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Box
            as="header"
            id="header"
            bg="rgb(73, 94, 87)"
            p={8}
            display="flex"
            flexDirection={{ base: "column", md: "row" }} // Stack on smaller screens
            alignItems="center"
            justifyContent="space-between"
            gap={6} // Space between sections
        >
            {/* Left Section: Text Content */}
            <VStack
                align={{ base: "center", md: "start" }} // Center on small screens, left-align on larger screens
                spacing={4}
                maxW="500px"
                textAlign={{ base: "center", md: "left" }}
            >
                <Heading className="markazi-heading" fontSize={{ base: "3xl", md: "4xl" }} >
                    Little Lemon
                </Heading>
                <Text className="markazi-text" fontSize={{ base: "lg", md: "xl" }} fontWeight="medium" >
                    Chicago
                </Text>
                <Text
                    className="karla-text"
                    fontSize="md"
                >
                    Little Lemon is the perfect place for food lovers! Located at the heart of
                    town, we offer a unique dining experience with a wide variety of dishes
                    that cater to all tastes. Whether you're here for a casual lunch, a
                    celebratory dinner, or a special event, Little Lemon is sure to satisfy
                    your cravings.
                </Text>
                <Button
                    as={Link}
                    to="/reservations"
                    className="lt-button"
                >
                    Reserve a Table
                </Button>
            </VStack>

            {/* Right Section: Image */}
            <Image
                src={res_food}
                alt="Delicious Restaurant Food"
                boxSize={{ base: "250px", md: "350px" }}
                objectFit="cover"
                borderRadius="lg"
                shadow="lg"
            />
        </Box>
    );
}
