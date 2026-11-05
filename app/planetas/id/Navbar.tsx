'use client';

import Link from 'next/link';
import { UserMenu } from './UserMenu';
import type { NavbarProps } from '@/components/types';

/** Barra superior de la zona privada. `onLogout` llega por props. */
export function Navbar({ user, onLogout }: NavbarProps) {
  return (
    <header className="border-b border-navy-100 bg-cream-50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/feed" className="font-display text-2xl font-semibold tracking-tight text-navy-900">
          Paw<span className="text-gold-500">Life</span>
        </Link>
        <UserMenu user={user} onLogout={onLogout} />
      </nav>
    </header>
  );
}