import React from "react";
import logo from "../assets/images/logo.png";
import { HStack, Image} from "@chakra-ui/react";
import { Link } from "react-router-dom";  // Import from react-router-dom
import { HashLink } from 'react-router-hash-link'; // Import HashLink
export default function Nav() {
    return (
        <nav>
            <HStack
                justify="space-between"
                padding="1rem 2rem" // Reduce padding to make the navbar smaller
                backgroundColor="black"
                height="70px" // Set explicit height
            >
                <Image
                    src={logo}
                    alt="Company Logo"
                    boxSize="200px"
                    objectFit="contain"
                />
                {/* Use HStack for inline links */}
                <HStack as="ul" spacing="20px" className="nav">
                    <HashLink as="li" className="nav-link" to="/#header" color="rgb(73, 94, 87)">Home</HashLink>
                    <HashLink as="li" className="nav-link" to="/#about" color="rgb(73, 94, 87)">About</HashLink>
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
                </HStack>
            </HStack>
        </nav>
    );
}
