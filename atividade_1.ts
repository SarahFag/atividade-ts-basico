const nome:string = "Maria";
const idade:number = 30;
const altura:number = 1.75;
const estudante:boolean = true;

// FUNÇÕES 
function verificaParImpar(n:number):string  {
	if (n % 2 === 0) {
		return "par"
	} else {
		return "ímpar";
	}
}

function somatorio(n: number): number {
	let acc = 0;
	for (let i = 0; i <= n; i++) {
		acc += i;
	}
	return acc;
}

function fibonacci(n:number) {
	const array = [ 0, 1 ]
    for (let i = 2; i <= n; i++) {
        array[i] = array[ i-1 ] + array[ i-2 ]
    }
	return array[n];
}

class Retangulo {
  constructor(private largura: number, private altura: number) {}

  area(): number {
    return this.largura * this.altura;
  }

  perimetro(): number {
    return 2 * (this.largura + this.altura);
  }
};

export { nome, idade, altura, estudante }
export { fibonacci, somatorio, verificaParImpar, Retangulo }