import { ActivityContext } from "../context/activityContext"
import { useContext } from "react"

export const useActivityContext = () => {
  const context = useContext(ActivityContext)

  if(!context) {
    throw Error('useActivityContext must be used inside an ActivityContextProvider')
  }

  return context
}