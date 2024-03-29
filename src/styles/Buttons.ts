import { css } from 'styled-components';

export const Buttons = css`
    .btnBig, .btnMed, .btnSmall {
        display: block;
        border: none;
        transition: 0.8s;
        height: max-content;
    }

    .btnBig, .btnMed {
        border-radius: var(--radius-1);
        font-size: 14px;
    }

    .btnBig {
        padding: 11.5px 20px;
        font-weight: var(--font-weight-3);
    }

    .btnMed {
        padding: 10.5px 20px;
        font-weight: var(--font-weight-2);
    }

    .btnSmall {
        font-size: 12px;
        background-color: transparent;
        font-weight: var(--font-weight-2);
    }
`;