import LocationBar from "@/components/user/LocationBar";
import { homeStyles } from "@/styles/homeStyles";
import { StatusBar, View } from "react-native";
const UserHome = () => {
  return (
    <View style={homeStyles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="orange"
        translucent={false}
      />
      <LocationBar />
    </View>
  );
};
export default UserHome;
