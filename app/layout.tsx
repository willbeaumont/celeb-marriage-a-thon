"use client";

import { Inter } from "next/font/google";
import "./app.css";

import { Authenticator, View } from "@aws-amplify/ui-react";
import { TopNavigation } from "./top-navigation";
import "@aws-amplify/ui-react/styles.css";

const inter = Inter({ subsets: ["latin"] });

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authenticator.Provider>
          <View maxWidth={1200} margin={"auto"}>
            <TopNavigation />
            <main>{children}</main>
          </View>
        </Authenticator.Provider>
      </body>
    </html>
  );
}
