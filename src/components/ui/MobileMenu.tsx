import { Button } from './Button'

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
  if (!isOpen) {
    return null
  }

  return (
    <div className="absolute top-full left-0 w-full border-b border-white/10 bg-slate-950/95 md:hidden transition-opacity duration-200 ease-out">
        <div className="flex flex-col gap-6 px-6 py-8">
            <div className="space-y-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="block text-base font-medium text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <Button className="w-full" onClick={onClose}>
                Request access
              </Button>
            </div>
          </div>
    </div>
  )
}