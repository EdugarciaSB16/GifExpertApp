import React from 'react'
import GifGridItem from '../../components/GifGridItem'
import { shallow } from 'enzyme'

describe('Pruebas al componente GifGridItem', () => {
    
    const title = 'titulo'
    const url = 'https://ejemplo.jpg'
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>)

    test('Debe de renderizar el componente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe de tener un parrafo con title', () => {

        const parrafo = wrapper.find('span')
        expect( parrafo.text().trim() ).toBe( title )

    })  

    test('Debe de tener una imagen con su alt', () => {

        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
    })

    test('Debe de tener las clases animate', () => {

        const div = wrapper.find('.card')
        const className = div.prop('className')
        expect(className.includes('animate__fadeInDo')).toBe(true)
    })
})