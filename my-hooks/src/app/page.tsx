"use client";

import useArrayState from "@/hooks/useArrayState";
import { useEffect } from "react";

export default function Home() {
  const [array, push, remove] = useArrayState([]);
  useEffect(() => {
    push("foo");
    push("bar");
    push("baz");
    remove("bar");
  }, []);

  // remove("foo");
  return (
    <main>
      <h1>useArrayState</h1>
      <p>array: {JSON.stringify(array)}</p>
    </main>
  );
}
