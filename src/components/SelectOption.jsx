import styled from "styled-components";
import { mobile } from "../responsive";

const Select = styled.select`
    border: none;
    box-shadow: inset  2px 2px 4px rgba(0,0,0,0.6);
    background-color: #ED6A5E;
    border-radius: 5px;
    color: white;
    padding: 10px;
    margin-right: 20px;
    height: 40px;
    width: 135px;
    ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const SelectOption = (props) => {
    const { opciones, setOrden } = props;

    return (
        <Select onChange={(event) => { setOrden(event.target.value); }} >
            {opciones.map((opcion) => (
                <Option key={opcion}>{opcion}</Option>
            ))}
        </Select>
        
    );
};

export default SelectOption;