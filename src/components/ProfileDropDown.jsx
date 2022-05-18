import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import { ORDER_LIST_PATH } from "../utils/Constants";
import { useAuth0 } from '@auth0/auth0-react';


const Container = styled.div`
    height: 40px;
    width: 135px;
    ${mobile({ height: "32px" })}
`;

const Option = styled.option``;

const Select = styled.select`
    border: none;
    background-color: transparent;
    border-radius: 5px;
    color: black;
    padding: 10px;
    margin-right: 20px;    
    height: 100%;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    cursor: pointer;
    text-align-last: end;
    
    &:hover{
        text-decoration: underline;
    }

    ${mobile({ fontSize: "12px" })}
`;


const ProfileDropDown = () => {
    const { logout, user } = useAuth0();
    const navigate = useNavigate();
    const username = user.name.split(' ').shift().toUpperCase();
    USERNAME_OPTION.title = username;

    return (
        <Container>
            <Select
                value={USERNAME_OPTION.value}
                onChange={(event) => { handleChange(event, navigate, logout) }}
            >
                {options.map((option) => (
                    <>
                        {makeOption(option)}
                    </>
                ))}
            </Select>
        </Container>

    );
};

export default ProfileDropDown;

const handleChange = (event, navigate, logout) => {
    const selectedValue = parseInt(event.target.value);

    switch (selectedValue) {
        case USERNAME_OPTION.value:
            break;
        case ORDERS_LIST_OPTION.value:
            goToPath(ORDER_LIST_PATH, navigate);
            break;
        case LOGOUT_OPTION.value:
            logout();
            break;
        default:
            break;
    };
}

const goToPath = (path, navigate) => {
    navigate(path, { replace: true });
}

const makeOption = (option) => {
    switch (option.value) {
        case USERNAME_OPTION.value:
            return makeHidden(option);
        default:
            return makeDefault(option);
    }
}

const makeHidden = (option) => {
    return (
        <Option
            hidden
            value={option.value}
            key={option.id}
        >
            {option.title}
        </Option>);
}

const makeDefault = (option) => {
    return (
        <Option
            value={option.value}
            key={option.id}
        >
            {option.title}
        </Option>);
}

let USERNAME_OPTION = {
    id: 0,
    value: 0,
    title: "",
};

const ORDERS_LIST_OPTION = {
    id: 1,
    value: 1,
    title: "Mis Pedidos",
};

const LOGOUT_OPTION = {
    id: 2,
    value: 2,
    title: "Cerrar Sesión",
};

const options = [
    USERNAME_OPTION,
    ORDERS_LIST_OPTION,
    LOGOUT_OPTION,
];