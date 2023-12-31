import { useContext } from "react"
import ReactFlowContext from "../contexts/ReactFlowContext"

export const useReactFlowFunctions = () => {
    const context = useContext(ReactFlowContext)

    if (context === undefined) {
        throw new Error("useReactFlowFunctions must be used within a ReactFlowProvider")
    }

    return context
}
