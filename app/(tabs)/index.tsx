import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import dayjs from "dayjs";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import ListHeading from "../../components/ListHeading";
import SafeAreaViewWrapper from "../../components/SafeAreaViewWrapper";
import SubscriptionCard from "../../components/SubscriptionCard";
import UpcomingSubscriptionCard from "../../components/UpcomingSubscriptionCard";
import { formatCurrency } from "../../lib/utils";

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] =
    useState<string>();

  return (
    <SafeAreaViewWrapper>
      <FlatList
        ListHeaderComponent={
          <>
            <View className="home-header">
              <View className="home-user">
                <Image source={images.avatar} className="home-avatar" />
                <Text className="home-user-name">{HOME_USER.name}</Text>
              </View>
              <Image source={icons.add} className="home-add-icon" />
            </View>

            <View className="home-balance-card">
              <Text className="home-balance-label">Balance</Text>
              <View className="home-balance-row">
                <Text className="home-balance-amount">
                  {formatCurrency(HOME_BALANCE.amount)}
                </Text>
                <Text className="home-balance-date">
                  {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                </Text>
              </View>
            </View>

            <View className="mb-5">
              <ListHeading title="Upcoming" />
              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => (
                  <UpcomingSubscriptionCard {...item} />
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={<View className="size-4" />}
                ListEmptyComponent={
                  <Text className="home-empty-state">
                    No upcoming renewals yet.
                  </Text>
                }
                showsHorizontalScrollIndicator={false}
                horizontal
              />
            </View>

            <ListHeading title="All Subscriptions" />
          </>
        }
        data={HOME_SUBSCRIPTIONS}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            onPress={() => {
              if (expandedSubscriptionId === item.id) {
                setExpandedSubscriptionId(undefined);
              } else {
                setExpandedSubscriptionId(item.id);
              }
            }}
            expanded={expandedSubscriptionId === item.id}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<View className="size-4" />}
        ListEmptyComponent={
          <Text className="home-empty-state">No subscriptions yet.</Text>
        }
        extraData={expandedSubscriptionId}
        contentContainerClassName="pb-18"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaViewWrapper>
  );
}
