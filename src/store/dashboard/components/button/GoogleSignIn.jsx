import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axiosInstance from "../../../lib/axios/axiosInstance";

const GoogleSignIn = () => {
  const handleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      const { data } = await axiosInstance.post(
        "http://127.0.0.1:8000/api/auth/google/callback", 
        { token: credential },  // إرسال التوكن في الجسم (body) وليس في الهيدر
        {
          headers: {
            Authorization: `Bearer ${credential}`,  // التوكن في الهيدر
          },
        }
      );
      console.log("Login Successful:", data);
    } catch (error) {
      console.error("Login Failed:", error.response?.data || error.message);
    }
  };

  const handleFailure = () => {
    console.error("Google Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="flex w-full justify-center items-center">
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleSignIn;
