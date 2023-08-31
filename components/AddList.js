import { useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { addList } from "../store/redux/listsSlice";
import IconButton from "./UI/IconButton";
import { COLORS, SIZES } from "../constants/CONSTANTS";

export default function AddList() {
  //
  const dispatch = useDispatch();
  //
  const [listTitle, setListTitle] = useState("");
  //
  const addListHandler = async () => {
    if (listTitle.trim() === "") return;
    const list = { id: Date.now(), title: listTitle };
    dispatch(addList(list));
    setListTitle("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={COLORS.BORDER}
        cursorColor={COLORS.COLOR5}
        autoCapitalize="words"
        placeholder="add new list"
        value={listTitle}
        onChangeText={(text) => setListTitle(text)}
        style={styles.textInput}
      />
      <Pressable
        onPress={addListHandler}
        style={({ pressed }) =>
          !pressed ? styles.btn : [styles.btn, { opacity: 0.7 }]
        }
      >
        <IconButton
          color={COLORS.COLOR10}
          size={SIZES.ICON + 10}
          iconName="plus"
          type="Feather"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: SIZES.MGV,
    marginHorizontal: SIZES.MGH,
  },
  textInput: {
    flex: 1,
    fontSize: SIZES.FONT,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: COLORS.BORDER,
    color: COLORS.TEXT,
  },
  btn: {
    backgroundColor: COLORS.COLOR4,
    borderRadius: SIZES.PDV,
    padding: SIZES.PDV - 6,
    marginLeft: SIZES.MGH,
  },
});
