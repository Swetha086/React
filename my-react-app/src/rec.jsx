import { useContext } from "react";
import AgeContext from "./cont.jsx";
function Five()
{
 const star = useContext(AgeContext);
 return (
  <h1>{star}</h1>
 );
}
export default Five;