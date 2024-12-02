import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc, price }) => {
  return (
    <VStack
      bg="rgb(251,218,187)" // White background
      borderRadius="md" // Rounded corners
      boxShadow="md" // Adds a subtle shadow
      p={4} // Padding
      spacing={4} // Space between child elements
      align="start" // Centers content
    >
      <Image height="200px" src={imageSrc} alt={title} borderRadius="md" />
      <HStack
      spacing={10}>
        <Heading size="md" color="black" className="markazi-heading">{title}</Heading>
        <Text
        color="rgb(238,153,114)"
        > $ {price} </Text>
      </HStack>

      <Text className="karla-text">{description}</Text>
      <HStack>
        <Text className="karla-text">Order a delivery</Text>
      </HStack>
    </VStack>
  );
};

export default Card;