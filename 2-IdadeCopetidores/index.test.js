const categoriasIdades = require('./index');
describe('Teste de Função', () => {
  test('Verifica se a função retorna "Infantil A"', () => {
    expect(categoriasIdades()).toBe('Infantil A')
   })
})
describe('Teste de Função', () => {
  test('Verifica se a função retorna "Infantil B"', () => {
    expect(categoriasIdades()).toBe('Infantil B')
   })
})
describe('Teste de Função', () => {
  test('Verifica se a função retorna "Juvenil A"', () => {
    expect(categoriasIdades()).toBe('Juvenil A')
   })
})
describe('Teste de Função', () => {
  test('Verifica se a função retorna "Juvenil B"', () => {
    expect(categoriasIdades()).toBe('Juvenil B')
   })
})
describe('Teste de Função', () => {
  test('Verifica se a função retorna "Adulto"', () => {
    expect(categoriasIdades()).toBe('Adulto')
   })
})
describe('Teste de Função', () => {
  test('Verifica se a função retorna "Não a classificação para essa idade"', () => {
    expect(categoriasIdades()).toBe('Não a classificação para essa idade')
   })
})