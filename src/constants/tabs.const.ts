import { lazy } from "react";
// local
import {TTab, ETabIndexes} from "../navigation/types";

export const ListScreen = lazy(
  () => import("../screens/ListScreen/ListScreen"),
);
export const ItemScreen = lazy(
  () => import("../screens/ItemScreen/ItemScreen"),
);
