export function getSocialLoginUrl(){
    return `http://localhost:8282/oauth2/authorization/google?redirect_uri=http://localhost:5173/oauth2/redirect`;
}