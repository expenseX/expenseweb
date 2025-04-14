import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import MainLayout from './layouts/MainLayout';

// Lazy load route components
const HomePage = lazy(() => import('./pages/HomePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const DEFAULT_META = {
  title: 'Expense X - Smart Expense Tracking Made Simple',
  description: 'Take control of your finances with Expense X. Track expenses, create budgets, and achieve your financial goals with our intuitive app.',
  image: '/path/to/social-sharing-image.jpg', // Update with actual image path
  url: 'https://Expense X.com' // Update with actual domain
};

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Helmet>
            {/* Default Meta Tags */}
            <title>{DEFAULT_META.title}</title>
            <meta name="description" content={DEFAULT_META.description} />

            {/* OpenGraph Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={DEFAULT_META.title} />
            <meta property="og:description" content={DEFAULT_META.description} />
            <meta property="og:image" content={DEFAULT_META.image} />
            <meta property="og:url" content={DEFAULT_META.url} />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={DEFAULT_META.title} />
            <meta name="twitter:description" content={DEFAULT_META.description} />
            <meta name="twitter:image" content={DEFAULT_META.image} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* Mobile Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta name="theme-color" content="#2563eb" />

            {/* Language and Region */}
            <html lang="en" />
          </Helmet>

          <MainLayout>
            <Suspense fallback={
              <div className="min-h-[60vh] flex items-center justify-center">
                <LoadingSpinner size="large" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </MainLayout>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
