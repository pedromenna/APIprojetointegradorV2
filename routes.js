import { Router } from "express"
import { usuarioAlteraSenha, usuarioCreate, usuarioIndex } from "./controllers/usuarioController.js"
import { loginUsuario } from "./controllers/loginController.js"
import { verificaLogin } from "./middlewares/verificaLogin.js"

const router = Router()

router.get('/usuarios', verificaLogin, usuarioIndex)
      .post('/usuarios', usuarioCreate)
      .put('/usuarios', usuarioAlteraSenha)
         
router.get('/login', loginUsuario)

export default router