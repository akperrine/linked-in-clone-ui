export function getXsrfToken(): string {
  const xsrfCookie = document.cookie
    .split("; ")
    .filter((cookie) => cookie.includes("XSRF-TOKEN"));
  let xsrfToken = "";
  if (xsrfCookie) {
    xsrfToken = xsrfCookie[0].split("=")[1];
  }

  return xsrfToken;
}
