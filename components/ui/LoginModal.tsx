'use client';

import { useState } from 'react';
import Button from './Button';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useAuthStore } from '@/stores/useAuthStore';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const { login } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login - apenas email e senha são necessários
      const userData = {
        email: formData.email,
        name: formData.email.split('@')[0], // Usar parte do email como nome para login
      };
      
      login(userData);
      console.log('User logged in:', userData);
    } else {
      // Signup - todos os campos são necessários
      const userData = {
        email: formData.email,
        name: formData.name,
      };
      
      login(userData);
      console.log('User created and logged in:', userData);
    }
    
    // Limpar formulário
    setFormData({
      email: '',
      password: '',
      name: '',
    });
    
    // Fechar modal
    onClose();
    
    // Resetar para modo login
    setIsLogin(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSocialLogin = (provider: 'github' | 'google') => {
    // Simular login social
    const userData = {
      email: `user@${provider}.com`,
      name: `User ${provider.charAt(0).toUpperCase() + provider.slice(1)}`,
    };
    
    login(userData);
    console.log(`User logged in with ${provider}:`, userData);
    
    // Fechar modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4">
        <div className="bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative p-8 text-center">
            {/* Decorative elements */}
            <h1 className="text-4xl font-bold mt-8">
              <span className="text-yellow-500">J</span>Test
            </h1>

            <h2 className="text-3xl font-bold text-white  mb-2">
              {isLogin ? 'Bem vindo de volta!' : 'Junte-se a nós!'}
            </h2>
            <p className="text-gray-400">
              {isLogin ? 'Faça login em sua conta' : 'Crie sua conta'}
            </p>
          </div>

          {/* Form */}
          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Digite seu nome completo"
                    required={!isLogin}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Endereço de e-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="Digite sua senha"
                  required
                />
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400 focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-400">
                      Lembrar-me
                    </span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Esqueceu sua senha?
                  </button>
                </div>
              )}

              <Button
                type="submit"
                variant="gradient"
                className="w-full py-3 text-lg font-semibold text-black"
              >
                {isLogin ? 'Entrar' : 'Criar conta'}
              </Button>
            </form>

            {/* Toggle between login/signup */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors cursor-pointer"
                >
                  {isLogin ? 'Criar conta' : 'Entrar'}
                </button>
              </p>
            </div>

            {/* Social login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">
                    Ou continue com
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSocialLogin('github')}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-xl shadow-sm bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors items-center cursor-pointer"
                >
                  <FaGithub />
                  <span className="ml-2">GitHub</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialLogin('google')}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-xl shadow-sm bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors items-center cursor-pointer"
                >
                  <FaGoogle />
                  <span className="ml-2">Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
