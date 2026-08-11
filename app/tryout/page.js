import Script from 'next/script'
import TryoutLanding from './TryoutLanding'

export const metadata = {
  title: 'Final Tryouts · Friday, August 14 — Missouri Warriors Basketball & Cheer · Republic, MO',
  description:
    'Missouri Warriors Final Tryouts — Friday, August 14 at 931 N. Walnut Ave., Republic, MO. Boys & girls basketball + cheer. Free to attend, limited roster spots. Pre-register now.',
  robots: { index: false, follow: false },
}

// ── Meta Pixel: paste the ID from Events Manager → Data sources, then deploy.
// Empty string = pixel fully disabled (no scripts load). The landing form
// already fires fbq('track','Lead') on submit whenever the pixel is present.
const FB_PIXEL_ID = ''

export default function TryoutPage() {
  return (
    <>
      {FB_PIXEL_ID ? (
        <Script id="fb-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}'); fbq('track', 'PageView');
        `}</Script>
      ) : null}
      <TryoutLanding />
    </>
  )
}
