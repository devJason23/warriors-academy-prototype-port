import Script from 'next/script'
import TryoutLanding from './TryoutLanding'

export const metadata = {
  title: 'Train Like an Olympian — Missouri Warriors Basketball · Springfield, MO',
  // This is the link-preview text when the URL gets shared in a text message or
  // on Facebook — the page is noindex, so that sharing case is the only place it
  // is ever read. Matches the hero rather than the retired tryout framing.
  description:
    'Springfield kids can\u2019t play school ball until 7th grade. Missouri Warriors train up to four hours a day, four days a week \u2014 nothing like it within 200 miles. Only 2 spots left on the #2 ranked 12U team in the nation. Free evaluation.',
  robots: { index: false, follow: false },
}

// ── Analytics IDs. Empty string disables that tracker entirely (no script loads).
//
// IMPORTANT: these were previously edited in a working copy and deployed WITHOUT
// being committed, so git and production drifted apart — deploying from git would
// silently switch the Pixel off. Keep real values committed here so that can't
// happen again.
const FB_PIXEL_ID = '2921125477925922' // Events Manager → "Jason's Pixel"
const CLARITY_ID = 'y2m4b9bdoo' // clarity.microsoft.com → Settings → Project ID
const GA4_ID = 'G-F38S85R5PS' // analytics.google.com → Admin → Data streams

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

      {/* Microsoft Clarity — session recordings, scroll heatmaps, click maps,
          rage-click detection. This is what answers "where did they drop off". */}
      {CLARITY_ID ? (
        <Script id="ms-clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `}</Script>
      ) : null}

      {/* GA4 — traffic sources, channel attribution, time on page. */}
      {GA4_ID ? (
        <>
          <Script
            id="ga4-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          />
          <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}</Script>
        </>
      ) : null}

      <TryoutLanding />
    </>
  )
}
