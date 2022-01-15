import { shallow } from 'enzyme'
import { GifApp } from '../GifApp'

describe('tests on <GifApp />', () => {
    

    test('should match snapshot', () => {
        const wrapper = shallow(<GifApp />)
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should list category', () => {
        const categories = ['saitama', 'tanjiro']
        const wrapper = shallow(<GifApp defaultCategories={categories} />)

        expect(wrapper.find('GifGrid').length).toBe(categories.length)

    })
    

})
