import type { NextApiRequest, NextApiResponse } from 'next';

type LoginResponse = {
  token?: string;
  error?: string;
};

// This handler function handles requests to /api/login
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  // Ensure the request is a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Make a request to the actual backend API
    const apiResponse = await fetch("http://127.0.0.1:5000/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body), // Pass through the client data
    });

    // Parse the backend response
    const data = await apiResponse.json();
    console.log("Response from backend:", data); // Log backend response data

    // Check if the backend response is successful
    if (!apiResponse.ok) {
      return res.status(apiResponse.status).json({ error: data.error || 'Login failed' });
    }

    // Forward the backend response to the client
    return res.status(200).json({ token: data.token });
  } catch (error) {
    console.error("Error in proxying request:", error); // Log any error that occurs
    return res.status(500).json({ error: 'An error occurred. Please try again.' });
  }
}
