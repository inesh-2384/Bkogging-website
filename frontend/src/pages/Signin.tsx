import { Auth } from "../Components/Auth"
import { Quote } from "../Components/Quote"


export const Signin = () => {
  return (
   <div className="grid grid-cols-1 lg:grid-cols-2">
    <div>
      <Auth type={"signin"}></Auth>
    </div>
    <div className="hidden lg:block">
    <Quote ></Quote>
    </div>
   </div>
  )
}
