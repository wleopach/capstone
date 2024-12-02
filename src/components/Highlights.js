import React from 'react'
import Card from './Card'
import {Box, HStack, Heading, Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
const dishes = [
    {
        title: "Greek salad",
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        getImageSrc: () => require("../assets/images/greek salad.jpg"),
        price:12.99
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
            <HStack spacing="100px" align="center">
                <Heading
                    className="markazi-heading"
                    fontSize="4xl"
                    color= "rgb(73, 94, 87)"
                    margin = "2rem"
                    padding = "2.5rem"
                >
                    This Week specials

                </Heading>
                <Button
                    as={Link}
                    to="/order"
                    className="lt-button"
                    marginLeft="10rem"


                >
                    Online Menu
                </Button>

            </HStack>

            <HStack>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(3,minmax(0,1fr))"
                    gridGap={4}
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
            </HStack>

        </section>
    )
}
