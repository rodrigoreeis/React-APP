import { createGlobalStyle } from 'styled-components';
import GlobalColors from './colors';
import GlobalSize from './size';

const GlobalSettings = createGlobalStyle`
    ${GlobalColors}
    ${GlobalSize}
`;

export default GlobalSettings;
