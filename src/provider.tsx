import AuthProvider from './providers/authProvider';
import QueryProvider from './providers/queryProvider';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </QueryProvider>
  );
};

export default Provider;
