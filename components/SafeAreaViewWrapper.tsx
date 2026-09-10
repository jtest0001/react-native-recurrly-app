import { styled } from "nativewind";
import { FC, ReactNode } from "react";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SafeAreaViewWrapper: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <SafeAreaView className="bg-background flex-1 p-5">{children}</SafeAreaView>
  );
};

export default SafeAreaViewWrapper;
