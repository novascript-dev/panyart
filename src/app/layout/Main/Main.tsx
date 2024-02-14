import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return <div className="flex-grow p-8 bg-custom-pany-two">{children}</div>;
}
