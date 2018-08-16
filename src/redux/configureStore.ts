import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { allReducers, IApplicationState } from "./types";

export default function configureStore(): Store<IApplicationState> {

    const composeEnhancers = composeWithDevTools({});

    return createStore(
        allReducers,
        composeEnhancers(applyMiddleware(thunk)),
    );

}

