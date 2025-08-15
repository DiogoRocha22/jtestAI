'use client'

import { useAuthStore } from '@/stores/useAuthStore';
import React from 'react';

export default function Greeting() {
  const { user } = useAuthStore()

  return (
    <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-700 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
      Seja bem-vindo {user?.name ?? 'ao JTest'}!
    </h1> 
  );
}
