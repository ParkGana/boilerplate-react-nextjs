import AuthProvider from './providers/authProvider';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
