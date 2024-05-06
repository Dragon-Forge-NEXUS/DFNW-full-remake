import "~/styles/globals.css";
import { Roboto as FontSans } from "next/font/google";
import { cn } from "~/lib/utils";
 
const fontSans = FontSans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "DFN",
  description: "DragonForgeNEXUS! w-what do I put here? Oh yea! We have lots of pages including code tutorials, game reviews, and more!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className='dark'>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
