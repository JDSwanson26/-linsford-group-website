import Footer from '../sections/Footer';

const TermsPage = () => {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/container-ship.jpg)' }}
        >
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4 animate-fade-in">
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-navy mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Linsford Group permits the use of this Website subject to these terms and conditions ("the Terms and Conditions"). By using this Website in any way, you shall be deemed to have accepted all the Terms and Conditions unconditionally. You must not use this Website if you do not agree to the Terms and Conditions. Your use of any accommodation offered by us will also be subject to applicable provisions of the Terms and Conditions. In the event of any conflict between the Terms and Conditions and any other conditions stipulated elsewhere, including in one of our Linsford Group's, the Terms and Conditions as contained herein will prevail.
              </p>
            </div>

            {/* Use of the Website */}
            <div className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-navy mb-4">
                Use of the Website
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The contents of this website, including any content, information, software, icons, text, links, graphics, lay-outs, images, sound clips, trade names, logos, trademarks and service marks are protected by law, including but not limited to copyright and trade mark law, and are owned by or licensed to Linsford Group. No license to or right in any of such contents is granted to or conferred upon you. Any unauthorised use, distribution or reproduction of the said contents is prohibited.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By entering this Website, you agree that you will not use any device, software or other instrumentality to interfere or attempt to interfere with the proper working of the Website and that you will not take any action that imposes an unreasonable or disproportionately large load on our infrastructure. In addition, you agree that you will not use any robot, spider, other automatic device, or manual process to monitor or copy the pages of the Website or the content contained herein, without the prior written consent from an authorised Linsford Group representative (such content is deemed given for standard search engine technology employed by internet search websites to direct internet users to this Website). You may not use the Website to distribute material which is defamatory, offensive and unlawful or contains hate speech.
              </p>
            </div>

            {/* Disclaimer */}
            <div id="disclaimer" className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-navy mb-4">
                Disclaimer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While Linsford Group takes reasonable measures to ensure that the contents of this website are accurate and complete, Linsford Group makes no representations or warranties, whether express or implied, as to the quality, timelines, operation, integrity, availability or functionality of this Website or as to the accuracy, completeness or reliability of any information on this Website. Linsford Group reserves the right to make changes, corrections and/or improvements to the information and to the products and programs described in such information, at any time without notice.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Linsford Group will use reasonable endeavors to maintain the availability of the Website, except during scheduled maintenance periods, and reserves the right to discontinue providing the Website or the service or any part thereof with or without notice to you. Any person who accesses this Website or relies on this Website or on the information contained in this Website does so at his or her own risk.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In addition to the disclaimers contained elsewhere in these Terms and Conditions, Linsford Group also makes no warranty representation, whether express or implied, that the information or files available on this Website are free of viruses, spyware, malware, trojans, destructive materials or any other data or code which is able to corrupt, destroy, compromise or jeapordise the operation, stability, security functionality or content of your computer system, computer network, hardware or software in any way. Linsford Group does not accept any responsibility for any errors or omissions on this Website.
              </p>
            </div>

            {/* Privacy Policy */}
            <div id="privacy" className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-navy mb-4">
                Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Linsford Group has a strong commitment to providing excellent service to all of our customers and visitors of this Website, including respecting terms about privacy. Linsford Group will explicitly ask when we need information that personally identifies you or allows us to contact you ("personal information"). Generally this information is requested when making reservations: when requesting a particular service. You agree to provide accurate and current information, and not to impersonate or misrepresent any person or entity or falsely state or otherwise misrepresent your affiliation with anyone or anything.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The purposes for which Linsford Group will use your personal information are as follows: to transact with you via the website or email regarding purchase and reservation, to provide services to you via the website; to inform you of new features, services, special offers and products (provided you have consented to receiving such marketing material); to enable us to process, validate and verify reservations and requests for services and for the purposes for which you specifically provided the information; to improve your experience on our website.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Linsford Group shall be entitled to disclose personal information if required to do so (a) to comply with applicable law or with legal process served on Linsford Group; (b) to protect and defend the rights or property of Linsford Group, and (c) for the purpose of distributing same to various employees and/or third parties who assist Linsford Group in providing services to you and thus need to know your personal information in order to render a proper and efficient service to you. We will ensure that all such employees and/or third party service providers having access to your personal information are bound by appropriate and legally binding confidentiality and non-use obligations in relation to your personal information.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You are aware that information and data is automatically collected through the standard operation of the internet servers and through the use of "cookies". "Cookies" are small text files a website can use to recognise repeat users, facilitate the users on gaining access to and use of the website and allow a website to track usage behaviour and compile aggregate data that will allow content improvements and targeted advertising. Cookies are not programs that come onto your system and damage files. Generally, cookies work by assigning a unique number to you that has no meaning outside the assigning site. If you do not want information collected through the use of cookies, there is a simple procedure in most browsers that allows you to deny or accept the cookie feature, however, you should note that cookies may be necessary to provide you with certain features (e.g. customised delivery of information) available on our Websites.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold">
                WHILE LINSFORD GROUP IS OF INTENT TO TAKE REASONABLE MEASURES TO KEEP PERSONAL INFORMATION ABOUT YOU CONFIDENTIAL, IT SHALL HOWEVER NOT BE LIABLE FOR ANY LOSS OR DAMAGE, HOWSOEVER ARISING, SUFFERED AS A RESULT OF THE DISCLOSURE OF SUCH INFORMATION.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Linsford Group will:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4 mt-2 space-y-1">
                <li>treat your personal information as strictly confidential;</li>
                <li>take appropriate technical or organisational measures to ensure that your personal information is kept secure and is protected against unauthorised or unlawful processing, accidental loss, destruction or damage, alteration, disclosure or access;</li>
                <li>promptly notify you if we become aware of any unauthorised use, disclosure or processing of your personal information;</li>
                <li>provide you with reasonable evidence of our compliance with our obligations under this policy on reasonable request; and</li>
                <li>upon your request, promptly return or destroy any and all of your personal information in our possession or control.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We will not retain your personal information longer than the period for which it was originally needed, unless we are required by law to do so, or you consent to us retaining such information for a longer period.
              </p>
            </div>

            {/* Linked Third-Party Websites */}
            <div className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-navy mb-4">
                Linked Third-Party Website and Third-Party Content
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This Website may contain links or references to other websites outside of our control, including those of advertisers. These Terms and Conditions do not apply to those websites and Linsford Group is not responsible for the practices and/or privacy policies of those sites or the cookies those sites use. In addition, because Linsford Group has no control over such external sites and resources, you acknowledge and agree that Linsford Group is not responsible for ensuring the availability of such external websites or resources and does not endorse and is not responsible and liable for any content, advertising, products, or other materials on or available from such websites and resources. Your use of such other websites is entirely at your own risk and we are not responsible for any loss, expense, claim or damage, whether direct, indirect or consequential, arising from your use of such other websites or your reliance on any information contained on those websites.
              </p>
            </div>

            {/* Permission for Hyperlinks */}
            <div className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-navy mb-4">
                Permission for Hyperlinks, Deep Linking, Crawlers and Metatags
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nobody may establish a hyperlink, frame, metatag or similar reference, whether electronically or otherwise (collectively referred to as linking), to this Website or any subsidiary pages before receiving the prior written approval of any unauthorised representative of Linsford Group which may be withheld or granted subject to such conditions Linsford Group may specify from time to time. Furthermore, this Website or any part hereof may not be "framed" or "deep-linked' in any way whatsoever. This Website may from time to time contain message boards which allow users to comment on their experience at Linsford Group.
              </p>
            </div>

            {/* Members */}
            <div className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-navy mb-4">
                Members
              </h2>
              <div className="bg-light-gray p-6 rounded-lg">
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-navy">L D. Frey</strong> - Managing Member<br />
                  <strong className="text-navy">J. Hooper</strong> - Operations Executive
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Standard Trading Terms & Conditions Apply for all transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsPage;
