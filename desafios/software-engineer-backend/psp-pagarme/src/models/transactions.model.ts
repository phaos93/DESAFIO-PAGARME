export class Transaction {
    id: number;
    valor: number;
    descricao: string;
    metodo_pagamento: string;
    numero_cartao: string;
    nome_cartao: string;
    data_validade: Date;
    codigo_CVV: string;

    constructor(valor: number, descricao: string, metodo_pagamento: string, numero_cartao: string, nome_cartao: string, data_validade: Date, codigo_CVV: string) {
        this.valor = valor;
        this.descricao = descricao;
        this.metodo_pagamento = metodo_pagamento;
        this.numero_cartao = numero_cartao;
        this.nome_cartao = nome_cartao;
        this.data_validade = data_validade;
        this.codigo_CVV = codigo_CVV;
    }
}