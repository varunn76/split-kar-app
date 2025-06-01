import colors from "@/constants/colors";
import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const { width: screenWidth } = Dimensions.get("window");

export default StyleSheet.create({
  toastContainer: {
    position: "absolute",
    bottom: RFPercentage(3),
    left: (screenWidth - RFPercentage(40)) / 2,
    width: RFPercentage(40),
    paddingVertical: RFPercentage(1.5),
    paddingHorizontal: RFPercentage(2),
    borderRadius: RFPercentage(1),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white", // You can make this dynamic
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    zIndex: 1000,
    gap: RFPercentage(1),
  },
  toastMessage: {
    fontSize: RFPercentage(1.75),
    flexShrink: 1,
    color: "#333",
  },
});
