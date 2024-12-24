import {
  View,
  Flex,
  Heading,
  useAuthenticator,
  Menu,
  MenuItem,
} from "@aws-amplify/ui-react";

import Link from "next/link";

export const TopNavigation = () => {
  const { route, signOut } = useAuthenticator();
  return (
    <View as="nav" height={60} width={"100%"}>
      <Flex
        direction="row"
        height="100%"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Heading level={4}>Celeb Marriage-a-thon</Heading>
        <Flex direction="column">
          <Menu size="large" menuAlign="end">
            <MenuItem>
              <Link href={"/about"}>About</Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/dashboard"}>Dashboard</Link>
            </MenuItem>
            <MenuItem>
              {route === "authenticated" ? (
                <Link href={"/about"} onClick={signOut}>
                  Sign Out
                </Link>
              ) : (
                <Link href={"/dashboard"}>Sign In</Link>
              )}
            </MenuItem>
          </Menu>
        </Flex>
      </Flex>
    </View>
  );
};
