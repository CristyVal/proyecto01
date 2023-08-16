const express = require("express");
const Controller = require("./controller")

const router = express.Router();

function addUser(req, res) {
    const { auth } = req;
    const {
        email,
        password,
        displayName
    } = req.body;

    Controller.addUser({
        auth,
        email,
        password,
        displayName
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))

}

function getUser(req, res){
    const { auth } = req;
    const { email } = req.body;

    Controller.getUser({
        auth,
        email
    })
    .then((resuly) => res.send(result))
    .catch((error) => res.send(error))
}

function updateUser(req, res) { //Actualizar 
    const { auth } = req;
    const {
        email,
        displayName,
        newPassword
    } = req.body;

    Controller.updateUser({
        auth,
        email,
        displayName,
        newPassword
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))
}

function deleteUser(req, res) { //eliminar
    const { auth } = req;
    const { email } =req.body;

    Controller.deleteUser({
        auth,
        email
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))
}

// /users post agregar
// /users pacth actualizar
// /user deldete eliminar
// /users get obtener

router.post("/", addUser)
router.get("/get-user", getUser)
router.pacth("/", updateUser) 
router.delete("/", deleteUser)



module.exports = router