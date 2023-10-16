import bcrypt from 'bcrypt'

const senha = "tela123"

console.time("tempo")
const salt = bcrypt.genSaltSync(12)
const hash = bcrypt.hashSync(senha, salt)
console.timeEnd("tempo")

const verifica = await bcrypt.compare("tela123", hash)

const msg = verifica ? "Ok! Senha correta" : "Erro... Incorreto"

console.log(msg)

console.log(senha)
console.log(salt)
console.log(hash)