type Conta = {
id: number;
titular: string;
numerodacontas: string;
saldo: number;}

function criarConta
(id: number, titular: string, numerodacontas: string, saldo: number):  Conta {
    return {id, titular, numerodacontas, saldo};
}

function depositar(conta: Conta, valor: number): Conta {
    return {...conta, saldo: conta.saldo + valor};
}

function sacar(conta: Conta, valor: number): Conta {
    if (valor > conta.saldo) {
        throw new Error("Saldo insuficiente");
    }
    return {...conta, saldo: conta.saldo - valor};
}
function verSaldo(conta: Conta): number {
    return conta.saldo;
}

const conta1 = criarConta(1, "João Silva", "1111", 0);

const conta2 = depositar(conta1, 500);

const conta3 = sacar(conta2, 200);

console.log(`Saldo atual da conta de ${conta3.titular}: R$ ${verSaldo(conta3)}`);




