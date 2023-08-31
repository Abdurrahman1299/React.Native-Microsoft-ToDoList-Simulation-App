import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Task from "../components/Task";
import { COLORS, SIZES } from "../constants/CONSTANTS";

export default function TodayScreen() {
  //
  const TASKS = useSelector((state) => state.tasksReducer.tasks);

  //
  const todayTasksIds = useSelector((state) => state.todayTasks.ids);
  const todayTasks = TASKS.filter((item) => todayTasksIds.includes(item.id));

  return (
    <View style={styles.container}>
      {todayTasks.length === 0 ? (
        <Text style={styles.text}>You Have No Tasks for Today</Text>
      ) : (
        <FlatList
          data={todayTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task title={item.title} listTitle={item.listTitle} id={item.id} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR10,
  },
  text: {
    fontSize: SIZES.FONT,
    color: COLORS.DELETE,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
});
