"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Error500Props {
  error?: Error;
  reset?: () => void;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;

  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

export default function Error500({ error, reset }: Error500Props) {
  return (
    <section className="flex min-h-screen min-w-full items-center justify-center p-4">
      <div className="max-w-xl space-y-4 rounded-lg border bg-card p-6 text-center shadow-sm">
        <h1 className="text-3xl font-bold">500</h1>
        <p className="text-muted-foreground">
          Có lỗi xảy ra. Vui lòng thử lại.
        </p>

        {error && (
          <div className="rounded-md bg-muted px-3 py-2 text-left text-sm">
            <div className="font-semibold">Chi tiết</div>
            <div className="mt-1 break-words text-muted-foreground">
              {getErrorMessage(error)}
            </div>
          </div>
        )}

        <div className="flex justify-center gap-3">
          {reset && (
            <Button variant="outline" onClick={reset}>
              Thử lại
            </Button>
          )}
          <Button asChild>
            <Link href="/">Về trang chủ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
