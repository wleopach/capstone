import { Box, Heading, Button } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { submitAPI } from './Api';
import { useNavigate } from "react-router";

export default function BookingForm({ availableTimes, formValues, setFormValues, ReservationSchema }) {
    let navigate = useNavigate();
    return (
        <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", sm: "2fr" }}
            gridGap={4}
            justifyItems={{ base: "center", sm: "center" }}
            marginTop="2rem"
        >
            <Formik
                initialValues={formValues}
                validationSchema={ReservationSchema}
                onSubmit={(values) => {
                    setFormValues(values); // Update state on submit
                    alert(JSON.stringify(values, null, 2));
                    submitAPI(formValues);
                    navigate("/confirmed", {state:values});
                    localStorage.setItem('bookingDetails', JSON.stringify(values));


                }}
            >
                {({ errors, touched, values, handleChange }) => (
                    <Form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
                        <label htmlFor="date">
                            <Heading  className="markazi-heading"  fontSize={{ base: "3xl" }} color="rgb(73, 94, 87)" >
                                Choose Date
                            </Heading>
                        </label>
                        <Field
                            name="date"
                            type="date"
                            id="date"
                            onChange={(e) => {
                                handleChange(e);
                                setFormValues({ ...values, date: e.target.value });
                            }}
                        />
                        {errors.date && touched.date && (
                            <div style={{ color: "red" }}>{errors.date}</div>
                        )}

                        <label htmlFor="time">
                            <Heading  className="markazi-heading" fontSize={{ base: "3xl" }} color="rgb(73, 94, 87)">
                                Choose Time
                            </Heading>
                        </label>
                        <Field
                            as="select"
                            name="time"
                            id="time"
                            onChange={(e) => {
                                handleChange(e);
                                setFormValues({ ...values, time: e.target.value });
                            }}
                        >
                            <option value="">Select a time</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time} className="karla-text">
                                    {time}
                                </option>
                            ))}
                        </Field>
                        {errors.time && touched.time && (
                            <div style={{ color: "red" }}>{errors.time}</div>
                        )}

                        <label htmlFor="guests">
                            <Heading  className="markazi-heading" fontSize={{ base: "3xl" }} color="rgb(73, 94, 87)">
                                Number of Guests
                            </Heading>
                        </label>
                        <Field
                            name="guests"
                            type="number"
                            id="guests"
                            min="1"
                            max="10"
                            onChange={(e) => {
                                handleChange(e);
                                setFormValues({ ...values, guests: e.target.value });
                            }}
                        />
                        {errors.guests && touched.guests && (
                            <div style={{ color: "red" }}>{errors.guests}</div>
                        )}

                        <label htmlFor="occasion">
                            <Heading className="markazi-heading" fontSize={{ base: "3xl" }} color="rgb(73, 94, 87)">
                                Occasion
                            </Heading>
                        </label>
                        <Field
                            as="select"
                            name="occasion"
                            id="occasion"
                            onChange={(e) => {
                                handleChange(e);
                                setFormValues({ ...values, occasion: e.target.value });
                            }}
                        >
                            <option value="" className="karla-text">Select an occasion</option>
                            <option value="Birthday" className="karla-text">Birthday</option>
                            <option value="Anniversary" className="karla-text">Anniversary</option>
                        </Field>
                        {errors.occasion && touched.occasion && (
                            <div style={{ color: "red" }}>{errors.occasion}</div>
                        )}

                        <Button className="lt-button" type="submit">Make Your Reservation</Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
