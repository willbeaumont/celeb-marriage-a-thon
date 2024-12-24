"use client";

import type { Schema } from "@/amplify/data/resource";

import { generateClient } from "aws-amplify/data";

import {
  View,
  Flex,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@aws-amplify/ui-react";
import Link from "next/link";
import { useState } from "react";

const client = generateClient<Schema>();
type Celebrities = Schema["Celebrity"]["type"];

const Celebrity = () => {
  const [celebrities, setCelebrities] = useState<Celebrities[]>([]);
  const fetchCelebrities = async () => {
    const { data: celebrities, errors } = await client.models.Celebrity.list();
    if (errors) {
      console.log(errors);
    } else {
      setCelebrities(celebrities);
    }
  };

  fetchCelebrities();

  return (
    <View>
      <Table caption="Celebrities">
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Celebrity 1</TableCell>
            <TableCell as="th">Celebrity 2</TableCell>
            <TableCell as="th">Lasted (days)</TableCell>
            <TableCell as="th">Message</TableCell>
          </TableRow>
          {celebrities.map((celebrity, celebrityId) => (
            <TableRow key={`celebrity-${celebrityId}`}>
              <TableCell key={`name-${celebrityId}`}>
                {celebrity.unionName}
              </TableCell>
              <TableCell key={`first-${celebrityId}`}>
                {celebrity.firstPerson}
              </TableCell>
              <TableCell key={`second-${celebrityId}`}>
                {celebrity.secondPerson}
              </TableCell>
              <TableCell key={`length-${celebrityId}`}>
                {celebrity.lengthInDays}
              </TableCell>
              <TableCell key={`message-${celebrityId}`}>
                {celebrity.passingMessage}
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
      </Table>
      <Flex direction="column">
        <Link href={"/dashboard/celebrity/create"}>
          Add New Celebrity Record
        </Link>
      </Flex>
    </View>
  );
};

export default Celebrity;
