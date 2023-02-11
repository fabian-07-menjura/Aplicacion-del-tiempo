import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../src/Redux/Actions";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Cargando from "./components/Cargando";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.city);

  const solicitarCiudad = (city) => {
    dispatch(actions.solicitarCiudad(city));
  };

  var onClose = (id) => {
    let newArray = info.filter((e) => e.id !== id);
    console.log(newArray);
    dispatch({ type: "SE_ELIMINO_TARGETA", payload: newArray });
  };

  return (
    <div>
      <Navbar solicitarCiudad={solicitarCiudad}></Navbar>
      {info.length ? (
        <Cards cities={info} onClose={onClose}></Cards>
      ) : (
        <Cargando></Cargando>
      )}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#12c1db"
          fill-opacity="1"
          d="M0,64L40,74.7C80,85,160,107,240,128C320,149,400,171,480,165.3C560,160,640,128,720,122.7C800,117,880,139,960,154.7C1040,171,1120,181,1200,160C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <Footer></Footer>
    </div>
  );
}

export default App;
