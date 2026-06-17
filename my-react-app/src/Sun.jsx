import UserContext from "./context.jsx";
import Recieve from "./recieve.jsx"

function Variant()
{            
  
  return (
    <UserContext.Provider value="Sivani">
        <Recieve></Recieve>
    </UserContext.Provider>
  );
}
export default Variant;