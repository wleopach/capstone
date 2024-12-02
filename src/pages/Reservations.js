import React from "react";
import { Box, Heading, Button} from "@chakra-ui/react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
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


export default function Reservations() {
    return (
        <>
            <Nav/>
            <Box
                display = "grid"
                gridTemplateColumns={{ base: "1fr", sm: "2fr" }} // 1 column on mobile, 4 columns on larger screens
                gridGap={4}
                justifyItems={{ base: "center", sm: "center" }} // Push items to the right on small screens
                marginTop="2rem"
            >
                <Formik
                    initialValues={{
                        date: "",
                        time: "",
                        guests: "",
                        occasion: "",
                    }}
                    validationSchema={ReservationSchema}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ errors, touched }) => (
                        <Form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
                            <label htmlFor="date">
                                <Heading
                                    className="markazi-heading"
                                    fontSize={{ base: "3xl" }}
                                    color="rgb(73, 94, 87)"
                                >
                                    Choose Date
                                </Heading>

                            </label>
                            <Field name="date" type="date" id="date" />
                            {errors.date && touched.date ? (
                                <div style={{ color: "red" }}>{errors.date}</div>
                            ) : null}

                            <label htmlFor="time">
                                <Heading
                                    className="markazi-heading"
                                    fontSize={{ base: "3xl" }}
                                    color="rgb(73, 94, 87)"
                                >
                                    Choose time
                                </Heading>

                            </label>
                            <Field as="select" name="time" id="time">
                                <option value="">Select a time</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                            </Field>
                            {errors.time && touched.time ? (
                                <div style={{ color: "red" }}>{errors.time}</div>
                            ) : null}

                            <label htmlFor="guests">
                                <Heading
                                    className="markazi-heading"
                                    fontSize={{ base: "3xl" }}
                                    color="rgb(73, 94, 87)"
                                >
                                    Number of guests
                                </Heading>
                            </label>
                            <Field
                                name="guests"
                                type="number"
                                placeholder="1"
                                min="1"
                                max="10"
                                id="guests"
                            />
                            {errors.guests && touched.guests ? (
                                <div style={{ color: "red" }}>{errors.guests}</div>
                            ) : null}

                            <label htmlFor="occasion">
                                <Heading
                                    className="markazi-heading"
                                    fontSize={{ base: "3xl" }}
                                    color="rgb(73, 94, 87)"
                                >
                                    Occasion
                                </Heading>
                            </label>
                            <Field as="select" name="occasion" id="occasion" className="karla-text">
                                <option value="" className="karla-text">Select an occasion</option>
                                <option value="Birthday" className="karla-text">Birthday</option>
                                <option value="Anniversary" className="karla-text">Anniversary</option>
                            </Field>
                            {errors.occasion && touched.occasion ? (
                                <div style={{ color: "red" }}>{errors.occasion}</div>
                            ) : null}

                            <Button type="submit" className="lt-button">Make Your Reservation</Button>
                        </Form>
                    )}
                </Formik>

            </Box>

            <Footer/>

        </>
    )
}





