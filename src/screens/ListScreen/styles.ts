import { StyleSheet } from "react-native";
import { black, blue } from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 100,
  },
  listWrapper: {
    paddingTop: 50,
    height: 780,
    overflow: "hidden"
  },
  updateListButton: {
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginBottom: 40,
    backgroundColor: blue
  },
  list: {
    marginVertical: 18,
    overflow: 'visible',
    overflowY: 'hidden'
  },
  listItem: {
    padding: 10,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 3,
    width: '100%',
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listItemImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
