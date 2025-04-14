import { useState, useCallback, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface QuickActionsProps {
  isOpen: boolean;
  onClose: () => void;
}

type ActionItem = {
  id: string;
  label: string;
  action: () => void;
  keywords: string[];
  icon: string;
};

const navigationItems: ActionItem[] = [
  {
    id: 'features',
    label: 'Go to Features',
    action: () => scrollToSection('features'),
    keywords: ['features', 'functionality', 'capabilities'],
    icon: 'fa-list'
  },
  {
    id: 'download',
    label: 'Download App',
    action: () => scrollToSection('download'),
    keywords: ['download', 'get', 'install', 'app'],
    icon: 'fa-download'
  },
  {
    id: 'privacy',
    label: 'Privacy Policy',
    action: () => window.location.href = '/privacy-policy',
    keywords: ['privacy', 'policy', 'data', 'security'],
    icon: 'fa-shield-alt'
  },
  {
    id: 'terms',
    label: 'Terms of Service',
    action: () => window.location.href = '/terms-of-service',
    keywords: ['terms', 'service', 'conditions', 'legal'],
    icon: 'fa-file-contract'
  }
];

export default function QuickActions({ isOpen, onClose }: QuickActionsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  const filteredItems = navigationItems.filter(item =>
    item.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchTerm.toLowerCase())
    ) || 
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useFocusTrap(dialogRef, {
    isActive: isOpen,
    onEscape: onClose
  });

  const handleAction = useCallback((item: ActionItem) => {
    item.action();
    onClose();
    setSearchTerm('');
  }, [onClose]);

  // Reset state when dialog opens/closes
  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredItems.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredItems.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleAction(filteredItems[selectedIndex]);
        }
        break;
    }
  }, [filteredItems, selectedIndex, handleAction]);

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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Quick actions"
          >
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Search actions..."
                  value={searchTerm}
                  onChange={e => {
                    setSearchTerm(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  aria-label="Search through available actions"
                />
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              </div>

              <div className="mt-4 space-y-2 max-h-[60vh] overflow-y-auto" role="listbox">
                {filteredItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleAction(item)}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors ${
                      index === selectedIndex
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    role="option"
                    aria-selected={index === selectedIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <i className={`fas ${item.icon}`} aria-hidden="true" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}

                {filteredItems.length === 0 && (
                  <div className="text-center py-8 text-gray-500" role="status">
                    No matching actions found
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