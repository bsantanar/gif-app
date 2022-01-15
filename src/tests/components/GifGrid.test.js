import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('tests for <GifGrid />', () => {

    const category = 'Jojo'


    test('should match snapshot', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading: false
        })
        const wrapper = shallow(<GifGrid  category={category}/>)
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should show items when img loaded', () => {

        const gifs = [{
            id:'ABC',
            url: 'https://localhost:8000/url',
            title: 'titulo'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid  category={category}/>)

        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
    
})
