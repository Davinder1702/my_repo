import { NextRequest } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  try {
    return new Response(
      JSON.stringify({
        frames: [
          {
            version: 'vNext',
            image: 'https://i.imgur.com/YlZN7QB.png',
            buttons: [{ label: 'Hello received!' }],
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