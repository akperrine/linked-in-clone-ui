import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { Button } from "@trussworks/react-uswds";

const GoogleOauth = ()=>{

    const LogIn = useGoogleLogin({
        onSuccess: tokenResponse => getToken(tokenResponse)
    });
    const getToken = (codeResponse:TokenResponse) =>{
        console.log(codeResponse)
    }

    return (
        
        <Button type="button" onClick={() => LogIn()}>Sing in with Google</Button>

    )
}

export default GoogleOauth