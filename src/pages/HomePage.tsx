import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="overflow-hidden">
        {/* Hero Section with animated elements */}
        <HeroSection />

        {/* Features Section with improved cards and animations */}
        <FeaturesSection />

        {/* App Usage Showcase */}
        <UsageShowcaseSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Download Section */}
        <DownloadSection />

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </PageTransition>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 -z-10"></div>

      {/* Animated background dots/grid pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 -z-10">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1 mb-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 font-medium text-sm"
            >
              Personal Finance Made Simple
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Take Control of Your Finances
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Expense X helps you track expenses, create budgets, and reach your financial goals with powerful insights and simple automation.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="#download"
                className="px-8 py-3 rounded-lg bg-primary text-white hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 font-medium"
              >
                Get Started Free
              </Link>
              <Link
                to="#features"
                className="px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 font-medium"
              >
                Explore Features
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img
                      src={`/assets/avatar-${i}.jpg`}
                      alt={`User ${i}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=User+${i}&background=random`;
                      }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-bold text-gray-800 dark:text-gray-200">10,000+</span> users trust Expense X
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border dark:border-gray-800">
              <img
                src="/assets/app-screenshot.png"
                alt="Expense X App Dashboard"
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback placeholder
                  e.currentTarget.src = "https://placehold.co/600x400/2563eb/FFFFFF/png?text=Expense X+App";
                }}
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-yellow-400/30 dark:bg-yellow-500/10 blur-2xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-pink-400/20 dark:bg-pink-500/10 blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { value: '10M+', label: 'Expenses Tracked' },
            { value: '$250M+', label: 'Money Managed' },
            { value: '98%', label: 'Customer Satisfaction' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-white/60 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Why Choose Expense X"
          title="Powerful Features That Make Expense X Stand Out"
          description="Our intelligent expense tracker delivers everything you need to manage your finances efficiently"
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Add interfaces for component props
interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: string;
  };
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-5 text-primary">
        <i className={feature.icon + " text-xl"}></i>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
    </motion.div>
  );
}

function UsageShowcaseSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-24 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="How It Works"
          title="Simple Process, Powerful Results"
          description="Expense X makes it easy to track your finances in just a few steps"
        />

        <div className="mt-20 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700">
            <div className="h-full bg-primary w-3/4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Add Your Expenses',
                description: 'Simply add your expenses manually or connect your bank accounts for automatic tracking.',
                icon: 'fas fa-receipt'
              },
              {
                step: '02',
                title: 'Categorize Automatically',
                description: 'Our AI automatically categorizes your expenses to give you a clear picture of your spending habits.',
                icon: 'fas fa-tags'
              },
              {
                step: '03',
                title: 'Get Insights & Reports',
                description: 'Receive detailed insights and reports to help you make better financial decisions.',
                icon: 'fas fa-chart-line'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative pt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true, margin: "-100px 0px" }}
              >
                <div className="absolute top-0 transform -translate-y-1/2">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-primary">
                    <i className={item.icon + " text-xl"}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 text-center"
          style={{ y }}
        >
          <img
            src="/assets/app-dashboard.png"
            alt="Expense X Dashboard"
            className="max-w-4xl mx-auto rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/800x500/2563eb/FFFFFF/png?text=Expense X+Dashboard";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="What Our Users Say"
          title="Trusted By Thousands of Users"
          description="Don't just take our word for it. Here's what our users have to say about Expense X."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Expense X helped me save over $300 in the first month by identifying unnecessary subscriptions and spending habits.",
              name: "Sarah Johnson",
              title: "Small Business Owner",
              avatar: "/assets/testimonial-1.jpg"
            },
            {
              quote: "The visualization tools make it so easy to understand where my money is going. I finally have control over my finances.",
              name: "Michael Chen",
              title: "Software Engineer",
              avatar: "/assets/testimonial-2.jpg"
            },
            {
              quote: "I've tried many expense trackers, but Expense X is by far the most intuitive and comprehensive. Highly recommended!",
              name: "Emily Rodriguez",
              title: "Marketing Manager",
              avatar: "/assets/testimonial-3.jpg"
            }
          ].map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Add interfaces for component props
interface TestimonialCardProps {
  testimonial: {
    quote: string;
    name: string;
    title: string;
    avatar: string;
  };
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div className="mb-4 text-primary">
        <i className="fas fa-quote-left text-3xl"></i>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">{testimonial.quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=random`;
            }}
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-indigo-600 to-blue-500 dark:from-indigo-800 dark:to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Download Expense X Today
          </motion.h2>
          <motion.p
            className="text-xl text-indigo-100 dark:text-indigo-200 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Available for iOS and Android devices. Take control of your finances anytime, anywhere.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="#" className="bg-black text-white flex items-center justify-center gap-3 px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors">
              <i className="fab fa-apple text-2xl"></i>
              <div className="text-left">
                <p className="text-xs text-white">Download on the</p>
                <p className="text-lg text-white font-semibold">App Store</p>
              </div>
            </a>
            <a href="#" className="bg-black text-white flex items-center justify-center gap-3 px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors">
              <i className="fab fa-google-play text-2xl"></i>
              <div className="text-left">
                <p className="text-xs text-white">Get it on</p>
                <p className="text-lg text-white font-semibold">Google Play</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            className="mt-16 flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <div className="mr-2 text-yellow-300">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-white">4.8/5 on App Store</p>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-yellow-300">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p className="text-white">4.7/5 on Google Play</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Frequently Asked Questions"
          title="Got Questions? We've Got Answers"
          description="Find answers to the most common questions about Expense X"
        />

        <div className="mt-16 max-w-3xl mx-auto">
          {[
            {
              question: "Is Expense X free to use?",
              answer: "Expense X offers a free tier with basic expense tracking features. Premium features like bank account syncing and advanced reporting require a subscription."
            },
            {
              question: "Is my financial data secure?",
              answer: "Absolutely. We use bank-level encryption to secure your data. We never sell your personal information to third parties."
            },
            {
              question: "Can I export my expense data?",
              answer: "Yes, you can export your data in CSV, PDF, or Excel formats at any time for your records or analysis."
            },
            {
              question: "Does Expense X work with my bank?",
              answer: "Expense X integrates with over 10,000 financial institutions worldwide. Check our full list in the app to see if yours is supported."
            },
            {
              question: "Is there a desktop version available?",
              answer: "Yes, Expense X is available as a mobile app for iOS and Android, as well as a web application you can access from any browser."
            }
          ].map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Add interfaces for component props
interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
}

function FAQItem({ faq, index }: FAQItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0"
    >
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{faq.question}</h3>
      <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
    </motion.div>
  );
}

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

function SectionHeader({ subtitle, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <motion.p
        className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 font-medium text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-xl text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </div>
  );
}

const features = [
  {
    title: 'Smart Analytics',
    description: 'Get detailed insights into your spending habits with beautiful charts and reports',
    icon: 'fas fa-chart-line'
  },
  {
    title: 'Secure & Private',
    description: 'Your financial data is encrypted and never shared with third parties',
    icon: 'fas fa-shield-alt'
  },
  {
    title: 'Auto Sync',
    description: 'Automatically sync your expenses across all your devices in real-time',
    icon: 'fas fa-sync'
  },
  {
    title: 'Budget Planning',
    description: "Set and manage budgets for different categories and get alerts when you're close to limits",
    icon: 'fas fa-wallet'
  },
  {
    title: 'Receipt Scanning',
    description: 'Snap a photo of your receipts and automatically extract expense details with OCR',
    icon: 'fas fa-camera'
  },
  {
    title: 'AI Forecasting',
    description: 'Our AI predicts future expenses and helps you prepare for upcoming financial needs',
    icon: 'fas fa-robot'
  },
  {
    title: 'Multi-currency',
    description: 'Handle expenses in multiple currencies with automatic conversion rates',
    icon: 'fas fa-globe'
  },
  {
    title: 'Expense Sharing',
    description: 'Split expenses with roommates, friends or family and track who owes what',
    icon: 'fas fa-users'
  },
  {
    title: 'Custom Categories',
    description: 'Create custom expense categories that fit your unique financial situation',
    icon: 'fas fa-tags'
  }
];