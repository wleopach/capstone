import React from 'react';
import logo_footer from "../assets/images/logo_footer.png";
import { HStack, VStack, Image, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";  // Import from react-router-dom
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
    {
        icon: faFacebook,
        url: "https://www.facebook.com/",
    },
    {
        icon: faInstagram,
        url: "https://www.instagram.com/",
    },
    {
        icon: faTwitter,
        url: "https://www.x.com",
    },
];

export default function Footer() {
    return (
        <footer >
            <HStack

                spacing={10} // Adjust this value to control the gutter between the columns
                padding="3rem" // Add padding for overall space inside the footer
                justify="space-between" // Space out the sections evenly
            >
                {/* Logo Section */}
                <VStack spacing={4}>
                    <Image
                        src={logo_footer}
                        alt="Company Logo footer"
                        boxSize="200px"
                        objectFit="contain"
                    />
                </VStack>

                {/* Navigation Section */}
                <VStack spacing={4}>
                    <Heading color="rgb(73, 94, 87)">
                        Doormat Navigation
                    </Heading>
                    <HashLink as="li" className="nav-link" to="/#header" color="rgb(73, 94, 87)">
                        Home
                    </HashLink>
                    <HashLink as="li" className="nav-link" to="/#about" color="rgb(73, 94, 87)">
                        About
                    </HashLink>
                    <Link as="li" className="nav-link" to="/menu" color="rgb(73, 94, 87)">
                        Menu
                    </Link>
                    <Link as="li" className="nav-link" to="/reservations" color="rgb(73, 94, 87)">
                        Reservations
                    </Link>
                    <Link as="li" className="nav-link" to="/order" color="rgb(73, 94, 87)">
                        Order Online
                    </Link>
                    <Link as="li" className="nav-link" to="/login" color="rgb(73, 94, 87)">
                        Login
                    </Link>
                </VStack>

                {/* Contact Section */}
                <VStack spacing={4}>
                    <Heading
                        className="karla-text"
                        color="rgb(73, 94, 87)">
                        Contact
                    </Heading>
                    <Text
                        className="karla-text"
                        color="rgb(73, 94, 87)"
                    >
                        Address
                    </Text>
                    <Text
                        color="rgb(73, 94, 87)"
                        className="karla-text"
                    >
                        Phone number</Text>
                    <Text
                        color="rgb(73, 94, 87)"
                        className="karla-text"
                    >Email</Text>
                </VStack>

                {/* Social Links Section */}
                <VStack spacing={4}>
                    {socials.map((item, index) => (
                        <a key={index}  href={item.url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                color="rgb(73, 94, 87)"
                                icon={item.icon}
                                size="2x"
                                className="social-media"
                            />
                        </a>
                    ))}
                </VStack>
            </HStack>
        </footer>
    );
}
