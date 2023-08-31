import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCompletedTask } from "../store/redux/completedTasksSlice";
import { COLORS, SIZES } from "../constants/CONSTANTS";
import IconButton from "./UI/IconButton";
import { addTask } from "../store/redux/tasksSlice";

export default function CompletedTask({ id, title, listTitle }) {
  //
  const dispatch = useDispatch();
  //
  function removeCompletedTaskHandler() {
    dispatch(removeCompletedTask(id));
  }

  function uncheckTaskHandler() {
    dispatch(
      addTask({ id: Date.now(), title, listTitle: listTitle.slice(0, -9) })
    );
    dispatch(removeCompletedTask(id));
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskBoxTitle}>
        <TouchableOpacity onPress={uncheckTaskHandler}>
          <IconButton
            color={COLORS.RIPPLE}
            iconName="check-square-o"
            size={SIZES.LICON}
            type="FontAwesome"
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={removeCompletedTaskHandler}>
        <IconButton
          color={COLORS.RIPPLE}
          size={SIZES.ICON}
          type="Feather"
          iconName="trash-2"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.TASKBG,
    borderRadius: SIZES.PDV,
    marginVertical: 4,
    overflow: "hidden",
    paddingHorizontal: SIZES.PDH,
    paddingVertical: SIZES.PDV,
    opacity: 0.8,
  },
  title: {
    fontSize: SIZES.FONT,
    color: COLORS.TEXT,
    marginLeft: SIZES.MGH,
  },
  taskBoxTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
