import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ color, iconName, size, type }) {
  switch (type) {
    case "Feather":
      return <Feather color={color} size={size} name={iconName} />;
    case "FontAwesome":
      return <FontAwesome color={color} size={size} name={iconName} />;
    case "Ionicons":
      return <Ionicons name={iconName} size={size} color={color} />;
  }
}
