import React, {useState} from 'react';
import styled from '@emotion/styled';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1pk solid #e1e1e1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: backound-color .3s ease; 
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;


const Form = () => {
    const years = Array.from(Array(10), (_, i) => i + 1);

    const [data, setData] = useState({
        brand: '', year: '', plan: ''
    });

    const handleChange = e => {
        setData({
            ...data, [e.target.name]: e.target.value
        });
    }

    return ( 
        <form>
            <Field>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={data.brand}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccionar --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={data.year}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccionar --</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value='basic'
                    checked={data.plan === 'basic'}
                    onChange={handleChange}
                />Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value='full'
                    checked={data.plan === 'full'}
                    onChange={handleChange}
                    />Completo
            </Field>
            <Button type='button'>Cotizar</Button>
        </form>
     );
}
 
export default Form;