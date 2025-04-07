import NavigationBar from "@/components/NavigationBar";
import StyledComponentsRegistry from "@/lib/styled-provider";
import { GlobalStyles } from "@/styles/GlobalStyle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <div style={{ padding: "40px" }}>
            <NavigationBar />
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
