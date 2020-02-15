import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "typeface-pt-mono";

export default createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
    @import를 쓰면 유효한 URL이더라도 styled-component로 작성한 컴포넌트 스타일은 적용이 되지 않음. (why?)
     */
    ${reset};
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system,"PT Mono", BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a{
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;
