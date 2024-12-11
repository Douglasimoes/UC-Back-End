// Importanto o Joi (validação)
import Joi from "joi";

// Validação para inclusão de modelo carro
export const modeloCarro = Joi.object({
    nome: Joi.string() .min(3) .required() .messages({
        'string.min' : 'O nome do carro de ter pelo menos 3 caracteres',
        'any.required' : 'O nome do carro é Obrigatorio',
    }), // nome do carro, min. 3 caracteres
    sigla: Joi.string() .length(3) .required() .messages({ // sigla do carro, min. 3 caracteres
        'string.length' : 'A sigla deve ter exatamente 3 caracteres',
        'any.required' : 'A sigla é obrigatoria',
    }), //sigla do carro, 3 caracter
    potencia: Joi.number() .min(1) .required() .messages({ // potencia min. de 3 cv
        'number.min' : 'A potencia deve ser maior ou igual a 1',
        'any.required' : 'A potencia é obrigatorio'
    }), //Potencia min. de 1 CV
    velocidademaxima : Joi.number() .min(1) .required() .messages({ // velocidade min. de 1
        'number.min' : 'A velocidade maxima deve ser maior ou igual a 1',
        'any.required' : 'A velocidade máxima é obrigatória',
    }), //Velocidade min. de 1
    consumo : Joi.number() .min(0.1) .required() .messages({
        'number.min' : 'O consumo deve ser maior ou igual a 0.1',
        'any.required': 'O consumo é obrigatório'
    }), // consumo min. de 1
    aceleracao : Joi.number() .min(0) .required() .messages({
        'number.min' : 'A aceleração deve ser maior ou igual a 0',
        'any.required' : 'A aceleração é obrigatória',
    }), // aceleração min. de 0
    preco : Joi.number() .min(0) .required() .messages({
        'number.min' : 'O preço deve ser maior ou igual a 1',
        'any.required' : 'O preço é obrigatório',
    }) // preço min. de 0
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