import AuthProvider from './providers/authProvider';
import QueryProvider from './providers/queryProvider';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </AuthProvider>
  );
};

export default Provider;
