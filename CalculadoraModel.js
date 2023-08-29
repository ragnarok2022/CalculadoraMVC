class CalculadoraModel {
    constructor() {
        this.num1 = ''
        this.num2 = ''
        this.operacao = null
        this.resultado = null
    }

    atualizarOperando(operando, valor) {
        this[operando] = valor
    }

    selecionarOperacao(operacao) {
        this.operacao = operacao
    }

    calculoRealizado() {
        const num1 = parseInt(this.num1)
        const num2 = parseInt(this.num2)

        switch (this.operacao) {
            case '+':
                this.resultado = num1 + num2
                break
            case '-':
                this.resultado = num1 - num2
                break
            case '*':
                this.resultado = num1 * num2
                break
            case '/':
                if (num2 == 0) {
                    this.resultado = 'Não há divisão por zero'
                } else {
                    this.resultado = num1 / num2
                }
                break
            default:
            this.resultado = 0

        }

    }
    limpar(){
        this.num1 = ''
        this.num2 = ''
        this.operacao = null
        this.resultado = null
    }
}
export default CalculadoraModel