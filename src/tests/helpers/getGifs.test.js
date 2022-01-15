import { getGifs } from "../../helpers/getGifs"


describe('Tests on getGifs Fetch', () => {
    
    test('should bring 10 elements', async () => {
        const gifs = await getGifs('Demon Slayer')
        expect(gifs.length).toBe(10)
    })
    
    test('should bring empty', async () => {
        const gifs = await getGifs('')

        expect(gifs.length).toBe(0)
    })
    

})


