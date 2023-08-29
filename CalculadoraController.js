import CalculadoraModel from "./CalculadoraModel";
import CalculadoraView from "./CalculadoraView";
import { useState } from "react";

const CalculadoraController = () => {
    const [calcModel,setModel] = useState(new CalculadoraModel())

    const atualizarOperando = (operando, valor) => {
        setCalcModel(prevModel => ({
            ...prevModel,[operando]:valor
        }))
    }

    const selecionarOperacao = (operacao) => {
        setCalcModel(prevModel => ({
            ...prevModel,operacao: operacao
        }))
    }
    const realizarCalculo = () => {
        setCalcModel(prevModel => {
            const novaModel = {...prevModel}
            novaModel.realizarCalculo()
            return novaModel
        })
    }

    const limpar = () => {
        setCalcModel(prevModel => ({
            ...prevModel,
        num1: '',
        num2: '',
        operacao: null,
        resultado: 0


        }))
    }

    return (
        <CalculadoraView 
        num1 = {calcModel.num1}
        num2 = {calcModel.num2}
        arualizarOperando = {atualizarOperando}
        selecionarOperacao = {selecionarOperacao}
        realizarCalculo = {realizarCalculo}
        limpar = {limpar}
        resultado = {calcModel.resultado}
        />

    )
}
export default CalculadoraController