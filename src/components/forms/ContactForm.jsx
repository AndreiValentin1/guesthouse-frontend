import { useState } from 'react';
import { Button } from '../common/Button';
import { FieldError, Input, Label, Textarea } from '../common/Field';
import { FadeUp } from '../motion/FadeUp';
import { useLang } from '../../i18n/LanguageContext';
import { validateContact } from '../../utils/validation';

export function ContactForm() {
  const { ui } = useLang();
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => setContact((current) => ({ ...current, [field]: value }));

  const onSubmit = (event) => {
    event.preventDefault();
    const found = validateContact(contact, ui.form);
    setErrors(found);
    if (Object.keys(found).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <FadeUp as="p" duration={0.4} role="status" className="m-0 text-lg leading-[1.5] text-gray-900">
        {ui.rezervare.success}
      </FadeUp>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div>
        <Label htmlFor="contact-name">{ui.form.name}</Label>
        <Input
          id="contact-name"
          value={contact.name}
          onChange={(event) => update('name', event.target.value)}
          aria-invalid={Boolean(errors.name)}
        />
        <FieldError>{errors.name}</FieldError>
      </div>
      <div>
        <Label htmlFor="contact-email">{ui.form.email}</Label>
        <Input
          id="contact-email"
          type="email"
          value={contact.email}
          onChange={(event) => update('email', event.target.value)}
          aria-invalid={Boolean(errors.email)}
        />
        <FieldError>{errors.email}</FieldError>
      </div>
      <div>
        <Label htmlFor="contact-message">{ui.form.messageContact}</Label>
        <Textarea
          id="contact-message"
          rows={4}
          value={contact.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
        <FieldError>{errors.message}</FieldError>
      </div>
      <div>
        <Button type="submit">{ui.form.submitContact}</Button>
      </div>
    </form>
  );
}
