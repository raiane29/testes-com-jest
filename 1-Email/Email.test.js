const verificarEmail = require('./Email');

describe('Teste de verificação de email', () => {
    test('Verifica se o email é valido', () => {
        expect(verificarEmail(true)).toBe(true)
   })
})
