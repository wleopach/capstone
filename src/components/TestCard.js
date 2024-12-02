import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar"
import React from "react";

const TestCard = ({ name, rating, review , imageSrc }) => {
    return (
        <VStack
            bg="rgb(251,218,187)" // White background
            borderRadius="md" // Rounded corners
            boxShadow="md" // Adds a subtle shadow
            p={4} // Padding
            spacing={4} // Space between child elements
            align="start" // Centers content
        >
            <Heading size="md" color="black" className="markazi-heading">{name}</Heading>
            <Avatar src={imageSrc} alt={name} borderRadius="md" />
            <Text className="karla-text">  {review}</Text>
            <HStack>
                <Text className="karla-text">rating: {rating}/ 5 </Text>
            </HStack>
        </VStack>
    );
};

export default TestCard;