// Backend API helpers for the ei.one React frontend.
// The static site is served from https://ei.one while the Laravel backend
// lives on https://app.ei.one — CORS on app.ei.one already allows these
// cross-origin POSTs (the legacy PHP forms used the same endpoints).

export const API_BASE = 'https://app.ei.one'

/**
 * Submit a lead / contact request to the backend.
 * Maps to POST /api/contact which stores a ContactMessage and emails the team.
 *
 * @param {{name:string, email:string, subject?:string, message:string}} payload
 * @returns {Promise<object>} the parsed JSON response
 */
export async function submitContact({ name, email, subject = '', message }) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ name, email, subject, message }),
  })

  let data = {}
  try {
    data = await res.json()
  } catch {
    /* ignore non-JSON responses */
  }

  if (!res.ok) {
    const error = new Error((data && (data.message || data.error)) || 'request_failed')
    error.status = res.status
    error.data = data
    throw error
  }

  return data
}

/**
 * Subscribe an email to the newsletter. Maps to POST /api/newsletter.
 * @param {{email:string}} payload
 * @returns {Promise<object>}
 */
export async function submitNewsletter({ email }) {
  const res = await fetch(`${API_BASE}/api/newsletter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  let data = {}
  try {
    data = await res.json()
  } catch {
    /* ignore non-JSON responses */
  }

  if (!res.ok || data?.success === false) {
    const error = new Error((data && (data.message || data.error)) || 'request_failed')
    error.status = res.status
    throw error
  }

  return data
}

/**
 * Log in against the backend (app.ei.one). ei.one and app.ei.one are the same
 * site (subdomains), so the SameSite=Lax session cookie set by this call is
 * sent on the follow-up navigation to the dashboard — no re-typing needed.
 * Requires credentials:'include' so the browser stores/sends the cookie.
 *
 * @param {{email:string, password:string, remember?:boolean}} payload
 * @returns {Promise<{ok:boolean, redirect:string}>}
 */
export async function submitLogin({ email, password, remember = false }) {
  const res = await fetch(`${API_BASE}/api/spa-login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password, remember }),
  })

  let data = {}
  try {
    data = await res.json()
  } catch {
    /* ignore non-JSON responses */
  }

  if (!res.ok || data?.ok === false) {
    const error = new Error((data && data.message) || 'login_failed')
    error.status = res.status
    error.data = data
    throw error
  }

  return data
}

/**
 * Submit a registration request to the backend.
 * Maps to POST /api/onboarding which creates a pending OnboardingRequest
 * (an admin approves it, which then creates the actual user account).
 *
 * @param {{name:string, email:string, password:string, passwordConfirmation:string}} payload
 * @returns {Promise<object>}
 */
export async function submitRegistration({ name, email, password, passwordConfirmation }) {
  const res = await fetch(`${API_BASE}/api/onboarding`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      entity_name: name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }),
  })

  let data = {}
  try {
    data = await res.json()
  } catch {
    /* ignore non-JSON responses */
  }

  if (!res.ok || data?.success === false) {
    const error = new Error((data && (data.error || data.message)) || 'request_failed')
    error.status = res.status
    error.data = data
    throw error
  }

  return data
}

