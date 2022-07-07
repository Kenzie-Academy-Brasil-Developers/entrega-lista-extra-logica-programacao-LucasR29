function calculateSalary(salary, sales){
    let basicCommission = 0
    let largeCommission = 0
    if(sales > 1200){
        largeCommission = (sales - 1200) * 0.05
        basicCommission = 1200 * 0.03
    }else{
        basicCommission = sales * 0.03
    }
    return (salary + largeCommission + basicCommission)
}

//console.log(calculateSalary(1000, 2000))

function cashMachine(cashOut, salary, sales){
    salary = calculateSalary(salary, sales)
    console.log(salary)
    let cem = 0
    let cinquenta = 0
    let vinte = 0
    let dez = 0
    let cinco = 0
    let dois = 0
    let rest = salary - cashOut
    if(cashOut <= salary){
        if(cashOut%5 == 0 || cashOut %2 == 0 || (cashOut-7)%2 == 0 || (cashOut-7)%5 == 0){
            cem = parseInt(cashOut/100)
            cinquenta = parseInt(( cashOut - cem * 100) / 50)
            vinte = parseInt(((cashOut - cem * 100) - cinquenta * 50)/20)
            dez = parseInt((((cashOut - cem * 100) - cinquenta * 50) - vinte*20)/10)
            if(((((cashOut - cem * 100) - cinquenta * 50) - vinte*20) - dez * 10)%5 == 0){
                cinco = parseInt(((((cashOut - cem * 100) - cinquenta * 50) - vinte*20) - dez * 10)/5)
            }else if(((((cashOut - cem * 100) - cinquenta * 50) - vinte*20) - dez * 10)%2 == 0){
                dois = parseInt((((((cashOut - cem * 100) - cinquenta * 50) - vinte*20) - dez * 10) - cinco * 5)/2)
            }else{
                cinco = parseInt(((((cashOut - cem * 100) - cinquenta * 50) - vinte*20) - dez * 10)/5)
                dois = parseInt((((((cashOut - cem * 100) - cinquenta * 50) - vinte*20) - dez * 10) - cinco * 5)/2)
            }
            
        }else{
            return `Cedulas indisponivéis para o valor solicitado`
        }
    }else{
        return `Saldo insuficiente`
    }
    return `${cem} notas de cem ${cinquenta} notas de cinquenta ${vinte} notas de vinte ${dez} notas de dez ${cinco} notas de cinco ${dois} notas de dois. Sobrando ${rest}`
}

cashMachine(1000, 1200, 1000)

function calculateStock(atual, max, min){
    let medium = (max+min)/ 2
    let retorno = ''
    atual >= medium ? retorno = `Não efetuar compra` : retorno = `Efetuar Compra`
    return retorno
}

function calculateAge(birth, year){
    let age = year - birth
    let ageMounth = age*12
    let ageDays = ageMounth*30
    let ageWeeks = age*52
    return `Você tem ${age} anos ou ${ageMounth} meses ou ${ageWeeks} semanas ou ${ageDays} dias`
}

function getDiagonal(array){
    let diagonal = []
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(j == i){
                diagonal.push(array[i][j])
            }
        }
    }
    return diagonal
}



