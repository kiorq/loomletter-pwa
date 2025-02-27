import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import AuthView from "@/components/AuthView";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: [dark] }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
          <div className="mesh-gradient-bg !fixed !translate-y-[-50vh] md:!translate-y-[-70vh] top-0 left-0 w-full h-[40vh] z-[-1]" />

          <header className="w-full flex flex-row justify-between items-center border-b border-foreground/10 bg-foreground/5 md:bg-transparent md:py-5 md:px-5 py-4 px-3 sticky top-0 backdrop-blur-xl z-10">
            <div className="h-6 md:h-7 flex items-center">
              <Link href="/" className="">
                <img
                  src={"/logo.svg"}
                  className="h-4 md:h-5 dark:block hidden"
                  alt="LoomLetter Web"
                />
                <img
                  src={"/logo-light.svg"}
                  className="h-4 md:h-5 dark:hidden"
                  alt="LoomLetter Web"
                />
              </Link>
            </div>

            {/* <div className="">
            <Link
              href="#"
              className="text-primary underline decoration-primary/50 hover:decoration-primary transition-all duration-200 underline-offset-4 md:text-base text-sm"
            >
              Menu
            </Link>
          </div> */}
          </header>

          <SignedOut>
            <AuthView />
          </SignedOut>
          <SignedIn>Is Signed in{children}</SignedIn>

          <footer className="w-full py-8 md:py-12 border-t border-foreground/10 bg-foreground/5 text-center text-sm text-foreground/80">
            <p>
              © {new Date().getFullYear()} LoomLetter. All rights reserved.{" "}
              reserved.
            </p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
