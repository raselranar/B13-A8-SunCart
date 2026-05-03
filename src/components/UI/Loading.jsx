import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center gap-4 min-h-[80vh]">
      <Spinner size="xl" />
    </div>
  );
}
