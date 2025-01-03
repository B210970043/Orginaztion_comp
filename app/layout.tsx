import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
  src:[
    {
      path: './fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    
    {
      path: './fonts/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
  
    {
      path: './fonts/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    
    {
      path: './fonts/WorkSans-Thin.ttf',
      weight: '200',
      style: 'normal'
    },{
      path: './fonts/WorkSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal'
    },
  ],
  variable: '--font-work-sans',
})


export const metadata: Metadata = {
  title: "Which one u wanna cooperate ?",
  description: "Grow, Creative, ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
