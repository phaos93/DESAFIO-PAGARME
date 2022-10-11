export class Payable {
    id: number;
    status: string;
    data_pagamento: Date;
    transacao_id: number;

    constructor(status: string, data_pagamento: Date, transacao_id: number) {
        this.status = status;
        this.data_pagamento = data_pagamento;
        this.transacao_id = transacao_id;
    }
}