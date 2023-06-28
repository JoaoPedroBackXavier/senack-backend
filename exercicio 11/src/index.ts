enum setor {
    MA = "marketing",
    VE = "vendas",
    FI = "finaceiro"
}

type pessoa = {
    nome: string
    salário: number
    setor: string
    presencial: boolean
}

let array:pessoa = [
	{ nome: "Marcos", salário: 2500, setor: setor.MA, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setor.VE, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setor.FI, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setor.MA, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setor.FI, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setor.VE, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setor.MA, presencial: true }
]