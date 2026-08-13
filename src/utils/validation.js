const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const PHONE = /^[0-9+()\s-]{7,}$/;

export function validateBooking(booking, form) {
  const errors = {};
  if (!booking.checkin) errors.checkin = form.errRequired;
  if (!booking.checkout) errors.checkout = form.errRequired;
  if (
    booking.checkin &&
    booking.checkout &&
    new Date(booking.checkout) <= new Date(booking.checkin)
  ) {
    errors.checkout = form.errDateOrder;
  }
  if (!booking.name.trim()) errors.name = form.errRequired;
  if (!booking.email.trim() || !EMAIL.test(booking.email)) errors.email = form.errEmail;
  if (!booking.phone.trim() || !PHONE.test(booking.phone)) errors.phone = form.errPhone;
  return errors;
}

export function validateContact(contact, form) {
  const errors = {};
  if (!contact.name.trim()) errors.name = form.errRequired;
  if (!contact.email.trim() || !EMAIL.test(contact.email)) errors.email = form.errEmail;
  if (!contact.message.trim()) errors.message = form.errRequired;
  return errors;
}
