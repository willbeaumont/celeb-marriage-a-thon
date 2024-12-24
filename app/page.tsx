"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { redirect } from "next/navigation";

export default function App() {
  const { route } = useAuthenticator((context) => [context.user]);

  return (
    <>
      {route === "authenticated" ? redirect("/dashboard") : redirect("/about")}
    </>
  );
}
