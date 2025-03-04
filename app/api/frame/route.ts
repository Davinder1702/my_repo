import { NextRequest } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const data = await req.json();
    
    return new Response(
      JSON.stringify({
        frames: [
          {
            version: 'vNext',
            image: `${req.nextUrl.origin}/api/og`,
            buttons: [{ label: 'Clicked!' }],
          },
        ],
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to process frame action' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}