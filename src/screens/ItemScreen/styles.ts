import {StyleSheet} from 'react-native';
import {black} from "../../constants/colors";

export default StyleSheet.create({
	itemWrapper: {
		flex: 1,
		borderColor: black,
		borderWidth: 1,
		borderRadius: 3,
		paddingTop: 50,
		padding: 15,
	},
	goBackButton: {
		borderWidth: 1,
		borderRadius: 3,
		padding: 10,
		marginBottom: 20,
	},
	listItemImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 30
	},
	itemsList: {
		marginTop: 30
	}
});
