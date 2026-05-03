"use client";

import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
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
import { redirect } from "next/navigation";
import GoogleLoginButton from "@/components/UI/GoogleLoginButton";

export default function RegistrationPage() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    // sign up
    const { data, error } = await authClient.signUp.email(userData);
    // show toast error on
    // console.log({ data, error });
    if (error?.status === 422)
      return toast.danger(`Registration failed. Email already in use.`);
    if (error) return toast.danger("Registration failed.");
    toast.success("Account created! Please login.");
    redirect("/login");
  };

  return (
    <div className="flex justify-center py-12 bg-background px-4">
      <Form
        className="flex w-96 flex-col overflow-hidden gap-4 rounded-3xl outline-red-950 pb-6 shadow-xl "
        onSubmit={onSubmit}>
        {/* gradient border top */}
        <div className="bg-gradient rounded-t-full h-2 w-full"></div>
        {/* logo */}
        <div className="flex items-center flex-col mt-4">
          <div className="bg-accent size-10 flex justify-center items-center text-white p-2 rounded-full">
            <LuSun size={40} />
          </div>
          <h2 className="text-2xl text-gray-800 sm:text-4xl mt-2 font-bold tracking-wider ">
            Create Account
          </h2>
          <p className="text-gray-500 mt-2 text-center">
            Join the SunCart community today!
          </p>
        </div>
        {/* inputs */}
        <div className="px-6 flex flex-col gap-4">
          {/* Full Name */}
          <TextField isRequired name="name">
            <Label>Full Name</Label>
            <Input className="py-3" placeholder="Your Name" />
            <FieldError />
          </TextField>
          {/* Email Address */}
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
            <Label>Email Address</Label>
            <Input className="py-3" placeholder="you@example.com" />
            <FieldError />
          </TextField>

          {/* Photo URL (optional) */}
          <TextField
            name="image"
            type="url"
            validate={(value) => {
              if (
                value &&
                !value.match(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i)
              ) {
                return "Please enter a valid image URL (e.g., .jpg, .png)";
              }
              return null;
            }}>
            <Label className="flex gap-1 items-center">
              Photo URL
              <span className="text-gray-500 text-xs">(optional)</span>
            </Label>
            <Input
              className="py-3"
              placeholder="https://example.com/photo.jpg"
            />
            <FieldError />
          </TextField>
          {/* Password */}
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
              Register
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
            Already have an account?{" "}
            <Link href="/login" className="text-accent">
              Login here
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}
