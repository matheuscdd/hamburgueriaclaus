import styled from 'styled-components';

export const ListProductsStyles = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    animation: gotToRight 1s ease forwards;

    @media(max-width: 900px) {
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        height: 400px;
        align-items: center;
        overflow-x: scroll;
        ::-webkit-scrollbar-thumb {   
            border-radius: 40px;
        }

        ::-webkit-scrollbar {
            width: 100px;
        }
        overflow-y: hidden;
    }
`;