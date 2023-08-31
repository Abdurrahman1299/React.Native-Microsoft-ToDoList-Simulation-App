import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CompletedTask from "./CompletedTask";
import { COLORS, SIZES } from "../constants/CONSTANTS";

export default function CompletedTasksList({ listTitle }) {
  //
  const completedTasks = useSelector(
    (state) => state.completedTasksReducer.completedTasks
  );

  const completedTasksInList = completedTasks.filter(
    (item) => item.listTitle === listTitle + "completed"
  );

  if (completedTasks.length === 0)
    return <Text style={styles.text}>No Completed Tasks Yet</Text>;
  return (
    <ScrollView>
      {completedTasksInList.map((item) => (
        <View key={item.id}>
          <CompletedTask
            title={item.title}
            listTitle={item.listTitle}
            id={item.id}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.FONT,
    color: COLORS.DELETE,
    textAlign: "center",
  },
});
