import React from 'react'
import { HStack, VStack } from "@chakra-ui/react"
export default function Footer() {
    return (
        <footer>
            <HStack>
                <VStack spacing={2}> Logo </VStack>
                <VStack spacing={2}> Social Media </VStack>
                <VStack spacing={2}> Contact </VStack>
                <VStack spacing={2}> Doormat navigation </VStack>

            </HStack>
        </footer>
    )
}
