import styled from "styled-components";

const Container = styled.div`
    text-align:center;
`;

const Loading = (props) => {
    const { message } = props;
    const loadingMessage = message ? message : "Cargando...";

    return <Container>{loadingMessage}</Container>;
};

export default Loading;