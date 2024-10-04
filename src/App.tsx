import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Toaster } from "sonner";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Routes />
            <Toaster richColors position="top-center" duration={6000} />
         </BrowserRouter>
      </div>
   );
}

export default App;
