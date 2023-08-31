import { useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../store/redux/tasksSlice";
import IconButton from "./UI/IconButton";
import { COLORS, SIZES } from "../constants/CONSTANTS";

export default function AddTask({ listTitle }) {
  //
  const dispatch = useDispatch();
  //
  const [taskTitle, setTaskTitle] = useState("");
  //
  const addTaskHandler = () => {
    const task = { id: Date.now(), title: taskTitle, listTitle: listTitle };
    dispatch(addTask(task));
    setTaskTitle("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="add new task"
        value={taskTitle}
        onChangeText={(text) => setTaskTitle(text)}
        placeholderTextColor={COLORS.BORDER}
        cursorColor={COLORS.COLOR5}
        autoCapitalize="words"
      />
      <Pressable
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
