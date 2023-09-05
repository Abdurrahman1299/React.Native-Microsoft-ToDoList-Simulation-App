import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../store/redux/tasksSlice";
import { addCompletedTask } from "../store/redux/completedTasksSlice";
import { addTodayTask, removeTodayTask } from "../store/redux/todaySlice";
import { useState } from "react";
import { COLORS, SIZES } from "../constants/CONSTANTS";
import IconButton from "../components/UI/IconButton";

export default function Task({ title, listTitle, id }) {
  //
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState(title);
  //
  const dispatch = useDispatch();
  //
  const todayTasksIds = useSelector((state) => state.todayTasks.ids);
  const taskInDueToday = todayTasksIds.includes(id);
  //
  function onPressHandler() {
    setIsEditing(true);
  }

  function toggleDueToday() {
    if (taskInDueToday) {
      dispatch(removeTodayTask(id));
    } else {
      dispatch(addTodayTask(id));
    }
  }

  function removeTaskHandler() {
    dispatch(removeTask({ id, listTitle }));
  }

  function AddCompletedTaskHandler() {
    dispatch(
      addCompletedTask({ id, title, listTitle: listTitle + "completed" })
    );
    dispatch(removeTask({ id, listTitle }));
  }

  function saveEditingHandler() {
    dispatch(removeTask({ id }));
    dispatch(addTask({ id: Date.now(), title: newTaskTitle, listTitle }));
    Keyboard.dismiss();
    setIsEditing(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskBoxTitle}>
        <TouchableOpacity onPress={AddCompletedTaskHandler}>
          <IconButton
            color={COLORS.COLOR7}
            iconName="square-o"
            size={SIZES.LICON}
            type="FontAwesome"
          />
        </TouchableOpacity>
        {!isEditing ? (
          <Pressable onLongPress={onPressHandler}>
            <View>
              <Text style={styles.taskTitle}>{title}</Text>
            </View>
          </Pressable>
        ) : (
          <TextInput
            value={newTaskTitle}
            onChangeText={(t) => setNewTaskTitle(t)}
            autoFocus={true}
            style={styles.taskTitle}
          />
        )}
      </View>
      {!isEditing ? (
        <View style={styles.btnsContainer}>
          <TouchableOpacity onPress={toggleDueToday}>
            {taskInDueToday ? (
              <IconButton
                iconName="today"
                size={SIZES.ICON}
                color={COLORS.COLOR9}
                type="Ionicons"
              />
            ) : (
              <IconButton
                iconName="today-outline"
                size={SIZES.ICON}
                color={COLORS.COLOR2}
                type="Ionicons"
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={removeTaskHandler}>
            <IconButton
              color={COLORS.DELETE}
              size={SIZES.ICON}
              type="Feather"
              iconName="trash-2"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.btnsContainer}>
          <TouchableOpacity
            onPress={saveEditingHandler}
            style={{ alignItems: "center" }}
          >
            <IconButton
              iconName="save"
              size={SIZES.ICON}
              color={COLORS.COLOR7}
              type="Feather"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsEditing(false)}
            style={{ alignItems: "center" }}
          >
            <IconButton
              iconName="close-circle"
              size={SIZES.ICON + 2}
              color={COLORS.DELETE}
              type="Ionicons"
            />
          </TouchableOpacity>
        </View>
      )}
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
  },
  taskBoxTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: SIZES.FONT,
    color: COLORS.TEXT,
    marginHorizontal: SIZES.MGH,
  },
  btnsContainer: {
    flex: 0.22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  saveText: {
    fontSize: 12,
    color: COLORS.TEXT,
  },
});
