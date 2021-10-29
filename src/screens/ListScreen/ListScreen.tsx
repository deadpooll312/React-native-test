import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useIsFocused } from '@react-navigation/native';
// local
import { getListRequest } from "../../store/list/list.action";
import ListScreenItem from "./components/ListScreenItem";
import { ITEM } from "../../constants/routes.const";
import { getList } from "../../store/list/selectors";
import { SafeAreaView } from "react-navigation";
import styles from "./styles";

const ListScreen: React.FC = () => {
  const [timer, setTimer] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const result: any = useSelector(getList);
  const interval: any = useRef(null)
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      interval.current = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);

      return () => {
        setTimer(interval.current);
        clearInterval(interval.current);
      };
    }
  }, [isFocused]);

  useEffect(() => {
    if (timer >= 60) {
      dispatch(getListRequest());
      setTimer(0);
    }
  }, [timer]);

  const navigationToItem = (item) => {
    navigation.navigate(ITEM, {
      data: item
    });
    clearInterval(interval.current);
  };

  const updateListHandler = () => {
    if (timer >= 15) {
      dispatch(getListRequest());
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listWrapper}>
        <FlatList
          data={result.list.slice(0, 25)}
          numColumns={1}
          keyExtractor={(item) => item.id}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          initialNumToRender={25}
          renderItem={({ item }) => (
            <ListScreenItem onClick={() => navigationToItem(item)} data={item?.actor} />
          )}
        />
      </View>
      <TouchableOpacity style={styles.updateListButton} onPress={updateListHandler}>
        <Text>Обновить список</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListScreen;
