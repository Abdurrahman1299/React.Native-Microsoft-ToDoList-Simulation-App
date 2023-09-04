import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import TasksList from "../components/TasksList";
import AddTask from "../components/AddTask";
import CompletedTasksList from "../components/CompletedTasksList";
import { COLORS } from "../constants/CONSTANTS";
import Separator from "../components/UI/Separator";
import IconButton from "../components/UI/IconButton";
import { useDispatch } from "react-redux";
import { removeList } from "../store/redux/listsSlice";
import { removeListTasks } from "../store/redux/tasksSlice";
import { removeListCompletedTasks } from "../store/redux/completedTasksSlice";

export default function ListPreviewScreen({ navigation, route }) {
  //
  const dispatch = useDispatch();
  //
  function handleRemoveList() {
    dispatch(removeList(route.params.listId));
    dispatch(removeListTasks(route.params.listTitle));
    dispatch(removeListCompletedTasks(route.params.listTitle));
    navigation.goBack();
  }
  //
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.listTitle,
      headerRight: () => {
        return (
          <TouchableOpacity onPress={handleRemoveList}>
            <IconButton
              iconName="trash"
              color="white"
              size={24}
              type="Feather"
            />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <TasksList listTitle={route.params.listTitle} />
        <Separator />
        <CompletedTasksList listTitle={route.params.listTitle} />
      </ScrollView>
      <AddTask listTitle={route.params.listTitle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR10,
  },
});
