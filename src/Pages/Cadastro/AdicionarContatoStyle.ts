
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    margin: auto;
`;

export const Titulo = styled.h1`
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    top: 10px;
    left: 10px;
    transition: 0.2s ease all;
    color: #aaa;
    margin-top: 8px;
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    font-size: 16px;
    &:focus {
        border-color: #007BFF;
        outline: none;
    }

`;
export const Botao = styled.button`
    padding: 12px;
    background-color: #44bd32;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 8px;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0056b3;
    }
`;



export const Circulo = styled(Link)`
height: 64px; 
width: 54px;
background-color: #44bd32;
color: #fff;
position: fixed;
bottom: 40px;
right: 40px;
padding-bottom: 8px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size: 50px;
text-decoration: none;
`