function categoriasIdades(idade){
    idade = 9

if(idade === 5 || idade === 6 || idade === 7){
    return 'Infantil A'
}
else if(idade === 8 || idade === 9 || idade === 10){
    return 'Infantil B'
}
else if(idade === 11 || idade === 12 || idade === 13){
    return 'Juvenil A'
}
else if(idade === 14 || idade === 15 || idade === 16 || idade === 17){
    return 'Juvenil B'
}
else if(idade < 5){
    return 'Não a classificação para essa idade'
}
else{
    return 'Adulto'
} 
}

module.exports = categoriasIdades