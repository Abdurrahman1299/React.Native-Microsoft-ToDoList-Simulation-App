import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { removeList } from "../store/redux/listsSlice";
import { removeListTasks } from "../store/redux/tasksSlice";
import { COLORS, SIZES } from "../constants/CONSTANTS";
import IconButton from "./UI/IconButton";

export default function ListsList() {
  //
  const LISTS = useSelector((state) => state.listsReducer.lists);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //
  const removeListHandler = (id, title) => {
    dispatch(removeList(id));
    dispatch(removeListTasks(title));
  };

  function onPressHandler(listTitle) {
    navigation.navigate("ListPreview", { listTitle });
  }

  return (
    <ScrollView>
      {LISTS.map((item) => (
        <Pressable
          android_ripple={{ color: COLORS.RIPPLE }}
          key={item.id}
          style={styles.listContainer}
          onPress={() => onPressHandler(item.title)}
        >
          <View style={styles.titleContaier}>
            <IconButton
              color={COLORS.COLOR5}
              iconName={"list"}
              size={SIZES.ICON}
              type="Feather"
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Pressable
            onPress={() => removeListHandler(item.id, item.title)}
            style={styles.delBtn}
          >
            <IconButton
              color={COLORS.DELETE}
              iconName={"trash-2"}
              size={SIZES.ICON}
              type="Feather"
            />
          </Pressable>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.PDH,
    paddingVertical: SIZES.PDV,
  },
  titleContaier: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: COLORS.TEXT,
    fontSize: SIZES.FONT,
    marginLeft: SIZES.MGH,
  },
});
