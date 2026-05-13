export function sanitizeDigits(value = "") {
  return String(value).replace(/\D/g, "");
}

export function buildWhatsAppUrl(number, message = "") {
  const digits = sanitizeDigits(number);
  const text = encodeURIComponent(message.trim());

  if (!digits) return "#";
  return `https://wa.me/${digits}${text ? `?text=${text}` : ""}`;
}

export function buildMailtoUrl(email, { subject = "", body = "" } = {}) {
  if (!email) return "#";

  const params = new URLSearchParams();

  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);

  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ""}`;
}

export function buildTelUrl(number) {
  const digits = sanitizeDigits(number);
  return digits ? `tel:+${digits}` : "#";
}
