import { createContext } from "react";
import { ITabContext } from "../../App/types";

const TabContext = createContext<ITabContext | null>(null);

export default TabContext;