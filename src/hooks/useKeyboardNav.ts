import { useEffect } from 'react';

interface KeyboardNavProps {
  onEscape?: () => void;
  onEnter?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onTab?: (e: KeyboardEvent) => void;
  deps?: unknown[];
}

export const useKeyboardNav = ({
  onEscape,
  onEnter,
  onArrowUp,
  onArrowDown,
  onTab,
  deps = []
}: KeyboardNavProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onEscape?.();
          break;
        case 'Enter':
          onEnter?.();
          break;
        case 'ArrowUp':
          onArrowUp?.();
          break;
        case 'ArrowDown':
          onArrowDown?.();
          break;
        case 'Tab':
          onTab?.(e);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [deps, onEscape, onEnter, onArrowUp, onArrowDown, onTab]);
};