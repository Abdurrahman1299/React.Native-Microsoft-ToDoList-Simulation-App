import { StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../../constants/CONSTANTS";

export default function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: SIZES.MGV,
    borderTopColor: COLORS.BORDER,
    borderTopWidth: 1,
    borderStyle: "solid",
    width: "92%",
    alignSelf: "center",
  },
});
