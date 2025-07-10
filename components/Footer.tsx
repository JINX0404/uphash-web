import Link from "next/link"

const footerNavigation = {
  main: [
    { name: "ホーム", href: "/" },
    { name: "会社概要", href: "/about" },
    { name: "ニュース", href: "/news" },
    { name: "採用情報", href: "/recruit" },
    { name: "お問い合わせ", href: "/contact" },
    { name: "有料ブログ", href: "/premium-blog" },
  ],
  social: [
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {footerNavigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {footerNavigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-10 border-t border-gray-900/10 pt-8">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} UPHASH Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}