"use client";

import Error500 from "@/components/Error500";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <Error500 error={error} reset={reset} />;
}
