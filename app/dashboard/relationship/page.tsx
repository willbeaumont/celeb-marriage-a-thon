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
import { redirect } from "next/navigation";

const client = generateClient<Schema>();
type Relationships = Schema["Relationship"]["type"];

const Relationship = () => {
  const [relationships, setRelationships] = useState<Relationships[]>([]);
  const fetchRelationships = async () => {
    const { data: relationships, errors } =
      await client.models.Relationship.list();
    if (errors) {
      console.log(errors);
    } else {
      setRelationships(relationships);
    }
  };

  fetchRelationships();

  return (
    <View>
      <Table caption="Relationships">
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Person 1</TableCell>
            <TableCell as="th">Notify 1</TableCell>
            <TableCell as="th">Person 2</TableCell>
            <TableCell as="th">Notify 2</TableCell>
            <TableCell as="th">Started</TableCell>
            <TableCell as="th">Action</TableCell>
          </TableRow>
          {relationships.map((relationship, relationshipId) => (
            <TableRow key={`relationship-${relationshipId}`}>
              <TableCell key={`name-${relationshipId}`}>
                {`${relationship.ownerName} and ${relationship.spouseName}`}
              </TableCell>
              <TableCell key={`person1-${relationshipId}`}>
                {relationship.ownerName}
              </TableCell>
              <TableCell key={`notify1-${relationshipId}`}>
                {relationship.notifyOwner ? "Yes" : "No"}
              </TableCell>
              <TableCell key={`person2-${relationshipId}`}>
                {relationship.spouseName}
              </TableCell>
              <TableCell key={`notify2-${relationshipId}`}>
                {relationship.notifySpouse ? "Yes" : "No"}
              </TableCell>
              <TableCell key={`start-${relationshipId}`}>
                {relationship.unionStartDate?.toLocaleLowerCase()}
              </TableCell>
              <TableCell key={`update-${relationshipId}`}>
                <Link
                  href={`/dashboard/relationship/update/${relationship.id}`}
                >
                  Update
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
      </Table>
      <Flex direction="column">
        <Link href={"/dashboard/relationship/create"}>
          Add New Relationship Record
        </Link>
      </Flex>
    </View>
  );
};

export default Relationship;
