import CustomText from "@/components/shared/CustomText";
import { roleStyles } from "@/styles/roleStyles";
import { router } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
const Role = () => {
  const handleUserPress = () => {
    router.navigate("/user/auth");
  };
  const handleDriverPress = () => {
    router.navigate("/driver/auth");
  };
  return (
    <View style={roleStyles.container}>
      <Image
        source={require("@/assets/images/logo_t.png")}
        style={roleStyles.logo}
      />

      <CustomText fontFamily="Medium" variant="h6">
        Select your role
      </CustomText>

      <TouchableOpacity style={roleStyles.card} onPress={handleUserPress}>
        <Image
          source={require("@/assets/images/customer.jpg")}
          style={roleStyles.image}
        />
        <View>
          <CustomText style={roleStyles.title}>User</CustomText>
          <CustomText style={roleStyles.description}>
            Track your children&apos;s school bus in real-time, ensuring their
            safety and punctuality.
          </CustomText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={roleStyles.card} onPress={handleDriverPress}>
        <Image
          source={require("@/assets/images/rider.jpg")}
          style={roleStyles.image}
        />
        <View>
          <CustomText style={roleStyles.title}>Driver</CustomText>
          <CustomText style={roleStyles.description}>
            Share your location with children&apos;s parents and school
            authorities
          </CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Role;
