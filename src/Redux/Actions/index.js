export const SOLICITAR_CIUDAD = "SOLICITAR_CIUDAD";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

export const solicitarCiudad = (ciudad) => {
  console.log("llegue", ciudad);
  return async function (dispatch) {
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((respuesta) => respuesta.json())
      .then((res) => {
        if (res.main === undefined) throw Error();
        else {
          dispatch({
            type: SOLICITAR_CIUDAD,
            payload: res,
          });
        }
      })

      .catch((err) => alert("ciudad no encontrada"));
  };
};
