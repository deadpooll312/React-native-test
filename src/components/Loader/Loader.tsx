import React from "react";
import {ActivityIndicator} from "react-native";
// local files
import {black} from "../../constants/colors";
import {ILoaderProps} from "./types";

export const Loader: React.FC<ILoaderProps> = ({color = black}) => {
	return (
		<ActivityIndicator size="large" color={color}/>
	);
}
