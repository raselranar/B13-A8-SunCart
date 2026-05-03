"use client";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  TextField,
  toast,
} from "@heroui/react";
import { useState } from "react";
import { LuSun } from "react-icons/lu";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import GoogleLoginButton from "@/components/UI/GoogleLoginButton";
const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function LoginPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  console.log("router:", router);

  const [isPasswordShow, setIsPasswordShow] = useState(false);
  console.log("login page");

  // form submit
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    // sign up
    const { data, error } = await authClient.signIn.email(userData);
    console.log({ data, error });

    // show toast error on
    if (error?.status === 401)
      return toast.danger(
        "Login failed. Invalid email or password. Please try again.",
      );
    if (error) return toast.danger("Login failed.");
    toast.success("Welcome back! 🌞");
    // if (searchParams.get("redirect") === "true") return router.back();
    const redirectPath = searchParams.get("redirectTo") || "/home";
    router.push(redirectPath);

    // redirect to home or back
    // await sleep();
    // if (window.history.length > 1) return router.back();
  };

  return (
    <div className="flex justify-center py-12 bg-background px-4">
      <Form
        className="flex w-96 flex-col overflow-hidden gap-4 rounded-3xl pb-6 shadow-xl "
        onSubmit={onSubmit}>
        {/* gradient border top */}
        <div className="bg-gradient rounded-t-full h-2 w-full"></div>
        {/* logo */}
        <div className="flex items-center flex-col mt-4">
          <div className="bg-accent size-10 flex justify-center items-center text-white p-2 rounded-full">
            <LuSun size={40} />
          </div>
          <h2 className="text-2xl text-gray-800 sm:text-4xl font-bold tracking-wider mt-2 ">
            Welcome Back
          </h2>
          <p className="text-gray-500 mt-2">Sign in to your SunCart account</p>
        </div>
        {/* inputs */}
        <div className="px-6 flex flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}>
            <Label>Email</Label>
            <Input className="py-3" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}>
            <Label>Password</Label>
            <InputGroup className="overflow-hidden">
              <InputGroup.Input
                placeholder="Enter password"
                className="py-3"
                type={`${isPasswordShow ? "text" : "password"}`}
              />
              <InputGroup.Suffix
                className="cursor-pointer"
                onClick={() => setIsPasswordShow(!isPasswordShow)}>
                {isPasswordShow ? (
                  <EyeSlash className="size-4 text-muted" />
                ) : (
                  <Eye className="size-4 text-muted" />
                )}
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button fullWidth size="lg" type="submit">
              Login
            </Button>
          </div>
          {/* divider */}
          <div className="flex items-center gap-2">
            <Separator className=" flex-1" variant="default" />
            <span className="uppercase text-xs text-gray-400">
              or continue with
            </span>
            <Separator className="flex-1" variant="default" />
          </div>
          {/* google login button */}
          <GoogleLoginButton />
          <div className="text-gray-500 text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-accent">
              Register here
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}
