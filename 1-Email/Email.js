function verificarEmail(email){
    email = `aluno@email.sesi.com`
    const Regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    return Regex.test(email)

}
module.exports = verificarEmail