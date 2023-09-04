import { StyleSheet, View } from "react-native";
import ListsList from "../components/ListsList";
import AddList from "../components/AddList";
import { COLORS } from "../constants/CONSTANTS";
import PermanentList from "../components/PermanentList";
import Separator from "../components/UI/Separator";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.permanentLists}>
        <PermanentList
          title="All Tasks"
          screen="AllTasks"
          icon={"home"}
          name={"home"}
          color={COLORS.COLOR4}
        />
        <PermanentList
          title="My Day"
          screen="Today"
          name={"sun"}
          color={COLORS.COLOR9}
        />
      </View>
      <Separator />
      <ListsList />
      <AddList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLOR10,
  },
});
