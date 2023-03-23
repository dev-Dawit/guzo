import { BreadCrumbSection } from "../../../components/breadCrumb/breadCrumb"
import  CardList  from "../../../components/card-list/card-list.component"


const Destination = () => {
  return (
    <div>
      < BreadCrumbSection separator={'/'} /> 
      <CardList />
    </div>
  )
}

export default Destination