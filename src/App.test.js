import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import TableReservationForm from './TableReservationForm';

test('submits form successfully', async () => {
  // Mock a successful API call
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    })
  );

  const { getByLabelText, getByText } = render(
    <TableReservationForm bookingFormData={{}} />
  );

  // Fill in form details
  fireEvent.change(getByLabelText('Name:'), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText('Email:'), { target: { value: 'john@example.com' } });
  fireEvent.change(getByLabelText('Date:'), { target: { value: '2024-12-01' } });
  fireEvent.change(getByLabelText('Number of Guests'), { target: { value: '2' } });
  fireEvent.change(getByLabelText('Reservation Time'), { target: { value: '18:00' } });
  fireEvent.change(getByLabelText('Reservation Occasion'), { target: { value: 'Birthday' } });

  fireEvent.click(getByText('Submit'));

  // Wait for form submission to complete
  await waitFor(() => {
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  // Ensure the form is reset after successful submission
  await waitFor(() => {
  expect(getByLabelText('Name:').value).toBe('');
  expect(getByLabelText('Email:').value).toBe('');
  expect(getByLabelText('Number of Guests').value).toBe('2');
  expect(getByLabelText('Date:').value).toBe('');
  expect(getByLabelText('Reservation Time').value).toBe('16');
  expect(getByLabelText('Reservation Occasion').value).toBe('Birthday');
  });

});
