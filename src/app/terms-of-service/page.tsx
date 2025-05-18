import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import FadeUpAnimation from "@/components/FadeUp";

export const metadata = {
   title: 'Terms of Service | Mycelium',
   description: 'Join us in our mission to Enable Borderless Access with Technology.',
}

const Terms = () => {
   return (
      <div className="flex flex-col mx-auto px-4 sm:px-6 py-20 text-white bg-black">
         <div className="flex flex-col">
            <div className="flex-grow flex flex-col relative overflow-hidden">
               <div className="flex flex-col mx-auto px-4 sm:px-6 py-8 md:py-12 items-center">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl text-center uppercase">
                     Terms of Service
                  </h1>
                  <h2 className="text-3xl sm:text-4xl text-center mt-2 uppercase">Mycelium Labs</h2>
                  <h3 className="text-lg sm:text-xl text-center mt-2">Last Updated: May 12, 2025</h3>
                  <p className="mt-6 text-lg sm:text-xl opacity-80 max-w-4xl mx-auto text-center">
                     Welcome to the Mycelium Labs Website. These Terms of Service ("Terms") govern your access to and use of the Mycelium Labs website (the "Website"). By accessing the Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.
                  </p>
               </div>
            </div>
         </div>

         <div className="flex mx-auto px-4 sm:px-6 py-8">
            <div className="max-w-4xl mx-auto space-y-12">
               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">About Mycelium Labs</h2>
                     <p className="opacity-80">
                        Mycelium is a decentralized technology convener that facilitates collaboration between businesses, developers, and ecosystem participants to drive innovation in borderless technologies. Our website serves as an informational platform and community hub for these purposes.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Use of the Website</h2>
                     <p className="opacity-80 mb-4">
                        By accessing the Mycelium website, you agree to:
                     </p>
                     <ul className="list-disc pl-6 space-y-2 opacity-80">
                        <li>Use the website only for lawful purposes</li>
                        <li>Not engage in any activity that disrupts or interferes with the website</li>
                        <li>Not attempt to gain unauthorized access to any systems or networks</li>
                        <li>Comply with all applicable laws and regulations</li>
                        <li>Not use the website to transmit any harmful or malicious content</li>
                     </ul>
                     <p className="opacity-80 mt-4">
                        We reserve the right to restrict access to any user who violates these terms.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Intellectual Property</h2>
                     <p className="opacity-80">
                        All content on this website, including text, graphics, logos, and software, is the property of Mycelium Labs or its licensors and is protected by intellectual property laws. You may not:
                     </p>
                     <ul className="list-disc pl-6 space-y-2 opacity-80 mt-2">
                        <li>Reproduce, distribute, or modify any content without our express written permission</li>
                        <li>Use our trademarks or branding without authorization</li>
                        <li>Reverse engineer or decompile any website components</li>
                     </ul>
                     <p className="opacity-80 mt-4">
                        For inquiries about using our content, please contact us through the information provided below.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Privacy</h2>
                     <p className="opacity-80">
                        Your use of our website is subject to our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the website, you consent to our collection and use of your data as described in the Privacy Policy.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Disclaimers</h2>
                     <p className="opacity-80 mb-4">
                        The Mycelium Labs website is provided "as is" without warranties of any kind:
                     </p>
                     <ul className="list-disc pl-6 space-y-2 opacity-80">
                        <li>We do not guarantee the accuracy or completeness of any information on the website</li>
                        <li>We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose</li>
                        <li>We do not warrant that the website will be uninterrupted or error-free</li>
                        <li>Content is provided for informational purposes only and should not be construed as professional advice</li>
                     </ul>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Limitation of Liability</h2>
                     <p className="opacity-80">
                        To the fullest extent permitted by law, Mycelium Labs and its affiliates shall not be liable for:
                     </p>
                     <ul className="list-disc pl-6 space-y-2 opacity-80 mt-2">
                        <li>Any direct, indirect, incidental, or consequential damages</li>
                        <li>Loss of data, profits, or business opportunities</li>
                        <li>Damages resulting from unauthorized access to or alteration of your transmissions</li>
                        <li>Any matters beyond our reasonable control</li>
                     </ul>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Indemnification</h2>
                     <p className="opacity-80">
                        You agree to defend, indemnify, and hold harmless Mycelium Labs, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with:
                     </p>
                     <ul className="list-disc pl-6 space-y-2 opacity-80 mt-2">
                        <li>Your access to or use of the website</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any third-party right, including intellectual property rights</li>
                     </ul>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Governing Law and Dispute Resolution</h2>
                     <p className="opacity-80 mb-4">
                        These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                     </p>
                     <p className="opacity-80">
                        Any disputes arising under these Terms shall first be attempted to be resolved through good faith negotiations. If unresolved, disputes shall be finally settled by binding arbitration in accordance with the rules of [Arbitration Institution]. The arbitration shall take place in [Location] and shall be conducted in English.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Changes to These Terms</h2>
                     <p className="opacity-80">
                        We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the website after such changes constitutes acceptance of the new Terms.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Termination</h2>
                     <p className="opacity-80">
                        We may terminate or suspend your access to the website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the website will cease immediately.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Contact Us</h2>
                     <p className="opacity-80 mb-4">
                        For any questions about these Terms of Service, please contact us at:
                     </p>
                     <div className="opacity-80 space-y-2">
                        <p className="flex gap-1">Email: <Link href="mailto:legal@mycelium.com" className="text-cyan-400 hover:underline flex items-center">legal@mycelium.com <MdArrowOutward className="ml-1" /></Link></p>
                        <p>Mailing Address: </p>
                     </div>
                  </section>
               </FadeUpAnimation>
            </div>
         </div>
      </div>
   )
}

export default Terms
