import { Router } from "express";


// Inicializa o router
const routes = Router();

// Rota para verificar se o servidor está rodando
routes.get("/", (request, response) => {
    return response.status(200).json({ message: "Hello World"});
});

routes.get("/number", (request, response) => {
    const randomNumber = Math.floor(Math.random() * 100)
    return response.status(200).json( randomNumber );
});

routes.get("/fibonacci/:quantidade", (request, response) => {

    const quantidade = Number(request.params.quantidade);

    const fibonacci: number[] = [];

    for (let i = 0; i < quantidade; i++) {

        if (i < 2) {
            fibonacci.push(i);
        } else {
            const proximo = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(proximo);
        }

    }

    return response.json(fibonacci);
});

routes.get("/fatorial/:numero", (request, response) => {

    const numero = Number(request.params.numero);

    let resultado = 1;

    for (let i = numero; i >= 1; i--) {
        resultado = resultado * i;
    }

    return response.json(resultado);
});

export default routes;