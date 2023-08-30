import ThemeContextProvider from "@/contexts/theme-context";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
