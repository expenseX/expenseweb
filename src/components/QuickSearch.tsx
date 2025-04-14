import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { useFocusTrap } from '../hooks/useFocusTrap';

const searchResults = [
  { title: 'Features', path: '/#features' },
  { title: 'Download App', path: '/#download' },
  { title: 'Contact Us', path: '/#contact' },
  { title: 'Privacy Policy', path: '/privacy-policy' },
  { title: 'Terms of Service', path: '/terms-of-service' }
];

export default function QuickSearch({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filteredResults = searchResults.filter(result =>
    result.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useFocusTrap(dialogRef, {
    isActive: isOpen,
    onEscape: onClose
  });

  useKeyboardNav({
    onEnter: () => {
      if (filteredResults[selectedIndex]) {
        navigate(filteredResults[selectedIndex].path);
        onClose();
      }
    },
    onArrowUp: () => {
      setSelectedIndex(prev => 
        prev > 0 ? prev - 1 : filteredResults.length - 1
      );
    },
    onArrowDown: () => {
      setSelectedIndex(prev =>
        prev < filteredResults.length - 1 ? prev + 1 : 0
      );
    },
    deps: [selectedIndex, filteredResults, navigate]
  });

  // Reset state when dialog opens/closes
  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={onClose}
          />
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-20 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-xl bg-background rounded-lg shadow-xl"
            role="dialog"
            aria-label="Quick search"
          >
            <div className="p-4">
              <div className="flex items-center gap-3 pb-4 border-b">
                <i className="fas fa-search text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent border-none outline-none"
                  value={searchTerm}
                  onChange={e => {
                    setSearchTerm(e.target.value);
                    setSelectedIndex(0);
                  }}
                  aria-label="Search through site content"
                />
                <kbd className="hidden md:block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded">
                  ESC to close
                </kbd>
              </div>

              <div className="mt-4 space-y-2" role="listbox">
                {filteredResults.map((result, index) => (
                  <motion.button
                    key={result.path}
                    className={`w-full text-left px-4 py-2 rounded ${
                      index === selectedIndex
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => {
                      navigate(result.path);
                      onClose();
                    }}
                    role="option"
                    aria-selected={index === selectedIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {result.title}
                  </motion.button>
                ))}

                {filteredResults.length === 0 && (
                  <div className="text-center text-gray-500 py-4">
                    No results found
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}