"use client";
import { useState } from "react";

export default function useArrayState(initState: any[] = []) {
  const [state, setState] = useState<any[]>(initState);

  const push = (item: any) => {
    setState((prev: any) => [...prev, item]);
  };

  const remove = (item: any) => {
    setState((prev: any) => {
      const copy = [...prev];
      const index = copy.indexOf(item);
      if (index !== -1) {
        copy.splice(index, 1);
      }
      return copy;
    });
  };

  return [state, push, remove] as const;
}
