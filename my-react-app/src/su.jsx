import AgeContext from "./cont.js";
import Recieve from "./rec.jsx"

function Variant()
{            
  
  return (
    <AgeContext.Provider value="Snooky">
        <Recieve></Recieve>
    </AgeContext.Provider>
  );
}
export default Variant;