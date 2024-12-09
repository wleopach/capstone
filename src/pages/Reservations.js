import React, { useState, useReducer, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import * as Yup from "yup";
import { fetchAPI }  from '../components/Api';
// Validation schema
const ReservationSchema = Yup.object().shape({
    date: Yup.date()
        .required("Date is required")
        .min(new Date(), "Date cannot be in the past"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
        .required("Number of guests is required")
        .min(1, "At least 1 guest is required")
        .max(10, "No more than 10 guests allowed"),
    occasion: Yup.string().required("Occasion is required"),
});

// Default times
const defaultTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
];

// Reducer function
const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            return action.payload;
        default:
            return state;
    }
};

export default function Reservations() {
    const [availableTimes, dispatch] = useReducer(updateTimes, defaultTimes);
    const [formValues, setFormValues] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    });

    // Fetch available times whenever formValues.date changes
    const [apiFunctions, setApiFunctions] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js');
                const apiScript = await response.text();

                // Create a temporary script element
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.text = apiScript;

                // Append the script to the document's head
                document.head.appendChild(script);

                // After the script loads, extract the functions
                const extractedFunctions = window.apiFunctions; // Assuming the functions are exported as 'apiFunctions'
                setApiFunctions(extractedFunctions);

                // Clean up: Remove the temporary script element
                document.head.removeChild(script);
            } catch (error) {
                console.error('Error fetching or executing API script:', error);
            }
        };

        fetchData();

    }, []);
    useEffect(() => {
        if (formValues.date) {
            const date = new Date(formValues.date);
            fetch(`https://raw.githubusercontent.com/courseraap/capstone/main/api.js`)
                .then((response) => console.log(response.text()))
                .catch((error) => console.log(error));


            if (fetchAPI) {
                const availableTimes = fetchAPI(date);
                console.log(availableTimes); // Debugging: log fetched times
                dispatch({ type: "UPDATE_TIMES", payload: availableTimes });
            } else {
                console.error("fetchAPI is not available.");
            }
        } else {
            // Reset to default times if no date is selected
            dispatch({ type: "UPDATE_TIMES", payload: defaultTimes });
        }
    }, [formValues.date]);

    return (
        <>
            <Nav />
            <BookingForm
                availableTimes={availableTimes}
                formValues={formValues}
                setFormValues={setFormValues}
                ReservationSchema={ReservationSchema}
            />
            <Footer />
        </>
    );
}
