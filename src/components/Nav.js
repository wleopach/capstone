import React from "react";
import {HStack, Image, Button, useBreakpointValue} from "@chakra-ui/react";
import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "../components/ui/menu";
import {Link} from "react-router-dom";  // Import from react-router-dom
import {HashLink} from 'react-router-hash-link'; // Import HashLink
import logo from "../assets/images/logo.png";
import hamburger from "../assets/Icones/🦆 icon _hamburger menu.svg";

export default function Nav() {
    // Detect the screen size (responsive design)
    const isDesktop = useBreakpointValue({base: false, lg: true});

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

                {/* Conditionally render desktop or mobile menu */}
                {isDesktop ? (
                    // Desktop Menu
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
                ) : (
                    // Mobile Menu (Hamburger)
                    <HStack as="ul" spacing="20px" className="nav">
                        <MenuRoot>
                            <MenuTrigger asChild>
                                <Button as={Button} variant="outline" size="sm">
                                    <Image src={hamburger} alt="Hamburger Menu"/>
                                </Button>
                            </MenuTrigger>
                            <MenuContent>
                                <MenuItem className="nav-link" as={HashLink} to="/#header">Home</MenuItem>
                                <MenuItem className="nav-link" as={HashLink} to="/#about">About</MenuItem>
                                <MenuItem className="nav-link" as={Link} to="/menu">Menu</MenuItem>
                                <MenuItem className="nav-link" as={Link} to="/reservations">Reservations</MenuItem>
                                <MenuItem className="nav-link" as={Link} to="/order">Order Online</MenuItem>
                                <MenuItem className="nav-link" as={Link} to="/login">Login</MenuItem>
                            </MenuContent>


                        </MenuRoot>
                    </HStack>
                )}
            </HStack>
        </nav>
    );
}
