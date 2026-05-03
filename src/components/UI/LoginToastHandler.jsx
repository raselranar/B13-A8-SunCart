"use client";
import { toast } from "@heroui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export function LoginToastHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("login") === "success") {
      toast.success("Welcome back!");

      // Clean the URL so the toast doesn't show again on refresh
      const newUrl = window.location.pathname;
      router.replace(newUrl);
    }
  }, [searchParams, router]);

  return null;
}
