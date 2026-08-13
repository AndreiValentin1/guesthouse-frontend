import { useState } from 'react';
import { Button } from '../common/Button';
import { Checkbox, FieldError, Input, Label, Select, Textarea } from '../common/Field';
import { FadeUp } from '../motion/FadeUp';
import { useLang } from '../../i18n/LanguageContext';
import { categories } from '../../data/rooms';
import { localize } from '../../utils/localize';
import { validateBooking } from '../../utils/validation';

const initialBooking = {
  checkin: '',
  checkout: '',
  guests: 2,
  roomPref: 'any',
  name: '',
  email: '',
  phone: '',
  message: '',
  pet: false,
};

export function BookingForm() {
  const { ui, lang } = useLang();
  const [booking, setBooking] = useState(initialBooking);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => setBooking((current) => ({ ...current, [field]: value }));

  const onSubmit = (event) => {
    event.preventDefault();
    const found = validateBooking(booking, ui.form);
    setErrors(found);
    if (Object.keys(found).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <FadeUp
        duration={0.4}
        className="rounded-xl border border-gray-200 p-10 text-center"
        role="status"
      >
        <p className="m-0 text-(length:--h3-sm) font-semibold">{ui.rezervare.success}</p>
      </FadeUp>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 wide:grid-cols-2">
        <div>
          <Label htmlFor="checkin">{ui.form.checkin}</Label>
          <Input
            id="checkin"
            type="date"
            value={booking.checkin}
            onChange={(event) => update('checkin', event.target.value)}
            aria-invalid={Boolean(errors.checkin)}
          />
          <FieldError>{errors.checkin}</FieldError>
        </div>
        <div>
          <Label htmlFor="checkout">{ui.form.checkout}</Label>
          <Input
            id="checkout"
            type="date"
            value={booking.checkout}
            onChange={(event) => update('checkout', event.target.value)}
            aria-invalid={Boolean(errors.checkout)}
          />
          <FieldError>{errors.checkout}</FieldError>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 wide:grid-cols-2">
        <div>
          <Label htmlFor="guests">{ui.form.guests}</Label>
          <Input
            id="guests"
            type="number"
            min="1"
            max="8"
            value={booking.guests}
            onChange={(event) => update('guests', event.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="roomPref">{ui.form.roomPref}</Label>
          <Select
            id="roomPref"
            value={booking.roomPref}
            onChange={(event) => update('roomPref', event.target.value)}
          >
            <option value="any">{ui.form.noPref}</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {localize(category.name, lang)}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="name">{ui.form.name}</Label>
        <Input
          id="name"
          value={booking.name}
          onChange={(event) => update('name', event.target.value)}
          aria-invalid={Boolean(errors.name)}
        />
        <FieldError>{errors.name}</FieldError>
      </div>

      <div className="grid grid-cols-1 gap-5 wide:grid-cols-2">
        <div>
          <Label htmlFor="email">{ui.form.email}</Label>
          <Input
            id="email"
            type="email"
            value={booking.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          <FieldError>{errors.email}</FieldError>
        </div>
        <div>
          <Label htmlFor="phone">{ui.form.phone}</Label>
          <Input
            id="phone"
            type="tel"
            value={booking.phone}
            onChange={(event) => update('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
          />
          <FieldError>{errors.phone}</FieldError>
        </div>
      </div>

      <div>
        <Label htmlFor="message">{ui.form.message}</Label>
        <Textarea
          id="message"
          rows={3}
          value={booking.message}
          onChange={(event) => update('message', event.target.value)}
        />
      </div>

      <Checkbox
        id="pet"
        checked={booking.pet}
        onChange={(event) => update('pet', event.target.checked)}
        label={ui.form.pet}
      />

      <div>
        <Button type="submit">{ui.form.submit}</Button>
      </div>
    </form>
  );
}
