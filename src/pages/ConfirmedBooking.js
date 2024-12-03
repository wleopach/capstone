import React from 'react';
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function ConfirmedBooking() {
    const location = useLocation();
    const bookingDetails = location.state; // Access the state passed from BookingForm

    return (
        <>
            <Nav />
            <Box textAlign="center" mt="4">
                <Heading className="markazi-heading">
                    Your booking is confirmed
                </Heading>
                {bookingDetails && (
                    <Box mt="4">
                        <Text fontSize="lg" className="karla-text" fontWeight="bold" color="white">
                            <strong>Date:</strong> {bookingDetails.date}
                        </Text>
                        <Text fontSize="lg" className="karla-text" fontWeight="bold" color="white">
                            <strong>Time:</strong> {bookingDetails.time}
                        </Text>
                        <Text fontSize="lg" className="karla-text" fontWeight="bold" color="white">
                            <strong>Guests:</strong> {bookingDetails.guests}
                        </Text>
                        <Text fontSize="lg" className="karla-text" fontWeight="bold" color="white">
                            <strong>Occasion:</strong> {bookingDetails.occasion}
                        </Text>
                    </Box>
                )}
            </Box>
            <Footer />
        </>
    );
}
