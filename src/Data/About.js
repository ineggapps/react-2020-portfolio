import React from "react";
import { Html5, Css3, Javascript, ReactLogo } from "../Components/Icons";

const getUrl = path => process.env.PUBLIC_URL + path;

export const skillsOfFrontend = [
  {
    title: "React",
    img: getUrl("/images/skills/react.png"),
    content:
      "컴포넌트를 재활용하여 사이트를 구성할 수 있습니다. React Hooks를 사용할 수 있고 React Router Dom을 이용하여 웹 사이트의 라우팅을 설계할 수 있습니다."
  },
  {
    title: "html5",
    img: getUrl("/images/skills/html5.png"),
    content:
      "웹 표준을 준수하여 웹 문서를 작성할 수 있습니다. HTML4부터 공부를 시작하여 XTHML1.0부터 HTML5까지 웹이 어떻게 변화하여 왔는지를 설명할 수 있습니다."
  },
  {
    title: "css3",
    img: getUrl("/images/skills/css3.png"),
    content: "CSS의 등장 배경에 대해 이해하였고, CSS를 적재 적소에 적용할 수 있습니다. "
  },
  {
    title: "scss",
    img: getUrl("/images/skills/scss.png"),
    content:
      "CSS Preprocessor인 SCSS의 문법을 사용할 수 있습니다. styled-component를 이용하여 React 프로젝트에서 SCSS을 주로 사용하였습니다."
  },

  {
    title: "Javascript",
    img: getUrl("/images/skills/javascript.png"),
    content:
      "ES6의 최신 문법을 학습하였습니다. 이 포트폴리오도 React를 바탕으로 한 ES6문법으로 작성되었습니다. 바닐라 스크립트에서 간단한 스크립트를 이용하여 웹사이트를 구성할 수 있습니다."
  },
  {
    title: "jQuery",
    img: getUrl("/images/skills/jquery.png"),
    content: "Vanila Javascript 대신에 jQuery를 이용하여 웹사이트를 동적으로 꾸밀 수 있습니다."
  }
];

export const skillsOfBackEnd = [
  {
    title: "Node.js",
    img: getUrl("/images/skills/nodejs.png"),
    content:
      "Express 프레임워크를 이용하여 웹 서버를 구축할 수 있습니다. DBMS를 이용하여 웹 서버와 연계하여 기본적인 입출력(CRUD)을 구현할 수 있습니다."
  },
  {
    title: "PHP",
    img: getUrl("/images/skills/php.png"),
    content: "PHP-legacy, PHP(OOP)를 이용하여 웹사이트를 구축할 수 있습니다."
  },
  {
    title: "GraphQL",
    img: getUrl("/images/skills/graphql.png"),
    content: "GraphQL을 이용하여 ORM에 접근하여 DBMS에 원하는 데이터를 입출력할 수 있습니다."
  },
  {
    title: "Mongo DB",
    img: getUrl("/images/skills/mongodb.png"),
    content: "NoSQL의 MongoDB를 이용하여 json데이터를 입출력할 수 있습니다."
  },
  {
    title: "Maria DB",
    img: getUrl("/images/skills/mariadb.png"),
    content: "관계데이터베이스의 체계를 이해하고 있으며 CRUD 데이터 처리가 가능합니다."
  },
  {
    title: "Prisma ORM",
    img: getUrl("/images/skills/prisma.png"),
    content:
      "DBMS의 앞 단에서 기능하는 ORM의 개념의 존재에 대해 숙지하고 있으며, 이를 Prisma를 이용하여 DBMS와 GraphQL의 중간에서 데이터를 입출력하도록 제어할 수 있습니다."
  }
];

export const skillsOfProgramming = [
  {
    title: "Java",
    img: getUrl("/images/skills/java.png"),
    content: "객체지향 패러다임을 이해하고 각 역할별로 클래스를 분리할 수 있습니다."
  }
];
