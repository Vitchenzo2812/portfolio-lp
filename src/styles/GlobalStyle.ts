import { THEME } from "./Theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --poppins: 'Poppins';
        --overpass: 'Overpass';
        --playfair: 'Playfair Display';
        --open_sans: 'Open Sans';
    }

   * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: sans-serif;
        font-weight: 400;
        background-color: ${THEME.DEFAULT_BACKGROUND};
    }

    html {
        font-size: 62.5%;
    }

    body {
        overflow-x: hidden;
        ::-webkit-scrollbar {
           display: none;
        }
        
        scroll-behavior: auto;
    }
`;