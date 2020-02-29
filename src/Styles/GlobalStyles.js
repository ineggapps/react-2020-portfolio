import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import fonts from "./fonts.css";

export default createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
    @import를 쓰면 유효한 URL이더라도 styled-component로 작성한 컴포넌트 스타일은 적용이 되지 않음. (why?)
     */
    ${reset};
    /* Google fonts */
    /* cyrillic-ext */
    /* ${fonts}; */
    *{
        box-sizing:border-box;
    }
    body{
        font-family:'Noto Sans KR', -apple-system,BlinkMacSystemFont, 'Segoe UI',  Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        font-size:1.3em;
        line-height:1.3em;
        color:${props => props.theme.blackColor};
    }
    h1, h2{
        font-weight:900;   
        font-size: 2em;
    }
    a{
        text-decoration:none;
        color:${props => props.theme.linkColor};
    }
    input:focus{
        outline:none;
    }
`;
