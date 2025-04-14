import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function TermsOfServicePage() {
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

  return (
    <PageTransition>
      <div className="terms-content overflow-hidden">
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
              className="terms-header text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 font-medium text-sm">
                Legal Agreement
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300">
                Terms of Service
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Last updated: April 12, 2025</p>
            </motion.div>

            <div className="space-y-10">
              <TermsSection
                title="1. Acceptance of Terms"
                content={
                  <div>
                    <p className="mb-4">By downloading, accessing, or using the Expense X mobile application, website, and any other related services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.</p>
                    <p>These Terms constitute a legally binding agreement between you and Expense X Inc. ("Expense X," "we," "us," or "our"). You acknowledge that you have read, understood, and agree to be bound by these Terms.</p>
                  </div>
                }
              />

              <TermsSection
                title="2. Description of Service"
                content={
                  <div>
                    <p className="mb-4">Expense X provides a financial management platform that includes the following services:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Expense tracking and categorization</li>
                      <li>Budget planning and monitoring</li>
                      <li>Financial reporting and analytics</li>
                      <li>Bank account connection and synchronization</li>
                      <li>Receipt scanning and management</li>
                      <li>Bill reminders and payment tracking</li>
                      <li>Multi-currency support</li>
                      <li>Expense sharing functionality</li>
                    </ul>
                    <p>The specific features and functionalities may vary based on your subscription plan and may change over time as we update and improve our Service.</p>
                  </div>
                }
              />

              <TermsSection
                title="3. Eligibility and Account Registration"
                content={
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">3.1 Eligibility</h3>
                    <p className="mb-4">To use Expense X, you must:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Be at least 13 years old (or the minimum legal age in your jurisdiction)</li>
                      <li>Have the legal capacity to enter into a binding agreement</li>
                      <li>Not be prohibited from using financial services under applicable laws</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">3.2 Account Registration</h3>
                    <p className="mb-4">To access certain features of the Service, you must register for an account. When registering, you agree to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Provide accurate, current, and complete information</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Not share your account with any third party</li>
                      <li>Promptly update any information that changes</li>
                      <li>Notify us immediately of any unauthorized access or use of your account</li>
                    </ul>
                    <p>You are solely responsible for all activities that occur under your account.</p>
                  </div>
                }
              />

              <TermsSection
                title="4. Subscription Plans and Payments"
                content={
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">4.1 Free and Premium Services</h3>
                    <p className="mb-4">Expense X offers both free and premium subscription plans. The specific features available in each plan are described on our website and within the app.</p>

                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">4.2 Payment Terms</h3>
                    <p className="mb-4">For premium subscriptions:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>All payments are due in advance of the subscription period</li>
                      <li>Subscription fees are non-refundable except as required by law</li>
                      <li>Subscription plans automatically renew until canceled</li>
                      <li>You can cancel at any time through your account settings</li>
                      <li>Price changes will be communicated with at least 30 days' notice</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">4.3 Free Trials</h3>
                    <p>We may offer free trials of premium features. If you do not cancel before the trial period ends, you authorize us to charge your payment method for the premium subscription.</p>
                  </div>
                }
              />

              <TermsSection
                title="5. User Responsibilities and Restrictions"
                content={
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">5.1 Acceptable Use</h3>
                    <p className="mb-4">You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Use the Service in any way that violates applicable laws or regulations</li>
                      <li>Attempt to gain unauthorized access to any part of the Service</li>
                      <li>Interfere with the proper working of the Service</li>
                      <li>Attempt to bypass any security measures</li>
                      <li>Introduce malware, viruses, or other harmful code</li>
                      <li>Use the Service for any illegal activities, including money laundering</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">5.2 User Content</h3>
                    <p className="mb-4">You retain ownership of any content you input into the Service. However, you grant Expense X a worldwide, non-exclusive license to use, store, and process your content solely for the purpose of providing and improving the Service.</p>

                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">5.3 Financial Information</h3>
                    <p>When connecting financial accounts to Expense X, you authorize us to access and store your financial data. You are responsible for ensuring that you have the right to provide such access and that you maintain the accuracy of your financial information.</p>
                  </div>
                }
              />

              <TermsSection
                title="6. Data Privacy and Security"
                content={
                  <div>
                    <p className="mb-4">Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and protect your personal information. By using the Service, you consent to the data practices described in our Privacy Policy.</p>
                    <p>While we implement commercially reasonable security measures, no electronic transmission or storage system is completely secure. We cannot guarantee the absolute security of your data.</p>
                  </div>
                }
              />

              <TermsSection
                title="7. Intellectual Property Rights"
                content={
                  <div>
                    <p className="mb-4">The Service, including its content, features, and functionality, is owned by Expense X and is protected by copyright, trademark, and other intellectual property laws.</p>
                    <p className="mb-4">You may not:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Reproduce, distribute, modify, or create derivative works of the Service</li>
                      <li>Remove any copyright or proprietary notices</li>
                      <li>Use any Expense X trademarks, logos, or branding without express permission</li>
                      <li>Reverse engineer, decompile, or disassemble any aspect of the Service</li>
                    </ul>
                  </div>
                }
              />

              <TermsSection
                title="8. Third-Party Services and Content"
                content={
                  <div>
                    <p className="mb-4">The Service may integrate with or provide links to third-party services, websites, or content. Expense X does not control or endorse such third parties and is not responsible for their content, privacy policies, or practices.</p>
                    <p className="mb-4">When connecting financial accounts through the Service, you may be redirected to third-party financial data providers. Your use of such services is governed by their terms and privacy policies.</p>
                  </div>
                }
              />

              <TermsSection
                title="9. Disclaimer of Warranties"
                content={
                  <div>
                    <p className="mb-4">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
                    <p className="mb-4">Expense X does not warrant that:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>The Service will always be available, uninterrupted, or error-free</li>
                      <li>Any errors or defects will be corrected</li>
                      <li>The Service is free of viruses or other harmful components</li>
                      <li>The information provided through the Service is accurate, reliable, or complete</li>
                    </ul>
                    <p>Expense X is not a financial advisor, accounting service, or tax preparation service. The Service is not intended to provide financial, tax, or investment advice.</p>
                  </div>
                }
              />

              <TermsSection
                title="10. Limitation of Liability"
                content={
                  <div>
                    <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL Expense X, ITS DIRECTORS, EMPLOYEES, PARTNERS, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF THE SERVICE.</p>
                    <p>Expense X's total liability for any claims arising under these Terms shall not exceed the amount you paid to Expense X in the 12 months preceding the event giving rise to the liability, or $100 if you have not paid Expense X.</p>
                  </div>
                }
              />

              <TermsSection
                title="11. Indemnification"
                content={
                  <div>
                    <p className="mb-4">You agree to indemnify, defend, and hold harmless Expense X and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Your use of the Service</li>
                      <li>Your violation of these Terms</li>
                      <li>Your violation of any rights of a third party</li>
                      <li>Your content submitted to the Service</li>
                    </ul>
                  </div>
                }
              />

              <TermsSection
                title="12. Term and Termination"
                content={
                  <div>
                    <p className="mb-4">These Terms remain in effect until terminated by either you or Expense X.</p>
                    <p className="mb-4">You may terminate these Terms at any time by:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Ceasing all use of the Service</li>
                      <li>Canceling your subscription (if applicable)</li>
                      <li>Deleting your account</li>
                    </ul>
                    <p className="mb-4">Expense X may terminate or suspend your access to the Service at any time:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>If you violate these Terms</li>
                      <li>If required to do so by law</li>
                      <li>If providing the Service to you becomes commercially unviable</li>
                    </ul>
                    <p>Upon termination, certain provisions of these Terms will survive, including provisions related to intellectual property, disclaimers, and limitations of liability.</p>
                  </div>
                }
              />

              <TermsSection
                title="13. Changes to Terms"
                content={
                  <div>
                    <p className="mb-4">We may update these Terms from time to time to reflect changes in legal requirements, our Service, or our business practices. We will notify you of material changes through the app or by email before they take effect.</p>
                    <p>Your continued use of the Service after such notification constitutes your acceptance of the updated Terms. If you do not agree to the changes, you must stop using the Service.</p>
                  </div>
                }
              />

              <TermsSection
                title="14. Governing Law and Dispute Resolution"
                content={
                  <div>
                    <p className="mb-4">These Terms are governed by the laws of the State of California, without regard to its conflict of law principles.</p>
                    <p className="mb-4">Any dispute arising from these Terms or your use of the Service shall be resolved exclusively through binding arbitration in San Francisco, California, except that you may assert claims in small claims court if your claims qualify.</p>
                    <p>YOU AND Expense X AGREE TO WAIVE THE RIGHT TO A TRIAL BY JURY AND TO PARTICIPATE IN A CLASS ACTION.</p>
                  </div>
                }
              />

              <TermsSection
                title="15. Contact Information"
                content={
                  <div>
                    <p className="mb-4">If you have any questions about these Terms, please contact our legal team:</p>
                    <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                      <li><span className="font-medium">Email:</span> legal@Expense X.com</li>
                      <li><span className="font-medium">Phone:</span> +1 (800) 123-4567</li>
                      <li><span className="font-medium">Address:</span> Expense X Inc.<br />123 Finance Street, Suite 400<br />San Francisco, CA 94105<br />United States</li>
                    </ul>
                  </div>
                }
              />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-gray-600 dark:text-gray-400">These terms of service were last updated on April 12, 2025.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

// Helper component for terms sections
interface TermsSectionProps {
  title: string;
  content: React.ReactNode;
}

function TermsSection({ title, content }: TermsSectionProps) {
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