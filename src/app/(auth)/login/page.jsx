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
} from "@heroui/react";
import { useState } from "react";
import { LuSun } from "react-icons/lu";
import { Icon } from "@iconify/react";

export default function LoginPage() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const onSubmit = () => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="flex justify-center py-12 bg-background">
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
          <h2 className="text-2xl text-gray-800 sm:text-4xl font-bold tracking-wider ">
            Welcome Back
          </h2>
          <p className="text-gray-500">Sign in to your SunCart account</p>
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
            <InputGroup>
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
            <Button fullWidth type="submit">
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
          <Button className="w-full" variant="tertiary">
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
        </div>
      </Form>
    </div>
  );
}
