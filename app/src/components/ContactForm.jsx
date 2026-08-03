import React, { useState } from 'react'

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!values.name || !values.email || !values.message) return
    setStatus('sending')
    // No backend is wired up yet — replace this with your real submission endpoint.
    setTimeout(() => {
      setStatus('success')
    }, 600)
  }

  if (status === 'success') {
    return (
      <div className="form_message-success-wrapper is-alternate w-form-done">
        <div className="form_message-success">
          <div className="success-text">Thank you! Your message has been sent!</div>
        </div>
      </div>
    )
  }

  return (
    <div className="contact7_form-block w-form">
      <form onSubmit={handleSubmit} className="contact7_form">
        <div className="form_field-wrapper is-alternate">
          <label htmlFor="Contact-7-Name" className="form_field-label is-alternate">
            Name
          </label>
          <input
            className="form_input is-alternate w-input"
            maxLength={256}
            name="name"
            placeholder=""
            type="text"
            id="Contact-7-Name"
            required
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="form_field-wrapper is-alternate">
          <label htmlFor="Contact-7-Email" className="form_field-label is-alternate">
            Email
          </label>
          <input
            className="form_input is-alternate w-input"
            maxLength={256}
            name="email"
            placeholder=""
            type="email"
            id="Contact-7-Email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form_field-wrapper is-alternate">
          <label htmlFor="Contact-7-Message" className="form_field-label is-alternate">
            Message
          </label>
          <textarea
            id="Contact-7-Message"
            name="message"
            maxLength={5000}
            placeholder="Type your message..."
            required
            className="form_input is-text-area is-alternate w-input"
            value={values.message}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          className="button w-button"
          value={status === 'sending' ? 'Please wait...' : 'Submit'}
          disabled={status === 'sending'}
        />
      </form>

      {status === 'error' && (
        <div className="form_message-error-wrapper is-alternate w-form-fail">
          <div className="form_message-error">
            <div className="error-text">Oops! There was an error submitting your message.</div>
          </div>
        </div>
      )}
    </div>
  )
}
