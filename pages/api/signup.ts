// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type SignupResponse = {
  message?: string;
  error?: string;
};

// Endpoint to handle sign-up requests from the frontend
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignupResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Send the request data to the backend API endpoint
    const apiResponse = await fetch('http://127.0.0.1:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await apiResponse.json();
    console.log("Response from backend:", data); // Log backend response data


    if (!apiResponse.ok) {
      return res.status(apiResponse.status).json({ error: data.error || 'Sign-up failed' });
    }

    return res.status(200).json({ message: data.message });
  } catch (error) {
    console.error("Error in proxying sign-up request:", error);
    return res.status(500).json({ error: 'An error occurred. Please try again.' });
  }
}
