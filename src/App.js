import { BrowserRouter,Route,Routes} from "react-router-dom";
import Carrousel from "./components/carrousel";
import CarrouselState from "./context/CarrouselState";
import "./css/estilos.css";
const App = () => {

    return ( 

        <BrowserRouter>
        <CarrouselState>
            <Routes>
                <Route path="/" element={<Carrousel/>}/>
            </Routes>
            </CarrouselState>
        </BrowserRouter>
     );
}
 
export default App;