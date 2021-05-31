import React, {createContext, useReducer} from 'react'

import Reducer from './reducer'

const init = {
    user: { },
    cart: [],
    isHeaderOpen: true,
    catalog: []
}

const StateContext = createContext()

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, init)
    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    )

}

export default Store
export {StateContext}