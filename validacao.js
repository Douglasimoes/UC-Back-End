// Importanto o Joi (validação)
import Joi from "joi";

// Validação para inclusão de modelo carro
export const modeloCarro = Joi.object({
    nome: Joi.string() .min(3) .required(), // nome do carro, min. 3 caracteres
    sigla: Joi.string() .length(3) .required(), // sigla do carro, min. 3 caracteres
    potencia: Joi.number() .min(1) .required(), // potencia min. de 3 cv
    velocidademaxima: Joi.number() .min(1) .required(), // velocidade min. de 1
    consumo: Joi.number() .min(0.1) .required(), // consumo min. de 1
    aceleracao: Joi.number() .min(0) .required(), // aceleração min. de 0
    preco: Joi.number() .min(0) .required(), // preço min. de 0
});

// validacao para atualizacao do carro
export const modeloAtualizacaoCarro = Joi.object({
    nome: Joi.string() .min(3), // nome do carro, opcional
    sigla: Joi.string() .length(3), // sigla do carro, opcional
    potencia: Joi.number() .min(1), // potencia, opcional
    velocidademaxima:  Joi.number() .min(1), // velocidade maxima, opcional
    consumo: Joi.number() .min(0.1), // consumo, opcional
    aceleracao: Joi.number() .min(0), // aceleracao, opcional
    preco: Joi.number() .min(0), // preço, opcional
    // ano: joi.number() .interger() .min(1886) .max(new date() .getfullyear ()), // inserindo o ano minimo do carro e o maximo, sendo que o maximo é até o ano atual
}) .min(1); // Pelo menos um campo precisa ser atualizado