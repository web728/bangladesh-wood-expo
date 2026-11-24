'use client';

import Icon from '../Icon';
import { useLeadForm } from './useLeadForm';
import { useCaptchaSubmit } from './useCaptchaSubmit';
import RecaptchaCheckbox from './RecaptchaCheckbox';
import { TextInput, ConsentCheck, Honeypot, FormError, Submit } from './Fields';
import { visitorSchema } from '@/lib/forms';
import './form-captcha.css';

export default function VisitorForm() {
  const form = useLeadForm('visitor', visitorSchema, {
    name: '', company: '', designation: '', phone: '', email: '',
    businessType: '', country: '', consent: false,
  });
  const captcha = useCaptchaSubmit(form.status, form.submit);
  const v = form.values;
  const existing = form.result?.existing;

  if (form.status === 'done') {
    return (
      <section className="form-done" role="status" aria-live="polite">
        <span className="form-done__icon"><Icon name="check" /></span>
        <h2 className="h-md">{existing ? "Interest already registered" : "Thank you. Your interest is registered."}</h2>
        <p>We will use your submitted details to share confirmed next-edition and visitor-registration information.</p>
      </section>
    );
  }

  return (
    <form className="lead-form" onSubmit={captcha.onSubmit} noValidate aria-busy={form.status === 'sending'}>
      <Honeypot inputRef={form.honeypot} />
      <h3 className="lead-form__group">Register for visitor updates</h3>
      <div className="form-grid">
        <TextInput name="name" label="Full name" required value={v.name} onChange={(x) => form.set('name', x)} error={form.errors.name} autoComplete="name" />
        <TextInput name="company" label="Company / organisation" required value={v.company} onChange={(x) => form.set('company', x)} error={form.errors.company} autoComplete="organization" />
        <TextInput name="designation" label="Designation" required value={v.designation} onChange={(x) => form.set('designation', x)} error={form.errors.designation} autoComplete="organization-title" />
        <TextInput name="phone" label="Mobile / WhatsApp" type="tel" required value={v.phone} onChange={(x) => form.set('phone', x)} error={form.errors.phone} autoComplete="tel" inputMode="tel" />
        <TextInput name="email" label="Email address" type="email" required value={v.email} onChange={(x) => form.set('email', x)} error={form.errors.email} autoComplete="email" inputMode="email" />
        <TextInput name="businessType" label="Business category (optional)" value={v.businessType} onChange={(x) => form.set('businessType', x)} error={form.errors.businessType} placeholder="Manufacturer, dealer, architect…" />
        <TextInput name="country" label="Country" required value={v.country} onChange={(x) => form.set('country', x)} error={form.errors.country} autoComplete="country-name" />
      </div>
      <div className="form-checks">
        <ConsentCheck checked={v.consent} onChange={(x) => form.set('consent', x)} error={form.errors.consent} purpose="to record my interest and send verified exhibition updates" />
        <RecaptchaCheckbox resetRef={captcha.resetRef} onTokenChange={captcha.onTokenChange} error={captcha.error} />
      </div>
      <FormError message={form.status === 'error' ? form.result?.error || 'Please check your details and try again.' : undefined} />
      <div className="form-nav"><Submit sending={form.status === 'sending'}>Register interest</Submit></div>
      <p className="form-foot small muted">Visitor-entry, programme and travel updates will be sent after organiser confirmation.</p>
    </form>
  );
}
