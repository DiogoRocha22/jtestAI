'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../ui/Button';
import { useAuthStore } from '@/stores/useAuthStore';
import LoginModal from '../ui/LoginModal';
import UserProfilePhoto from '../user/UserProfilePhoto';

export default function Header() {
  const { user } = useAuthStore();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 sticky top-0 bg-transparent z-10">
        <h1 className="text-2xl font-bold">
          <span className="text-yellow-500">J</span>Test
        </h1>
        <nav>
          <ul className="flex gap-4">
            <li className="hover:text-yellow-500 transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-yellow-500 transition-all duration-300">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* profile */}
        <div className="flex items-center gap-4">
          {user ? (
            <div>
              <UserProfilePhoto photoUrl={''} />
            </div>
          ) : (
            <Button onClick={handleLoginClick}>Login</Button>
          )}
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
    </>
  );
}
