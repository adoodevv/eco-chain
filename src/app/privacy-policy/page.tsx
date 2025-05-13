import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import FadeUpAnimation from "@/components/FadeUp";

export const metadata = {
   title: 'Privacy Policy | Mycelium',
   description: 'Join us in our mission to Enable Borderless Access with Technology.',
}

const Privacy = () => {
   return (
      <div className="flex flex-col mx-auto px-4 sm:px-6 py-20 text-white bg-black">
         <div className="flex flex-col">
            <div className="flex-grow flex flex-col relative overflow-hidden">
               <div className="flex flex-col mx-auto px-4 sm:px-6 py-8 md:py-12 items-center">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl text-center uppercase">
                     Privacy Policy
                  </h1>
                  <h2 className="text-4xl text-center mt-2 uppercase">Mycelium</h2>
                  <h3 className="text-lg sm:text-xl text-center mt-2">Last Updated: May 12, 2025</h3>
                  <p className="mt-6 text-lg sm:text-xl opacity-80 max-w-4xl mx-auto text-center">
                     Welcome to the Mycelium Website. At Mycelium, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website.
                  </p>
               </div>
            </div>
         </div>

         <div className="flex mx-auto px-4 sm:px-6 py-8">
            <div className="max-w-4xl mx-auto space-y-12">
               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Who We Are</h2>
                     <p className="opacity-80">
                        Mycelium is a trusted convener that brings together businesses, developers, and the broader ecosystem to drive innovation and foster collaboration for a decentralized future. Our website serves as a platform to connect stakeholders and promote borderless access through technology.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Cookies and Tracking Technologies</h2>
                     <p className="opacity-80 mb-4">
                        We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                     </p>
                     <ul className="list-disc pl-6 space-y-2 opacity-80">
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Remember your preferences and settings</li>
                        <li>Improve our services and user experience</li>
                        <li>Deliver targeted content relevant to your interests</li>
                     </ul>
                     <p className="opacity-80 mt-4">
                        You can control cookie preferences through your browser settings. However, disabling cookies may affect certain website functionalities.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Data Security</h2>
                     <p className="opacity-80">
                        We implement robust security measures to protect your personal information, including:
                     </p>
                     <ul className="list-disc pl-6 space-y-2 opacity-80 mt-2">
                        <li>Encryption protocols for data transmission</li>
                        <li>Secure server infrastructure with regular audits</li>
                        <li>Access controls and authentication measures</li>
                        <li>Regular security assessments and vulnerability testing</li>
                     </ul>
                     <p className="opacity-80 mt-4">
                        While we strive to protect your data, no electronic transmission or storage method is 100% secure. We cannot guarantee absolute security but we commit to implementing industry-standard protections.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">International Data Transfers</h2>
                     <p className="opacity-80">
                        As a global organization promoting decentralized technologies, your information may be transferred to and processed in countries outside of your residence. These countries may have data protection laws that differ from your jurisdiction. We ensure all transfers comply with applicable data protection laws and implement appropriate safeguards such as standard contractual clauses where required.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Your Rights</h2>
                     <p className="opacity-80 mb-4">
                        Depending on your location, you may have certain rights regarding your personal data, including:
                     </p>
                     <ul className="list-disc pl-6 space-y-2 opacity-80">
                        <li>The right to access and receive a copy of your personal data</li>
                        <li>The right to rectify inaccurate or incomplete information</li>
                        <li>The right to request deletion of your personal data</li>
                        <li>The right to restrict or object to processing of your data</li>
                        <li>The right to data portability</li>
                        <li>The right to withdraw consent (where processing is based on consent)</li>
                     </ul>
                     <p className="opacity-80 mt-4">
                        To exercise these rights, please contact us using the information in the "Contact Us" section below.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Third Party Links</h2>
                     <p className="opacity-80">
                        Our website may contain links to third-party websites, services, or applications. These third-party sites have separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites. We encourage you to review their privacy policies before providing any personal information.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Changes to This Privacy Policy</h2>
                     <p className="opacity-80">
                        We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our website after such modifications constitutes acknowledgment of the modified policy.
                     </p>
                  </section>
               </FadeUpAnimation>

               <FadeUpAnimation>
                  <section>
                     <h2 className="text-2xl sm:text-4xl uppercase mb-4">Contact Us</h2>
                     <p className="opacity-80 mb-4">
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                     </p>
                     <div className="flexopacity-80 space-y-2">
                        <p className="flex gap-1">Email: <Link href="mailto:privacy@mycelium.com" className="text-cyan-400 hover:underline flex items-center">privacy@mycelium.com <MdArrowOutward className="ml-1" /></Link></p>
                        <p>Mailing Address: </p>
                     </div>
                     <p className="opacity-80 mt-4">
                        We will respond to your inquiry within a reasonable timeframe in accordance with applicable laws.
                     </p>
                  </section>
               </FadeUpAnimation>
            </div>
         </div>
      </div>
   )
}

export default Privacy
