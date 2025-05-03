import Link from 'next/link';
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
      <div className="text-[#00EE7D] text-[20px] sm:text-[24px] poppins-h1">
        EcoChain
      </div>
      <div className="pretendard-p text-[12px] sm:text-[14px] text-center sm:text-left">
        <p>
          copyright  © {new Date().getFullYear()} EcoChain. All rights reserved.
        </p>
      </div>
      <div className="flex space-x-4 sm:space-x-6 items-center">
        <Link href="https://www.github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00EE7D] transition-colors">
          <FaGithub className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" />
        </Link>
        <Link href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00EE7D] transition-colors">
          <FaFacebook className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" />
        </Link>
        <Link href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00EE7D] transition-colors">
          <BsTwitterX className="h-[14px] w-[14px] sm:h-[16px] sm:w-[16px]" />
        </Link>
        <Link href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00EE7D] transition-colors">
          <FaInstagram className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
