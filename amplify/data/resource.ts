import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a
  .schema({
    // // person info
    // Contact: a.customType({
    //   name: a.string(),
    //   email: a.email(),
    //   notify: a.boolean(),
    // }),

    // // relationship start stop data
    // UnionDate: a.customType({
    //   start: a.date(),
    //   end: a.date(),
    // }),

    // join table to relate user and celebrity relationships
    RelationshipCelebrity: a
      .model({
        relationshipId: a.id().required(),
        celebrityId: a.id().required(),

        relationship: a.belongsTo("Relationship", "relationshipId"),
        celebrity: a.belongsTo("Celebrity", "celebrityId"),
      })
      .authorization((allow) => [allow.owner()]),

    // relationships of users
    Relationship: a
      .model({
        celebrities: a.hasMany("RelationshipCelebrity", "relationshipId"),

        ownerName: a.string(),
        notifyOwner: a.boolean(),
        spouseName: a.string(),
        spouseemail: a.email(),
        notifySpouse: a.boolean(),
        unionStartDate: a.date(),
      })
      .authorization((allow) => [allow.owner()]),

    // celebrity unions for people to measure against
    Celebrity: a.model({
      // fun name of the match-up
      unionName: a.string(),
      // full name of half the union
      firstPerson: a.string(),
      // full name of the other half
      secondPerson: a.string(),
      // number of days the relationship lasted
      lengthInDays: a.integer(),
      // message to the user when the pass
      passingMessage: a.string(),

      // users that have surpassed this union
      relationships: a.hasMany("RelationshipCelebrity", "celebrityId"),
    }),
  })
  .authorization((allow) => [allow.authenticated()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
