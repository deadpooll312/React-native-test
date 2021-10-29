import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// local
import styles from "./styles";
import { IItemScreenProps } from "../screenPropTypes";

const ItemScreen: React.FC<IItemScreenProps> = ({route}) => {
  const user = route.params?.data?.actor
  const {id, display_login, avatar_url} = user
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.itemWrapper}>
      <TouchableOpacity onPress={goBack} style={styles.goBackButton}>
        <Text>Назад</Text>
      </TouchableOpacity>

      <View style={styles.itemsList}>
        <Image style={styles.listItemImage} source={{uri: avatar_url}}/>
        <View>
          <Text>name: {display_login}</Text>
          <Text>id: {id}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemScreen;
