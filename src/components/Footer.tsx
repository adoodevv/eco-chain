import Link from 'next/link';

const Footer = () => {
  const buildOnMycelium = [
    {
      title: 'Docs',
      href: '/docs',
    },
    {
      title: 'Mainnet Hub',
      href: '/mainnet-hub',
    },
    {
      title: 'Testnet Hub',
      href: '/testnet-hub',
    },
    {
      title: 'Mycelium Portal',
      href: '/mycelium-portal',
    },
  ]

  const ecochain = [
    {
      title: 'Bridge',
      href: '/bridge',
    },
    {
      title: 'Relay Bridge',
      href: '/bridge',
    },
    {
      title: 'Ecosystem Fund',
      href: '/ecosystem-fund',
    },
    {
      title: 'Telegram',
      href: 'https://t.me/myceliumlabsofficial',
    },
    {
      title: 'Twitter / X',
      href: 'https://x.com/MyceliumL2',
    },
  ]

  const community = [
    {
      title: 'Discord',
      href: '/discord',
    },
    {
      title: 'Forum',
      href: '/forum',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
  ]

  return (
    <div className="flex flex-col bg-gradient-to-bl from-[#032a1c] via-black to-[#032a1c] px-4 pt-12 pb-0">
      <div className="mx-auto w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-end items-start gap-12 lg:gap-42 w-full lg:px-32 pb-4">
          <div className="text-white uppercase">
            <h1 className="text-2xl md:text-3xl">Build on Mycelium</h1>
            <ul className="flex flex-col gap-2 mt-3 text-sm">
              {buildOnMycelium.map((item) => (
                <li key={item.title} className="group">
                  <Link href={item.href}>
                    <div className="relative overflow-hidden">
                      <div className="transition-transform duration-500 group-hover:-translate-y-full hover:underline">
                        {item.title}
                      </div>
                      <div className="absolute top-0 left-0 transition-transform duration-500 translate-y-full hover:underline group-hover:translate-y-0">
                        {item.title}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white uppercase">
            <h1 className="text-2xl md:text-3xl">Mycelium</h1>
            <ul className="flex flex-col gap-2 mt-3 text-sm">
              {ecochain.map((item) => (
                <li key={item.title} className="group">
                  <Link href={item.href}>
                    <div className="relative overflow-hidden">
                      <div className="transition-transform duration-500 group-hover:-translate-y-full hover:underline">
                        {item.title}
                      </div>
                      <div className="absolute top-0 left-0 transition-transform duration-500 translate-y-full hover:underline group-hover:translate-y-0">
                        {item.title}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white uppercase">
            <h1 className="text-2xl md:text-3xl">Community</h1>
            <ul className="flex flex-col gap-2 mt-3 text-sm">
              {community.map((item) => (
                <li key={item.title} className="group">
                  <Link href={item.href}>
                    <div className="relative overflow-hidden">
                      <div className="transition-transform duration-500 group-hover:-translate-y-full hover:underline">
                        {item.title}
                      </div>
                      <div className="absolute top-0 left-0 transition-transform duration-500 translate-y-full hover:underline group-hover:translate-y-0">
                        {item.title}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-end pb-4 overflow-hidden">
        <div className="text-white uppercase manuka-bold text-center w-full text-8xl md:text-[200px] lg:text-[400px] xl:text-[500px] leading-none tracking-[0.06em] lg:tracking-[0.08em] pointer-events-none whitespace-nowrap">
          Mycelium
        </div>
      </div>

      <div className="mx-auto w-full pb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 uppercase text-sm text-white opacity-80">
          <div>© 2025 Mycelium. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="group">
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-500 group-hover:-translate-y-full hover:underline">
                  Privacy Policy
                </div>
                <div className="absolute top-0 left-0 transition-transform duration-500 translate-y-full hover:underline group-hover:translate-y-0">
                  Privacy Policy
                </div>
              </div>
            </Link>
            <span>|</span>
            <Link href="/terms-of-service" className="group">
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-500 group-hover:-translate-y-full hover:underline">
                  Terms of Service
                </div>
                <div className="absolute top-0 left-0 transition-transform duration-500 translate-y-full hover:underline group-hover:translate-y-0">
                  Terms of Service
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
