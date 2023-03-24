import { createContext, useReducer, useEffect } from 'react'

export const ActivityContext = createContext()

export const activityReducer = (state, action) => {
  switch (action.type) {
    case 'Activity':
      return { coursID: action.payload }
    default:
      return state
  }
}

export const ActivityContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(activityReducer, { 
    coursID: null
  })

  useEffect(() => {
    const coursID = JSON.parse(localStorage.getItem('coursID'))
  
    if (coursID) {
      dispatch({ type: 'Activity', payload: coursID }) 
    }
  }, [])

  console.log('AuthActivity state:', state)
  return (
    <ActivityContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ActivityContext.Provider>
  )
}