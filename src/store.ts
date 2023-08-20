import { createContext } from "react";

const initialState ={
    first:"Aslam",
    last:"Mohames"
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;