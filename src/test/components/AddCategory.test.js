import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import React from 'react'


describe('Pruebas en el componente AddCategory', () => {

    const setCategories = () => {}

    test('Debe de retornar la categoria', () => {
        const wrapper = shallow(<AddCategory setCategories={ setCategories } />)
        expect( wrapper ).toMatchSnapshot()
    })

})