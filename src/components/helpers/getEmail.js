const { jwtDecode } = require("jwt-decode");

function getEmail(){
    const token = localStorage.getItem("token")
    if(token){
        const decodedToken = jwtDecode(token)
        const correo = decodedToken.email
        return correo
    } else {
        console.error("No ha iniciado sesión")
    }
}

export {getEmail}

