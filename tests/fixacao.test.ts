import {fixacao} from "../src/fixacao"

describe("Testar o arquivo fixacao.ts", () =>{
    test("A função deve separar a palavra enviada em letras", () =>{
        const n = "dev"
        const result = fixacao(n)
        const resultadoEsperado = ["d", "e", "v"]
        expect(result).toEqual(resultadoEsperado)
    })
})