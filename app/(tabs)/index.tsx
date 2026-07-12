import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="bg-background flex-1 p-5">
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
    </SafeAreaView>
  );
}
