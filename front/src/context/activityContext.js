import { createContext, useReducer } from 'react'

export const ActivityContext = createContext()

export const activityReducer = (state, action) => {
  switch (action.type) {
    case 'Activity':
      console.log(action.payload)
      return { coursID: action.payload }
    default:
      return state
  }
}



export const ActivityContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(activityReducer, { 
    coursID: null
  })
  
  console.log('activityContext state:', state)
  
  return (
    <ActivityContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ActivityContext.Provider>
  )
}