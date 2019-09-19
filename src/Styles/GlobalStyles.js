import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
        ::-webkit-scrollbar{
            display: none;
        }
    }
    body { 
        line-height:1.4em;
    }

    hr{
        border: solid 0.5px gainsboro;
    }

    
`;