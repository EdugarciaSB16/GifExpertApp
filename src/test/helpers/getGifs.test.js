import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en el componente getGifs', () => {

    test('Debe de retornar la llamada a la api', async () => {

        const gifs = await getGifs('Goku')
        expect(gifs.length).toBe(10)
    })

    test('Debe de retornar la llamada a la api', async () => {

        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })

})