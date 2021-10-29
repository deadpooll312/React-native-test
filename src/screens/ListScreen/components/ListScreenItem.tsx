import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
// local
import styles from '../styles'
import { IListScreenItemProps } from "../../screenPropTypes";

const ListScreenItem: React.FC<IListScreenItemProps> = ({data, onClick}) => {
	const {display_login, avatar_url} = data
	return (
		<TouchableOpacity onPress={onClick} style={styles.listItem}>
			<Text>{display_login}</Text>
			<Image style={styles.listItemImage} source={{uri: avatar_url}}/>
		</TouchableOpacity>
	);
};

export default ListScreenItem;
