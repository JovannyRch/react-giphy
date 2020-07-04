import React, { useState } from 'react'

export const AddCategory = (props) => {

    const { addCategory } = props;

    const [inputData, setInputData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputData) {
            //Guardar en el arreglo de categorias
            addCategory(inputData);
            setInputData('');
        }
    }


    const handleChange = (e) => {
        setInputData(e.target.value);
    };


    return (
        < form onSubmit={handleSubmit}>
            <input value={inputData} onChange={handleChange} />
            <button type="submit" onClick={() => { }} >Agregar nueva categoria</button>
        </ form>
    )
}
