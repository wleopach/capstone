import React from 'react';
import Card from './Card';
import { Box, HStack, Heading, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const dishes = [
    {
        title: "Greek salad",
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        getImageSrc: () => require("../assets/images/greek salad.jpg"),
        price: 12.99
    },
    {
        title: "Bruschetta",
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  🔥️",
        getImageSrc: () => require("../assets/images/bruscheta.jpg"),
        price: 5.99
    },
    {
        title: "Lemon Desert",
        description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../assets/images/lemon dessert.jpg"),
        price: 5.00
    },
];

export default function Highlights() {
    return (
        <section id="specials">
            <HStack
                spacing={{ base: 4, md: 8 }}  // Adjust spacing based on screen size
                align="center"
                direction={{ base: "column", md: "row" }}  // Stack items vertically on mobile
                justify="space-between"
                marginBottom={{ base: "2rem", md: "3rem" }}
            >
                <Heading
                    className="markazi-heading"
                    fontSize={{ base: "3xl", sm: "4xl" }}  // Responsive font size
                    color="rgb(73, 94, 87)"
                    margin="2rem"
                    textAlign="center"  // Center text on smaller screens
                >
                    This Week's Specials
                </Heading>

                <Button
                    as={Link}
                    to="/order"
                    className="lt-button"
                    marginLeft={{ base: 0, md: "5rem" }}  // No margin on mobile, larger on desktop
                    width={{ base: "full", md: "auto" }}  // Button full width on small screens
                >
                    Online Menu
                </Button>
            </HStack>

            <Box
                display="grid"
                gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}  // Grid layout for different screen sizes
                gridGap={4}
                marginTop={{ base: "2rem", md: "3rem" }}  // Adjust margins for different screens
            >
                {dishes.map((dish) => (
                    <Card
                        key={dish.title}
                        title={dish.title}
                        description={dish.description}
                        imageSrc={dish.getImageSrc()}
                        price={dish.price}
                    />
                ))}
            </Box>
        </section>
    );
}
