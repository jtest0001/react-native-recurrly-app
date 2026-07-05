import { Link, RelativePathString } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="bg-background flex-1 items-center justify-center">
      <Text className="text-success text-xl font-bold">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="bg-primary mt-4 rounded p-4 text-white"
      >
        Go to Onboarding
      </Link>
      <Link href="/sign-in" className="bg-primary mt-4 rounded p-4 text-white">
        Go to Sign In
      </Link>
      <Link href="/sign-up" className="bg-primary mt-4 rounded p-4 text-white">
        Go to Sign Up
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: {
            id: "spotify",
          },
        }}
        className="bg-primary mt-4 rounded p-4 text-white"
      >
        Spotify Subscriptions
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: {
            id: "claude",
          },
        }}
        className="bg-primary mt-4 rounded p-4 text-white"
      >
        Claude Max Subscriptions
      </Link>
    </View>
  );
}
