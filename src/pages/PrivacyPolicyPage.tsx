import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    // Function to handle theme toggle
    const handleThemeToggle = () => {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    };

    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Add event listener to theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    themeToggle?.addEventListener('click', handleThemeToggle);

    // Cleanup
    return () => {
      themeToggle?.removeEventListener('click', handleThemeToggle);
    };
  }, []);

  // Animation for sections
  // const fadeInVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  // };

  return (
    <PageTransition>
      <div className="privacy-content overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 -z-10"></div>

        {/* Background dots pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-10 -z-10">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="privacy-header text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 font-medium text-sm">
                Privacy & Data Protection
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300">
                Privacy Policy
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Last updated: April 9, 2025</p>
            </motion.div>

            <div className="space-y-10">
              <PolicySection
                title="1. Introduction"
                content={
                  <div>
                    <p className="mb-4">Welcome to Expense X. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you use our app and tell you about your privacy rights and how the law protects you.</p>
                    <p>This policy applies to all users of the Expense X mobile applications, our website, and any related services. Please read this policy carefully to understand our practices regarding your personal data.</p>
                  </div>
                }
              />

              <PolicySection
                title="2. Data Controller"
                content={
                  <div>
                    <p className="mb-4">Expense X Inc. is the data controller responsible for your personal data (referred to as "Expense X", "we", "us", or "our" in this privacy policy).</p>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Officer at:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Email: privacy@Expense X.com</li>
                      <li>Postal address: 123 Finance Street, Suite 400, San Francisco, CA 94105, USA</li>
                    </ul>
                  </div>
                }
              />

              <PolicySection
                title="3. Information We Collect"
                content={
                  <div>
                    <p className="mb-4">When you use Expense X, we collect and process various types of information:</p>
                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">3.1 Personal Information</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Identity Data: name, username, date of birth, and password</li>
                      <li>Contact Data: email address, phone number, and mailing address</li>
                      <li>Profile Data: your preferences, feedback, and survey responses</li>
                      <li>Marketing and Communications Data: your preferences in receiving marketing from us</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">3.2 Financial Information</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Transaction Data: expense records, income information, and budget data you input</li>
                      <li>Financial Account Information: when you choose to connect bank accounts (stored with bank-level encryption)</li>
                      <li>Payment Data: card details when you subscribe to premium features</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">3.3 Technical Information</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Device Information: device type, operating system, unique device identifiers</li>
                      <li>Usage Data: how you use our app, features accessed, time spent</li>
                      <li>Location Data: general location based on IP address (if permitted)</li>
                      <li>Cookies and Similar Technologies: information collected through cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                }
              />

              <PolicySection
                title="4. How We Collect Your Data"
                content={
                  <div>
                    <p className="mb-4">We use different methods to collect data from and about you, including:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                      <li><span className="font-medium">Direct Interactions:</span> Information you provide when creating an account, entering expense data, connecting financial accounts, subscribing to premium features, or contacting support.</li>
                      <li><span className="font-medium">Automated Technologies:</span> As you interact with our app, we automatically collect technical data using cookies, server logs, and similar technologies.</li>
                      <li><span className="font-medium">Third Parties:</span> We may receive data from various third parties, such as analytics providers, advertising networks, and when you connect financial accounts through secure financial data providers.</li>
                    </ul>
                  </div>
                }
              />

              <PolicySection
                title="5. How We Use Your Information"
                content={
                  <div>
                    <p className="mb-4">We use your personal data for the following purposes:</p>

                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">5.1 Providing Our Services</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>To register you as a new user</li>
                      <li>To process and deliver the core functionality of expense tracking</li>
                      <li>To manage your financial information and provide insights</li>
                      <li>To facilitate secure connections with financial institutions</li>
                      <li>To provide customer support and respond to your requests</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">5.2 Improving Our Services</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>To administer and protect our business and app</li>
                      <li>To improve our app, products, services, and user experience</li>
                      <li>To measure the effectiveness of features and functionality</li>
                      <li>To develop new features and enhancements</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">5.3 Communication</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>To send important notices, updates, and security alerts</li>
                      <li>To communicate about features, tips, and recommendations</li>
                      <li>To send marketing communications if you've opted in</li>
                      <li>To request feedback and conduct surveys</li>
                    </ul>
                  </div>
                }
              />

              <PolicySection
                title="6. Data Sharing and Transfers"
                content={
                  <div>
                    <p className="mb-4">We may share your personal data with the following categories of recipients:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                      <li><span className="font-medium">Service Providers:</span> Third-party vendors who perform services on our behalf, such as cloud hosting, data analysis, payment processing, and customer support.</li>
                      <li><span className="font-medium">Financial Data Providers:</span> When you connect your financial accounts, we use trusted financial data aggregators who access your account information on your behalf.</li>
                      <li><span className="font-medium">Professional Advisers:</span> Including lawyers, auditors, and insurers who provide professional services to us.</li>
                      <li><span className="font-medium">Authorities:</span> We may disclose your information to governmental authorities when required by law.</li>
                      <li><span className="font-medium">Business Transfers:</span> If Expense X is involved in a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.</li>
                    </ul>
                    <p className="mt-4"><strong>International Transfers:</strong> Your data may be processed outside your country of residence. When we transfer data internationally, we implement appropriate safeguards to ensure your data remains protected.</p>
                  </div>
                }
              />

              <PolicySection
                title="7. Data Security"
                content={
                  <div>
                    <p className="mb-4">We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. These include:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Bank-level (256-bit AES) encryption for all financial data</li>
                      <li>Secure HTTPS transmission for all data transfers</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Strict access controls for our employees</li>
                      <li>Data anonymization where appropriate</li>
                    </ul>
                    <p className="mt-4">We have procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>
                  </div>
                }
              />

              <PolicySection
                title="8. Data Retention"
                content={
                  <div>
                    <p className="mb-4">We will only retain your personal data for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
                    <p className="mb-4">If you delete your account, we will delete or anonymize your personal data within 30 days, except where we need to retain certain information for legitimate business or legal purposes.</p>
                  </div>
                }
              />

              <PolicySection
                title="9. Your Legal Rights"
                content={
                  <div>
                    <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                      <li><span className="font-medium">Access:</span> Request access to your personal data</li>
                      <li><span className="font-medium">Correction:</span> Request correction of inaccurate data</li>
                      <li><span className="font-medium">Erasure:</span> Request deletion of your personal data</li>
                      <li><span className="font-medium">Restriction:</span> Request restriction of processing</li>
                      <li><span className="font-medium">Data Portability:</span> Request transfer of your data</li>
                      <li><span className="font-medium">Objection:</span> Object to processing of your data</li>
                      <li><span className="font-medium">Automated Decision Making:</span> Contest any automated decision-making</li>
                    </ul>
                    <p className="mt-4">To exercise any of these rights, please contact us at privacy@Expense X.com. We may need to request specific information to confirm your identity.</p>
                  </div>
                }
              />

              <PolicySection
                title="10. Children's Privacy"
                content={
                  <div>
                    <p className="mb-4">Our services are not intended for children under 13 years of age, and we do not knowingly collect personal data from children under 13. If we learn we have collected personal data from a child under 13, we will delete that information promptly.</p>
                  </div>
                }
              />

              <PolicySection
                title="11. Changes to This Privacy Policy"
                content={
                  <div>
                    <p className="mb-4">We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes through the app or by email before they take effect.</p>
                  </div>
                }
              />

              <PolicySection
                title="12. Contact Us"
                content={
                  <div>
                    <p className="mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer:</p>
                    <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                      <li><span className="font-medium">Email:</span> privacy@Expense X.com</li>
                      <li><span className="font-medium">Phone:</span> +1 (800) 123-4567</li>
                      <li><span className="font-medium">Address:</span> Expense X Inc.<br />123 Finance Street, Suite 400<br />San Francisco, CA 94105<br />United States</li>
                    </ul>
                  </div>
                }
              />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-gray-600 dark:text-gray-400">This privacy policy was last updated on April 9, 2025.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

// Helper component for policy sections
interface PolicySectionProps {
  title: string;
  content: React.ReactNode;
}

function PolicySection({ title, content }: PolicySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="section bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700"
    >
      <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h2>
      <div className="text-gray-700 dark:text-gray-300">{content}</div>
    </motion.div>
  );
}