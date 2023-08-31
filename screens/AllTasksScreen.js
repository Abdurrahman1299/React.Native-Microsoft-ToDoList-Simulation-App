import { ScrollView, StyleSheet, Text, View } from "react-native";
import Task from "../components/Task";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { COLORS, SIZES } from "../constants/CONSTANTS";
import Separator from "../components/UI/Separator";
import CompletedTask from "../components/CompletedTask";

export default function AllTasksScreen({ navigation }) {
  //
  const TASKS = useSelector((state) => state.tasksReducer.tasks);
  const completedTasks = useSelector(
    (state) => state.completedTasksReducer.completedTasks
  );
  //
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "All Tasks",
    });
  }, []);
  //

  return (
    <ScrollView style={styles.container}>
      {TASKS.length !== 0 ? (
        <ScrollView style={styles.container}>
          {TASKS.map((item) => (
            <View key={item.id}>
              <Task
                title={item.title}
                listTitle={item.listTitle}
                id={item.id}
              />
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.text}>No Tasks to Show</Text>
      )}
      <Separator />
      {completedTasks.length !== 0 ? (
        <ScrollView style={styles.container}>
          {completedTasks.map((item) => (
            <View key={item.id}>
              <CompletedTask
                title={item.title}
                listTitle={item.listTitle}
                id={item.id}
              />
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.text}>No Completed Tasks Yet</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR10,
  },
  noTasksText: {
    fontSize: SIZES.FONT,
    color: COLORS.DELETE,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  text: {
    fontSize: SIZES.FONT,
    color: COLORS.COLOR8,
    textAlign: "center",
  },
});
