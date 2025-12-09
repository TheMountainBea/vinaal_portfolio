import { motion } from 'framer-motion';
import type { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

export default function GlowButton({ 
  children, 
  onClick, 
  href, 
  className = '',
  variant = 'primary',
  type = 'button'
}: GlowButtonProps) {
  const baseClasses = `
    relative px-8 py-4 font-semibold text-text-primary
    border-2 border-accent-red rounded-lg
    transition-all duration-300
    overflow-hidden
    ${variant === 'primary' ? 'bg-dark-bg-secondary' : 'bg-transparent'}
    ${className}
  `;

  const glowClasses = `
    hover:glow-red-strong hover:border-accent-red-hover
    hover:text-accent-red hover:scale-105
    active:scale-95
  `;

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-accent-red opacity-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} ${glowClasses} inline-block text-center`}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${glowClasses}`}
      onClick={onClick}
    >
      {buttonContent}
    </motion.button>
  );
}

