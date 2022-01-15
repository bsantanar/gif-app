import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'


describe('tests on hook useFetchGifs', () => {
    

    test('should show initial state', async() => {
        // const {data, loading} = useFetchGifs('saitama')

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Saitama'))
        const {data, loading} = result.current

        await waitForNextUpdate()

        expect(data).toEqual([])
        expect(loading).toBeTruthy()
    })

    test('should return arrays and loading false', async () => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Saitama'))
        await waitForNextUpdate()
        const {data, loading} = result.current
        
        expect(data.length).toEqual(10)
        expect(loading).toBeFalsy()
    })
    
    
})
