import styled from "styled-components";
import { mobile } from "../responsive";

const Select = styled.select`
    border-color: #ED6A5E;
    background-color: #ED6A5E;
    border-radius: 5px;
    color: white;
    padding: 10px;
    margin-right: 20px;
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