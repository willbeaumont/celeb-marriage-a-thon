"use client";

import { Flex } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Link from "next/link";

const Dashboard = () => {
  return (
    <Flex direction="column">
      <Link href={"/dashboard/celebrity"}>Celebrity Page</Link>
      <Link href={"/dashboard/relationship"}>Relationship Page</Link>
    </Flex>
  );
};

export default Dashboard;
