import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { token } = req.body;

  try {
    // Forward the request to the Flask backend
    const response = await fetch('http://127.0.0.1:5000/api/google-signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error || 'Failed to sign in with Google',
      });
    }

    // Return the JSON response from the backend
    res.status(200).json(data);
  } catch (err) {
    console.error('Error in /api/google-signin route:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
