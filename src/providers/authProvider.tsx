'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('isAuthenticated='))
      ?.split('=')[1];

    setIsAuthenticated(!!cookie);
  }, []);

  /* 로그인 */
  const signIn = useCallback(() => {
    setIsAuthenticated(true);
    document.cookie = `isAuthenticated=true; path=/`;
    window.location.href = '/';
  }, []);

  /* 로그아웃 */
  const signOut = useCallback(() => {
    setIsAuthenticated(false);
    document.cookie = `isAuthenticated=; path=/; max-age=0`;
    window.location.href = '/signin';
  }, []);

  const value = useMemo(() => ({ isAuthenticated, signIn, signOut }), [isAuthenticated, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error();
  return context;
};
