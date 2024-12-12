import type { Metadata } from "next";

import type { RootLayoutProps } from "./types";

export const metadata: Metadata = {
  title: "Hyse",
  description: "Read comics",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
