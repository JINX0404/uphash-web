import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | UPHASH Inc.",
  description: "UPHASH Inc.へのお問い合わせはこちらから。ご質問やご相談をお待ちしております。",
  openGraph: {
    title: "お問い合わせ | UPHASH Inc.",
    description: "ご質問やご相談をお待ちしております",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
    siteName: "UPHASH Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}