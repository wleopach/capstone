import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import BookingForm from './components/BookingForm';
import {submitAPI} from "./components/Api";

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('./Api', () => ({
  submitAPI: jest.fn(),
}));

const mockAvailableTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];
const mockReservationSchema = jest.fn();

describe('BookingForm', () => {
  it('renders correctly', () => {
    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            formValues={{}}
            setFormValues={() => {}}
            ReservationSchema={mockReservationSchema}
        />
    );

    expect(screen.getByRole('heading', { name: /Choose Date/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Choose Time/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Number of Guests/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Occasion/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Make Your Reservation/i })).toBeInTheDocument();
  });

  it('handles date input correctly', async () => {
    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            formValues={{}}
            setFormValues={() => {}}
            ReservationSchema={mockReservationSchema}
        />
    );

    const dateInput = screen.getByRole('textbox', { name: /date/i });
    await userEvent.type(dateInput, '2024-12-10');

    expect(dateInput.value).toBe('2024-12-10');
  });

  it('handles time selection correctly', async () => {
    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            formValues={{}}
            setFormValues={() => {}}
            ReservationSchema={mockReservationSchema}
        />
    );

    const timeSelect = screen.getByRole('combobox', { name: /Choose Time/i });
    await userEvent.selectOptions(timeSelect, '1:00 PM');

    expect(timeSelect.value).toBe('1:00 PM');
  });

  it('handles guest input correctly', async () => {
    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            formValues={{}}
            setFormValues={() => {}}
            ReservationSchema={mockReservationSchema}
        />
    );

    const guestInput = screen.getByRole('spinbutton', { name: /Number of Guests/i });
    await userEvent.type(guestInput, '5');

    expect(guestInput.value).toBe('5');
  });

  it('handles occasion selection correctly', async () => {
    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            formValues={{}}
            setFormValues={() => {}}
            ReservationSchema={mockReservationSchema}
        />
    );

    const occasionSelect = screen.getByRole('combobox', { name: /Occasion/i });
    await userEvent.selectOptions(occasionSelect, 'Birthday');

    expect(occasionSelect.value).toBe('Birthday');
  });

  it('calls submitAPI and navigates on form submission', async () => {
    const mockSetFormValues = jest.fn();
    const mockNavigate = jest.fn();

    jest.spyOn(formik, 'useFormik').mockImplementation(() => ({
      handleSubmit: jest.fn(),
    }));

    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            formValues={{}}
            setFormValues={mockSetFormValues}
            ReservationSchema={mockReservationSchema}
        />
    );

    const button = screen.getByRole('button', { name: /Make Your Reservation/i });
    await userEvent.click(button);

    expect(mockSetFormValues).toHaveBeenCalled();
    expect(submitAPI).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/confirmed', expect.any(Object));
  });

  it('displays validation errors', async () => {
    const mockReservationSchema = jest.fn().mockImplementation(() => ({
      validate: () => ({ date: 'Required' }),
    }));

    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            formValues={{}}
            setFormValues={() => {}}
            ReservationSchema={mockReservationSchema}
        />
    );

    const button = screen.getByRole('button', { name: /Make Your Reservation/i });
    await userEvent.click(button);

    expect(screen.getByText('Required')).toBeInTheDocument();
  });
});