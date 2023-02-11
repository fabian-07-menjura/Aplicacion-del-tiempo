import { SOLICITAR_CIUDAD } from "../Actions";

const inicialState = {
  city: [],
};

function rooReducer(state = inicialState, action) {
  switch (action.type) {
    case SOLICITAR_CIUDAD:
      return {
        ...state,
        city: [action.payload],
      };
    case "SE_ELIMINO_TARGETA":
      return {
        ...state,
        city: action.payload,
      };

    default:
      return { ...state };
  }
}
export default rooReducer;
