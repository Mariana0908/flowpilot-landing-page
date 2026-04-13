import { motion, AnimatePresence } from 'framer-motion'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Trust', href: '#social-proof' },
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="absolute top-full left-0 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-6 px-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="text-base text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}