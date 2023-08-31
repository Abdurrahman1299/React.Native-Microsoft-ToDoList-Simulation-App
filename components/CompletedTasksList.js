import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import CompletedTask from "./CompletedTask";

export default function CompletedTasksList({ listTitle }) {
  //
  const completedTasks = useSelector(
    (state) => state.completedTasksReducer.completedTasks
  );

  const completedTasksInList = completedTasks.filter(
    (item) => item.listTitle === listTitle + "completed"
  );

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
