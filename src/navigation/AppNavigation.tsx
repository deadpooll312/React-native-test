import React, { Suspense } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// local
import { Loader } from "../components/Loader/Loader";
import { LIST, ITEM } from "../constants/routes.const";
// // screens
import { ListScreen, ItemScreen } from "../constants/tabs.const";
import {TRootStackParamList} from "./types";
// navigation
const RootStack = createStackNavigator<TRootStackParamList>();
const options = { headerShown: false };

export default function AppNavigation() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RootStack.Navigator initialRouteName={LIST}>
          <RootStack.Screen name={LIST} component={ListScreen} options={options}/>
          <RootStack.Screen name={ITEM} component={ItemScreen} options={options}/>
        </RootStack.Navigator>
      </Suspense>
    </>
  );
}
