import { headers } from 'next/headers';
import { FrameButton } from './components/FrameButton';

export default async function Home() {
  const headersList = headers();
  const frameContext = (await headersList).get('fc-frame');

  return (
    <>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://i.imgur.com/YlZN7QB.png" />
      <meta property="fc:frame:button:1" content="Say Hello!" />
      <meta property="og:title" content="Hello World Frame" />
      <meta property="og:image" content="https://i.imgur.com/YlZN7QB.png" />
      
      <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
        <h1 className="text-4xl font-bold text-black mb-8">{'Hello World Frame!'}</h1>
        <FrameButton />
      </div>
    </>
  );
}