import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col bg-gradient-to-bl from-[#032a1c] via-black to-[#032a1c] px-4 pt-12 pb-0">
      <div className="mx-auto w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-end items-start gap-12 lg:gap-42 w-full lg:px-32 pb-4">
          <div className="text-white uppercase">
            <h1 className="font-manuka text-2xl md:text-3xl">Build on ecochain</h1>
            <ul className="flex flex-col gap-2 mt-3 text-sm">
              <li className="hover:underline">
                <Link href="/">Docs</Link>
              </li>
              <li className="hover:underline">
                <Link href="/">Mainnet Hub</Link>
              </li>
              <li className="hover:underline">
                <Link href="/">Testnet Hub</Link>
              </li>
              <li className="hover:underline">
                <Link href="/">EcoChain Portal</Link>
              </li>
            </ul>
          </div>
          <div className="text-white uppercase">
            <h1 className="font-manuka text-2xl md:text-3xl">ecochain</h1>
            <ul className="flex flex-col gap-2 mt-3 text-sm">
              <li className="hover:underline">
                <Link href="/">Bridge</Link>
              </li>
              <li className="hover:underline">
                <Link href="/">Relay Bridge</Link>
              </li>
              <li className="hover:underline">
                <Link href="/">Ecosystem Fund</Link>
              </li>
              <li className="hover:underline">
                <Link href="/">Telegram</Link>
              </li>
              <li className="hover:underline">
                <Link href="/">Twitter / X</Link>
              </li>
            </ul>
          </div>
          <div className="text-white uppercase">
            <h1 className="font-manuka text-2xl md:text-3xl">Community</h1>
            <ul className="flex flex-col gap-2 mt-3 text-sm">
              <li className="hover:underline">
                <Link href="/">Discord</Link>
              </li>
              <li className="hover:underline">
                <Link href="/">Forum</Link>
              </li>
              <li className="hover:underline">
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-end pb-4 overflow-hidden">
        <div className="text-white uppercase manuka-bold text-center w-full text-8xl md:text-[200px] lg:text-[400px] xl:text-[500px] leading-none tracking-[0.06em] lg:tracking-[0.08em] pointer-events-none whitespace-nowrap">
          ecochain
        </div>
      </div>

      <div className="mx-auto w-full pb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 uppercase text-sm text-white opacity-80">
          <div>2025 © EcoChain. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
