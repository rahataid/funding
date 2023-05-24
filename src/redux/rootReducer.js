import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { appSlice } from "./slices/app";
import commmunityReducer from "./slices/communities";
import organizationReducer from "./slices/organizations";
// slices

// ----------------------------------------------------------------------

const createNoopStorage = () => ({
    getItem() {
        return Promise.resolve(null);
    },
    setItem(_key, value) {
        return Promise.resolve(value);
    },
    removeItem() {
        return Promise.resolve();
    },
});

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
    whitelist: [],
};

// const productPersistConfig = {
//     key: "product",
//     storage,
//     keyPrefix: "redux-",
//     whitelist: ["sortBy", "checkout"],
// };

const rootReducer = combineReducers({
    [commmunityReducer.name]: commmunityReducer.reducer,
    [organizationReducer.name]: organizationReducer.reducer,
    [appSlice.name]: appSlice.reducer,
});

export { rootPersistConfig, rootReducer };
