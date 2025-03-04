import React from 'react';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
 
export const runtime = 'edge';
 
export async function GET(req: NextRequest) {
  try {
    return new ImageResponse(
      <div
        style={{
          fontSize: 60,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        {'Frame App'}
      </div>,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}