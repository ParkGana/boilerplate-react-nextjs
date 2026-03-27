import AuthButton from '@/components/element/AuthButton';

const SignInPage = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <AuthButton isAuthenticated={false} />
    </div>
  );
};

export default SignInPage;
