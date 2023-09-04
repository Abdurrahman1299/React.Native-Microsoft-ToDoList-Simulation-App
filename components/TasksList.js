import { ScrollView, StyleSheet, Text, View } from "react-native";
import Task from "./Task";
import { useSelector } from "react-redux";
import { COLORS, SIZES } from "../constants/CONSTANTS";

export default function TasksList({ listTitle }) {
  //
  const TASKS = useSelector((state) => state.tasksReducer.tasks);
  //
  const specificTasks = TASKS.filter((item) => item.listTitle === listTitle);

  return (
    <View>
      <ScrollView>
        {specificTasks.length === 0 ? (
          <Text style={styles.text}>No Tasks in The List</Text>
        ) : (
          specificTasks.map((item) => (
            <View key={item.id}>
              <Task
                title={item.title}
                listTitle={item.listTitle}
                id={item.id}
              />
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.FONT,
    color: COLORS.COLOR7,
    fontWeight: "bold",
    textAlign: "center",
  },
});
