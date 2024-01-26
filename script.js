// // Tratando uma exceção
// try {
//     console.log(naoExisto);
// } catch (error) {
//     console.log("naoExisto não existe");
// }

// // Criando uma exceção
// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error("Tem que ser dois números, animal");
//     }

//     return x + y;
// }

// try {
//     console.log(soma("A", 3)); 
// } catch (error) {
//     console.log(error.message);
// }


//try é executado quando nao ha erros 
//catch é executado quando ha erros
//finally é executado sempre


function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Espero uma data");
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-br", {});
}

try {
    const data = new Date ('12:58:46');
    const hora = retornaHora();
    console.log(data)
    console.log(hora);
} catch (error) {
    console.log(error.message);
}
