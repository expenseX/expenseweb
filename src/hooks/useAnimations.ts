import { Variants } from 'framer-motion';

interface AnimationOptions {
    duration?: number;
    delay?: number;
    ease?: string;
    staggerChildren?: number;
}

export const useAnimations = () => {
    // Basic fade-in animation
    const fadeIn = (options: AnimationOptions = {}): Variants => ({
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: options.duration || 0.5,
                delay: options.delay || 0,
                ease: options.ease || "easeOut"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: (options.duration || 0.5) * 0.75,
                ease: options.ease || "easeIn"
            }
        }
    });

    // Slide up and fade in
    const slideUp = (options: AnimationOptions = {}): Variants => ({
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: options.duration || 0.5,
                delay: options.delay || 0,
                ease: options.ease || [0.25, 0.1, 0.25, 1.0]
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: (options.duration || 0.5) * 0.75,
                ease: options.ease || "easeIn"
            }
        }
    });

    // Slide from left
    const slideInLeft = (options: AnimationOptions = {}): Variants => ({
        initial: { opacity: 0, x: -50 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: options.duration || 0.6,
                delay: options.delay || 0,
                ease: options.ease || [0.25, 0.1, 0.25, 1.0]
            }
        },
        exit: {
            opacity: 0,
            x: 50,
            transition: {
                duration: (options.duration || 0.6) * 0.75,
                ease: options.ease || "easeIn"
            }
        }
    });

    // Slide from right
    const slideInRight = (options: AnimationOptions = {}): Variants => ({
        initial: { opacity: 0, x: 50 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: options.duration || 0.6,
                delay: options.delay || 0,
                ease: options.ease || [0.25, 0.1, 0.25, 1.0]
            }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
                duration: (options.duration || 0.6) * 0.75,
                ease: options.ease || "easeIn"
            }
        }
    });

    // Staggered children animation
    const stagger = (options: AnimationOptions = {}): Variants => ({
        animate: {
            transition: {
                staggerChildren: options.staggerChildren || 0.1,
                delayChildren: options.delay || 0
            }
        }
    });

    // Scale animation for hover effects
    const scaleOnHover: Variants = {
        initial: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.98, transition: { duration: 0.1 } }
    };

    // Pulse animation
    const pulse: Variants = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            }
        }
    };

    // Bounce animation
    const bounce: Variants = {
        initial: { y: 0 },
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            }
        }
    };

    // Card hover animation
    const cardHover: Variants = {
        initial: { y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
        hover: {
            y: -8,
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    // Button hover animation
    const buttonHover: Variants = {
        initial: { y: 0, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" },
        hover: {
            y: -2,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.2 }
        },
        tap: {
            y: 0,
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.1 }
        }
    };

    // For scroll-triggered animations
    const fromBottom = (options: AnimationOptions = {}): Variants => ({
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: options.duration || 0.8,
                delay: options.delay || 0
            }
        }
    });

    return {
        fadeIn,
        slideUp,
        slideInLeft,
        slideInRight,
        stagger,
        scaleOnHover,
        pulse,
        bounce,
        cardHover,
        buttonHover,
        fromBottom
    };
}; 