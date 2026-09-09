import Script from "next/script";
import Analytics from "@/components/Analytics";
import { IBM_Plex_Sans_Arabic, Noto_Sans_Arabic, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const SITE = "https://jawib-ksa.com";
const TITLE = "جاوب — موظف استقبال رقمي لصفحتك";
const DESC =
  "صفحة هبوط عربية ومساعد ذكي يرد على أسئلة عملائك، يعطيهم الأسعار، ويحجز لهم موعدًا على مدار الساعة. جاهزة خلال خمسة أيام، بدفعة واحدة، وكل شيء يُسجَّل باسمك.";

export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: TITLE, template: "%s — جاوب" },
  description: DESC,
  applicationName: "جاوب",
  keywords: [
    "صفحة هبوط",
    "صفحة هبوط عربية",
    "مساعد ذكي",
    "شات بوت عربي",
    "تصميم صفحة هبوط",
    "موظف استقبال رقمي",
    "زيادة العملاء المحتملين",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: SITE,
    siteName: "جاوب",
    title: TITLE,
    description: DESC,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "جاوب — موظف استقبال رقمي لصفحتك" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og.png"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F5F2",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        {children}
        <Analytics />
        <Script id="snap-pixel" strategy="afterInteractive">{`
(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function(){
a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';r=t.createElement(s);r.async=!0;r.src=n;
var u=t.getElementsByTagName(s)[0];u.parentNode.insertBefore(r,u);})
(window,document,'https://sc-static.net/scevent.min.js');
snaptr('init','364c2c01-76c0-4d4d-a4b6-9f15c1444e6f',{});
snaptr('track','PAGE_VIEW');
`}</Script>
      </body>
    </html>
  );
}
