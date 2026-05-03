"use client";
import { authClient } from "@/lib/auth-client";
import { Button, toast } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter, useSearchParams } from "next/navigation";

const GoogleLoginButton = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/home";

  // signin on button click
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: `${redirectTo}?login=success`,
    });
  };

  return (
    <Button onClick={handleGoogleSignIn} className="w-full" variant="tertiary">
      <Icon icon="devicon:google" />
      Continue with Google
    </Button>
  );
};
export default GoogleLoginButton;
