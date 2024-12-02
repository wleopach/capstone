import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import TestCard from "./TestCard";

const testimonials = [
    {
        rating: 5,
        name: "Alice Johnson",
        review: "This service was exceptional! The team went above and beyond to ensure everything was perfect.",
        image: "https://randomuser.me/api/portraits/thumb/women/81.jpg"
    },
    {
        rating: 4,
        name: "Mark Stevenson",
        review: "Great experience overall, though there’s room for improvement in communication.",
        image: "https://randomuser.me/api/portraits/thumb/men/81.jpg"
    },
    {
        rating: 5,
        name: "Sophia Lee",
        review: "Amazing quality and quick delivery! Will definitely recommend to friends.",
        image: "https://randomuser.me/api/portraits/thumb/women/9.jpg"
    },
    {
        rating: 3,
        name: "James Carter",
        review: "The service was decent, but the delivery took longer than expected.",
        image: "https://randomuser.me/api/portraits/thumb/men/8.jpg"
    }
];

export default function Testimonials() {
    return (
        <>
            <Heading
                className="markazi-heading"
                color= "rgb(73, 94, 87)"
                margin = "2rem"
                padding = "1.5rem"
            >
                Testimonials
            </Heading>
            <Box
                display="grid"
                gridTemplateColumns="repeat(4,minmax(0,1fr))"
                gridGap={4}
            >
                {testimonials.map((testimonial, index) => (
                    <TestCard
                        key={index}
                        rating={testimonial.rating}
                        name={testimonial.name}
                        imageSrc={testimonial.image}
                        review={testimonial.review}
                    />
                ))}
            </Box>
        </>
    )
}
