import clsx from "clsx";
import { Image, Pressable, Text, View } from "react-native";
import {
  formatCurrency,
  formatStatusLabel,
  formatSubscriptionDateTime,
} from "../lib/utils";

const FALLBACK = "Not provided";

const withFallback = (value?: string | null): string => {
  const trimmed = value?.trim();
  return trimmed ? trimmed : FALLBACK;
};

const SubscriptionCard = ({
  name,
  price,
  currency,
  icon,
  billing,
  color,
  category,
  plan,
  renewalDate,
  paymentMethod,
  startDate,
  status,
  expanded,
  onPress,
}: SubscriptionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={clsx("sub-card", expanded ? "sub-card-expanded" : "bg-card")}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" />
          <View className="sub-copy">
            <Text className="sub-title" numberOfLines={1}>
              {withFallback(name)}
            </Text>
            <Text className="sub-meta">
              {category?.trim() ||
                plan?.trim() ||
                (renewalDate
                  ? formatSubscriptionDateTime(renewalDate)
                  : FALLBACK)}
            </Text>
          </View>
        </View>

        <View className="sub-price-box">
          <Text className="sub-price">{formatCurrency(price, currency)}</Text>
          <Text className="sub-billing">{withFallback(billing)}</Text>
        </View>
      </View>

      {expanded && (
        <View className="sub-body">
          <View className="sub-details">
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text className="sub-value" numberOfLines={1}>
                  {withFallback(paymentMethod)}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Category:</Text>
                <Text className="sub-value" numberOfLines={1}>
                  {category?.trim() || plan?.trim() || FALLBACK}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Started:</Text>
                <Text className="sub-value" numberOfLines={1}>
                  {formatSubscriptionDateTime(startDate)}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Renewal date:</Text>
                <Text className="sub-value" numberOfLines={1}>
                  {formatSubscriptionDateTime(renewalDate)}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Status:</Text>
                <Text className="sub-value" numberOfLines={1}>
                  {formatStatusLabel(status)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default SubscriptionCard;
