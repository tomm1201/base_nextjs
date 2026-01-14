import { LoginForm } from "@/components/FormLogin/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center p-4">
      <LoginForm className="w-full max-w-md" />
    </div>
  );
}
