export function getXsrfToken(): string {
  const xsrfCookie = document.cookie
    .split("; ")
    .filter((cookie) => cookie.includes("XSRF-TOKEN"));
  let xsrfToken = "";
  if (xsrfCookie.length > 0) {
    xsrfToken = xsrfCookie[0].split("=")[1];
  }

  return xsrfToken;
}

export function getSocialLoginUrl() {
  return `http://localhost:8282/oauth2/authorization/google?redirect_uri=http://localhost:5173/oauth2/redirect`;
}

export function encodedToJpegUrl(base64EncodedString: string | null): string {
  if (base64EncodedString === null) {
    return "";
  }
  const binaryString = atob(base64EncodedString);

  const uint8Array = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }

  const blob = new Blob([uint8Array], { type: "image/jpeg" });
  return URL.createObjectURL(blob);
}
