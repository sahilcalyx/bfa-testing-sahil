import { defaultSeo } from "../seo/seo.config";
import "./globals.css";
import "../react/index.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_BASE_URL || "https://britfintechawards.com"),
  ...defaultSeo,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WKBV6SRT');
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5RQ73JH6');
        `}} />
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/animate.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick.css" />
        <link rel="stylesheet" href="/assets/css/plugins/lightgallery.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/theme_12.css" />
      </head>
      <body className="font-sans antialiased">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKBV6SRT" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RQ73JH6" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-49BRLNZQ4P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-49BRLNZQ4P', {
              send_page_view: true
            });
          `}
        </Script>
        {children}
        <Script id="tawk-to-script" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              function hideTawkOnMobile() {
                try {
                  if (window.innerWidth <= 768 && window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
                    window.Tawk_API.hideWidget();
                  }
                } catch (e) {}
              }
              Tawk_API.onLoad = hideTawkOnMobile;
              window.addEventListener("resize", hideTawkOnMobile);
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6891f729932a8a1930b18491/1j1t2qvk8';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
