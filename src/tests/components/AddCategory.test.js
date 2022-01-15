import {shallow} from 'enzyme'
import { AddCategory } from '../../components/AddCategory'


describe('Tests on <AddCategory />', () => {
    
    //const setCategories = () => {}
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should change textbox', () => {
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('change', {
            target: {
                value
            }
        })
    })

    test('should not submit form', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategories).not.toHaveBeenCalled()
    })
    
    test('should call setCategories and clean textbox', () => {
        
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('change', {
            target: {
                value
            }
        })
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategories).toHaveBeenCalled()
        expect(input.prop('value')).toBe('')
    })
    
    


})

