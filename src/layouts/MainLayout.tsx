import { ReactNode, useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useHeaderScroll } from '../hooks/useHeaderScroll';
import { useTheme } from '../hooks/useTheme';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { scrollToSection } from '../utils/scrollToSection';
import LoadingSpinner from '../components/LoadingSpinner';
import KeyboardShortcuts from '../components/KeyboardShortcuts';
import QuickSearch from '../components/QuickSearch';
import QuickActions from '../components/QuickActions';

interface MainLayoutProps {
  children: ReactNode;
}

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const isScrolled = useHeaderScroll();
  const location = useLocation();
  const navigate = useNavigate();
  useSmoothScroll();

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key.toLowerCase() === 'd' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        toggleTheme();
      } else if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        navigate('/');
      } else if (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsQuickActionsOpen(true);
      } else if (e.key === '/' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [toggleTheme, navigate]);

  // Keyboard navigation for mobile menu
  useKeyboardNav({
    onEscape: () => isMenuOpen && setIsMenuOpen(false),
    deps: [isMenuOpen]
  });

  // Handle focus trap in mobile menu
  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isMenuOpen]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);

    // Handle deep linking to sections
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-text transition-colors duration-300">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded">
        Skip to main content
      </a>

      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`} role="banner">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative" role="navigation">
          <Link to="/" className="text-2xl font-bold text-primary" aria-label="Expense X Home">
            Expense X
          </Link>

          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`} aria-hidden="true" />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} aria-hidden="true" />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
              }`} aria-hidden="true" />
          </button>

          <AnimatePresence>
            <motion.div
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
              exit="closed"
              variants={menuVariants}
              ref={menuRef}
              id="mobile-menu"
              className={`md:flex gap-6 ${isMenuOpen
                ? 'absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm p-4 shadow-lg mt-0'
                : 'hidden md:flex'
                }`}
              role="menu"
            >
              <a href="#features"
                onClick={(e) => handleNavClick(e, 'features')}
                className="block py-2 md:py-0 hover:text-primary transition-colors"
                role="menuitem">
                Features
              </a>
              <a href="#download"
                onClick={(e) => handleNavClick(e, 'download')}
                className="block py-2 md:py-0 hover:text-primary transition-colors"
                role="menuitem">
                Download
              </a>
              <a href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block py-2 md:py-0 hover:text-primary transition-colors"
                role="menuitem">
                Contact
              </a>
            </motion.div>
          </AnimatePresence>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-6 h-6"
              >
                {theme === 'light' ? (
                  <motion.i
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="fas fa-moon text-indigo-700 absolute inset-0 flex items-center justify-center"
                    aria-hidden="true"
                  />
                ) : (
                  <motion.i
                    initial={{ opacity: 0, scale: .5, rotate: 180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    transition={{ duration: 0.5 }}
                    className="fas fa-sun text-yellow-400 absolute inset-0 flex items-center justify-center"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            </motion.button>
          </div>
        </nav>
      </header>

      <main id="main-content" className="flex-1 pt-16" role="main">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>

      <QuickSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <QuickActions
        isOpen={isQuickActionsOpen}
        onClose={() => setIsQuickActionsOpen(false)}
      />

      <KeyboardShortcuts />

      <footer role="contentinfo" className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Expense X</h3>
              <p className="text-gray-600 dark:text-gray-400">Smart expense tracking for modern businesses</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/#features" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Features</Link></li>
                <li><Link to="/#download" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Download</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/#about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Expense X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}