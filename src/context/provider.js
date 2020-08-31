import React, {createContext, useEffect, useReducer} from "react";
import   useRequest from "abstract/hooks/useRequest";
import  reducer, {actionCreators} from "./reducers";
import  {store} from "./reducers/store";


const DataContext = createContext(store);

//todo Refactor
// 1. abstract
// 2. option for Lazy fetching
function ServiceProvider(props){
	const { children, method, url, data, type } = props;
	const [globalState, dispatch] = useReducer(reducer, store);

	const loading = useRequest({method, url}, (response, error)=>{
		let actionObj;
		if(type == actionCreators.EVENTS){
			if(response){
				actionObj = actionCreators.setEvents(response.events)
			} else if(error){
				console.log(error);
			}
		} else if(type == actionCreators.ALBUMS){
			if(response){
				actionObj = actionCreators.setAlbums(response.albums)
			} else if(error){
				console.log(error);
			}
		}
		if(actionObj){ // re-render
			console.log(actionObj)
			dispatch(actionObj)
		}
	});


	if(loading) {
		// add Loader UI as children with z-index 1 on top of children
	}

	const context = { ...globalState };
	return (
		<DataContext.Provider value={context}>
			{children}
		</DataContext.Provider>
	)
}

function useGetContextStateForRequest(reducer, store, requestHandler){
	const [globalState, dispatch] = useReducer(reducer, store);
	requestHandler()

}



export {
	// provider
	ServiceProvider,
	// consumers
	DataContext
}