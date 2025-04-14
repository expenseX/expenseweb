import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeyboardNav } from '../hooks/useKeyboardNav';

const shortcuts = [
  { key: '?', description: 'Show keyboard shortcuts' },
  { key: 'Esc', description: 'Close menus or dialogs' },
  { key: '/', description: 'Focus search' },
  { key: 'D', description: 'Toggle dark mode' },
  { key: 'H', description: 'Go to home' },
  { key: 'K', description: 'Open navigation menu' }
];

export default function KeyboardShortcuts() {
  const [isVisible, setIsVisible] = useState(false);

  useKeyboardNav({
    onEscape: () => setIsVisible(false),
    deps: [isVisible]
  });

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '?' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={() => setIsVisible(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-10 md:inset-auto md:top-1/4 md:left-1/2 md:-translate-x-1/2 md:max-w-lg w-full bg-background rounded-lg shadow-xl p-6"
            role="dialog"
            aria-label="Keyboard shortcuts"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Keyboard Shortcuts</h2>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close keyboard shortcuts"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="grid gap-4">
              {shortcuts.map(({ key, description }) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-600">{description}</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">
                    {key}
                  </kbd>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}