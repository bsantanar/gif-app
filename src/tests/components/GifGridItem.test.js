import React from 'react';

import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Title'
    const url = 'http://localhost:8000'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)
    
    test('should show component', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should contains title', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })
    
    test('should contain img with url and alt', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    
    test('should ', () => {
        const div = wrapper.find('div')

        expect(div.hasClass('animate__fadeInUp')).toBe(true)
    })
    

})

