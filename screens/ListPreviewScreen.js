import { ScrollView, StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import TasksList from "../components/TasksList";
import AddTask from "../components/AddTask";
import CompletedTasksList from "../components/CompletedTasksList";
import { COLORS } from "../constants/CONSTANTS";
import Separator from "../components/UI/Separator";

export default function ListPreviewScreen({ navigation, route }) {
  //
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.listTitle,
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
