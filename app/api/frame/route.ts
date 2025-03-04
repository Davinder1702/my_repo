import { NextRequest } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  try {
    // Using the same reliable image URL
    const imageUrl = 'https://www.istockphoto.com/resources/images/HomePage/Tiles/C5-NOV-iStock-2168900850.jpg';
    
    return new Response(
      JSON.stringify({
        frames: [
          {
            version: 'vNext',
            image: imageUrl,
            buttons: [{ label: 'Clicked!' }],
          },
        ],
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
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
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}