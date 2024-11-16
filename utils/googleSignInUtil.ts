import { useRouter } from 'next/navigation';

export const initializeGoogleSignIn = (callback: (response: any) => void) => {
  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);

  script.onload = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "1067000993547-ucdgg56vpeg37n3goacd593kei1261rg.apps.googleusercontent.com", // Replace with your actual client ID
        callback,
      });
    }
  };

  return () => {
    document.body.removeChild(script);
  };
};

export const handleGoogleCredentialResponse = async (
  response: any,
  router: ReturnType<typeof useRouter>, // Correct type for `router`
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  setSuccess: React.Dispatch<React.SetStateAction<string | null>>
) => {
  if (!response.credential) {
    console.error("No credential received from Google.");
    setError("Google sign-in failed. Please try again.");
    return;
  }

  try {
    const idToken = response.credential;

    const apiResponse = await fetch('/api/google-signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: idToken }),
    });

    const text = await apiResponse.text(); // Get the raw response
    console.log('Response from /api/google-signin:', text);
    const data = JSON.parse(text); // Attempt to parse JSON


    //const data = await apiResponse.json();

    if (!apiResponse.ok) {
      console.error("Google Sign-In API Error:", data.error || 'Unknown error');
      setError(data.error || 'Google sign-in failed');
      return;
    }

    localStorage.setItem('token', data.token);
    setSuccess('Google Sign-In successful! Redirecting...');
    setTimeout(() => router.back(), 1000); // Use `router.back()` for navigation
  } catch (err) {
    console.error("Error during Google Sign-In:", err);
    setError("An error occurred during Google sign-in. Please try again.");
  }
};
