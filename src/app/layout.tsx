import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { ScrollToTop } from "@/components/navigation/scroll-to-top";
import { DemoModalProvider } from "@/components/demo-modal/demo-modal-context";

import "./globals.css";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "77STUDIO architektury",
    description:
        "77STUDIO architektury — Warszawa",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body className={openSans.variable}>
                <DemoModalProvider>
                    <ScrollToTop />

                    <SiteHeader />

                    {children}

                    <SiteFooter />
                </DemoModalProvider>
            </body>
        </html>
    );
}