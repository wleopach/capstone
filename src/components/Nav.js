import React from "react";
import logo from "../assets/images/logo.png";
import { HStack, Image, Link } from "@chakra-ui/react";

export default function Nav() {
    return (
        <nav>
            <HStack justify="space-between" padding="1rem" backgroundColor="black">
                <Image
                    src={logo}
                    alt="Company Logo"
                    boxSize="200px"
                    objectFit="contain"
                />
                {/* Use HStack for inline links */}
                <HStack as="ul" spacing="20px" className="nav">
                    <Link as="li" className="nav-link" href="#home">Home</Link>
                    <Link as="li" className="nav-link" href="#about">About</Link>
                    <Link as="li" className="nav-link" href="#menu">Menu</Link>
                    <Link as="li" className="nav-link" href="#reservations">Reservations</Link>
                    <Link as="li" className="nav-link" href="#order-online">Order Online</Link>
                    <Link as="li" className="nav-link" href="#login">Login</Link>
                </HStack>
            </HStack>
        </nav>
    );
}
