import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Transaction extends Model<Transaction> {

    @Column({
        type: DataType.DECIMAL(20, 2),
        allowNull: false,
    })
    valor: number;
    @Column({
        type: DataType.STRING(120),
        allowNull: false,
    })
    descricao: string;
    @Column({
        type: DataType.STRING(15),
        allowNull: false,
    })
    metodo_pagamento: string;
    @Column({
        type: DataType.STRING(16),
        allowNull: false,
    })
    numero_cartao: string;
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    nome_cartao: string;
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    data_validade: Date;
    @Column({
        type: DataType.STRING(3),
        allowNull: false,
    })
    codigo_CVV: string;
}