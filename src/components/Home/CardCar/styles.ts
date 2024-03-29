import styled from 'styled-components';

export const CardStyle = styled.li`
    display: flex;
    justify-content: space-between;
    transition: 0.8s;
    background-color: transparent;
    border-radius: var(--radius-2);
    border: 2px solid transparent;
    box-sizing: border-box;
    padding: 10px;

    :hover {
        border-color:  var(--color-primary);
        background-color: var(--white-0);   
    }

    picture {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        min-width: 80px;
        min-height: 80px;
        background-color: var(--gray-20);
        border-radius: var(--radius-2);
        margin-right: 10px;
    }

    img {
        object-fit: cover;
        max-width: 90%;
        max-height: 90%;
        filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.3));
    }

    h4 {
        font-weight: var(--font-weight-4);
        color: var(--gray-100);
        font-size: 14px;
        margin-top: 10px;
    }

    legend {
        font-weight: var(--font-weight-1);
        color: var(--gray-50);
        font-size: 12px;
    }

    > div {
        display: flex;

        > div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            

            small {
                max-width: 40px;
                border-radius: var(--radius-2);
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 13px;
                border: 2px solid #f2f2f2;

                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    padding: 2px;
                    border: none;
                    background-color: #f2f2f2;
                    color: #EB5757;
                }
            }
        }
    }

`;

 