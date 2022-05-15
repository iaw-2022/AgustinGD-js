import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import { ORDER_LIST_PATH } from "../utils/Constants";
import { useAuth0 } from '@auth0/auth0-react';


const Container = styled.div`
    height: 40px;
    width: 135px;
    ${mobile({ height: "31px" })}
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

    return (
        <Container>
            <Select value={username} >
                {options.map((option) => (
                    <>
                        {handleOptions(option, logout, navigate, username)}
                    </>
                ))}
            </Select>
        </Container>

    );
};

export default ProfileDropDown;

const handleOptions = (option, logout, navigate, username) => {
    switch (option.type) {
        case USERNAME_TYPE:
            return (
                <Option
                    hidden
                    key={option.id}
                >
                    {username}
                </Option>);
        case PATH_TYPE:
            return (
                <Option
                    key={option.id}
                    onClick={() => goToPath(option.path, navigate)}
                >
                    {option.title}
                </Option>);
        case LOGOUT_TYPE:
            return (
                <Option
                    key={option.id}
                    onClick={() => logout()}
                >
                    {option.title}
                </Option>);
        default:
            break;
    }
}

const goToPath = (path, navigate) => {
    navigate(path, { replace: true });
}

const USERNAME_TYPE = 0;
const PATH_TYPE = 1;
const LOGOUT_TYPE = 2;

const options = [
    {
        id: 0,
        title: "",
        type: USERNAME_TYPE,
    },
    {
        id: 1,
        title: "Mis Pedidos",
        type: PATH_TYPE,
        path: ORDER_LIST_PATH,
    },
    {
        id: 2,
        title: "Cerrar Sesion",
        type: LOGOUT_TYPE,
    },
];