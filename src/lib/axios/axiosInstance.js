import axios from "axios";
import Cookies from "universal-cookie";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "http://localhost:8000";

const cookies = new Cookies();
const token = cookies.get("Bearer");

const axiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "X-XSRF-TOKEN": cookies.get("XSRF-TOKEN"),
    Authorization: token ? `Bearer ${token}` : "",
    timeout: 1000,
  },
  withCredentials: true,
});

// Error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 429) {
      if (!window.showingRateLimitMessage) {
        window.showingRateLimitMessage = true;
        alert("لقد أرسلت عددًا كبيرًا من الطلبات. يرجى المحاولة لاحقًا.");
        setTimeout(() => {
          window.showingRateLimitMessage = false; 
        }, 3000); 
      }
    }
    return Promise.reject(error); 
  }
);

(async function checkAndSetCsrfCookie() {
  const csrfToken = cookies.get("XSRF-TOKEN");

  if (!csrfToken) {
    try {
      const response = await axios.get(
        "/sanctum/csrf-cookie",
        {
          baseURL: API_URL,
          withCredentials: true,
        }
      );
      document.querySelector('meta[name="csrf-token"]').setAttribute('content', csrfToken);
    } catch (error) {}
  }
})();

export default axiosInstance;
