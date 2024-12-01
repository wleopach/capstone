import React from 'react'
import logo_footer from "../assets/images/logo_footer.png";
import { HStack, VStack , Image} from "@chakra-ui/react"
export default function Footer() {
    return (
        <footer>
            <HStack>
                <VStack spacing={2}>
                <Image
                src={logo_footer}
                alt="Company Logo footer"
                boxSize="200px"
                objectFit="contain"
                />
                </VStack>
                <VStack spacing={2}> Social Media </VStack>
                <VStack spacing={2}> Contact </VStack>
                <VStack spacing={2}> Doormat navigation </VStack>

            </HStack>
        </footer>
    )
}
