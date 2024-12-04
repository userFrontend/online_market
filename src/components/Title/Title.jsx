import { Icons } from "../../utils/icons"
import "./Title.scss"

const Title = ({children}) => {
  return (
    <h1 className="Title"><Icons.roseLeft/>{children}<Icons.roseRight/></h1>
  )
}

export default Title