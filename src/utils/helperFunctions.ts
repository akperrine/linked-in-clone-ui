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

export function getSocialLoginUrl() {
  return `http://localhost:8282/oauth2/authorization/google?redirect_uri=http://localhost:5173/oauth2/redirect`;
}
