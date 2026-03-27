'use client';
import { useAuth } from '@/providers/authProvider';

type AuthButtonProps = {
  isAuthenticated: boolean;
};

const AuthButton = ({ isAuthenticated }: AuthButtonProps) => {
  const { signIn, signOut } = useAuth();

  return (
    <div
      className="w-fit cursor-pointer border-2 border-black p-3 hover:bg-neutral-300"
      onClick={isAuthenticated ? signOut : signIn}
    >
      <p className="font-bold">{isAuthenticated ? '로그아웃' : '로그인'}</p>
    </div>
  );
};

export default AuthButton;
