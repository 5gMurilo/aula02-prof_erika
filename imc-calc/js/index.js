function calcularIMC(event) {
    event.preventDefault();

    const size = parseFloat(document.getElementById("size").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    
    const calc = weight/(size*size);

    let result = document.getElementById("result");

    result.className = "result"
    
    if (calc < 17) {
        result.textContent = `Seu IMC É DE ${calc.toFixed(2)} - VOCÊ ESTÁ MUITO ABAIXO DO PESO`
    } else if (calc >= 17 && calc <= 18.49) { 
        result.textContent = `Seu IMC É DE ${calc.toFixed(2)} - VOCÊ ESTA ABAIXO DO PESO`
    } else if (calc >= 18.5 && calc <= 24.99) { 
        result.textContent = `Seu IMC É DE ${calc.toFixed(2)} - VOCÊ ESTA NO PESO NORMAL`
    }else if (calc >= 25 && calc <= 29.99) { 
        result.textContent = `Seu IMC É DE ${calc.toFixed(2)} - VOCÊ ESTA ACIMA DO PESO`
    }else if (calc >= 30 && calc <= 34.99) { 
        result.textContent = `Seu IMC É DE ${calc.toFixed(2)} - OBESIDADE GRAU 1`
    }
}

