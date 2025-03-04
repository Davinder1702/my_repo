import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process?.env?.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  // Using a reliable public image URL
  const imageUrl = 'https://i.imgur.com/YlZN7QB.png';

  return (
    <>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content={imageUrl} />
      <meta property="fc:frame:button:1" content="Click me!" />
      <meta property="fc:frame:post_url" content={`${baseUrl}/api/frame`} />
      <meta property="og:title" content="My Frame App" />
      <meta property="og:image" content={imageUrl} />
      
      <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
        <h1 className="text-4xl font-bold text-black mb-8">{'Frame App'}</h1>
        <p className="text-black">{'This is a frame-enabled page'}</p>
      </div>
    </>
  );
}