import { createGlobalStyle } from 'styled-components';
import formReset from './form-reset';
import normalize from './normalize';
import reset from './reset';

const GlobalStyle = createGlobalStyle`
    ${formReset}
    ${normalize}
    ${reset}
`;

export default GlobalStyle;
