import { useContext } from "react";
import UserContext from "./context.jsx";
function Shore()
{
 const sea = useContext(UserContext);
 return (
  <h1>{sea}</h1>
 );
}
export default Shore;