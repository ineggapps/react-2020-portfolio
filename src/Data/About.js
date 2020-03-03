export const skillsOfFrontend = [
  {
    id: "react",
    title: "React",
    img: "/react.png",
    content:
      "컴포넌트를 재활용하여 사이트를 구성할 수 있습니다. React Hooks를 사용할 수 있고 React Router Dom을 이용하여 웹 사이트의 라우팅을 설계할 수 있습니다."
  },
  {
    id: "html5",
    title: "html5",
    img: "/html5.png",
    content:
      "웹 표준을 준수하여 웹 문서를 작성할 수 있습니다. HTML4부터 공부를 시작하여 XTHML1.0부터 HTML5까지 웹이 어떻게 변화하여 왔는지를 설명할 수 있습니다."
  },
  {
    id: "css3",
    title: "css3",
    img: "/css3.png",
    content: "CSS의 등장 배경에 대해 이해하였고, CSS를 적재 적소에 적용할 수 있습니다. "
  },
  {
    id: "scss",
    title: "scss",
    img: "/scss.png",
    content:
      "CSS Preprocessor인 SCSS의 문법을 사용할 수 있습니다. styled-component를 이용하여 React 프로젝트에서 SCSS을 주로 사용하였습니다."
  },

  {
    id: "javascript",
    title: "Javascript",
    img: "/javascript.png",
    content:
      "ES6의 최신 문법을 학습하였습니다. 이 포트폴리오도 React를 바탕으로 한 ES6문법으로 작성되었습니다. 바닐라 스크립트에서 간단한 스크립트를 이용하여 웹사이트를 구성할 수 있습니다."
  },
  {
    id: "jquery",
    title: "jQuery",
    img: "/jquery.png",
    content: "Vanila Javascript 대신에 jQuery를 이용하여 웹사이트를 동적으로 꾸밀 수 있습니다."
  }
];

export const skillsOfBackEnd = [
  {
    id: "nodejs",
    title: "Node.js",
    img: "/nodejs.png",
    content:
      "Express 프레임워크를 이용하여 웹 서버를 구축할 수 있습니다. DBMS를 이용하여 웹 서버와 연계하여 기본적인 입출력(CRUD)을 구현할 수 있습니다."
  },
  {
    id: "php",
    title: "PHP",
    img: "/php.png",
    content: "PHP-legacy, PHP(OOP)를 이용하여 웹사이트를 구축할 수 있습니다."
  },
  {
    id: "graphql",
    title: "GraphQL",
    img: "/graphql.png",
    content: "GraphQL을 이용하여 ORM에 접근하여 DBMS에 원하는 데이터를 입출력할 수 있습니다."
  },
  {
    id: "mongobdb",
    title: "Mongo DB",
    img: "/mongodb.png",
    content: "NoSQL의 MongoDB를 이용하여 json데이터를 입출력할 수 있습니다."
  },
  {
    id: "mariadb",
    title: "Maria DB",
    img: "/mariadb.png",
    content: "관계데이터베이스의 체계를 이해하고 있으며 CRUD 데이터 처리가 가능합니다."
  },
  {
    id: "prisma",
    title: "Prisma ORM",
    img: "/prisma.png",
    content:
      "DBMS의 앞 단에서 기능하는 ORM의 개념의 존재에 대해 숙지하고 있으며, 이를 Prisma를 이용하여 DBMS와 GraphQL의 중간에서 데이터를 입출력하도록 제어할 수 있습니다."
  }
];

export const skillsOfProgramming = [
  {
    id: "java",
    title: "Java",
    img: "/java.png",
    content:
      "객체지향 패러다임을 이해하고 각 역할별로 클래스를 분리할 수 있습니다. 저의 자바 선생님은 안드로이드가 8할이라고 할 수 있는 만큼 교육과정을 수강하면서 많은 문법과 디자인 패턴들을 익혔습니다. 추후 재직자과정을 통하여 Java Spring Framework를 수강할 예정입니다. (3월 28일 개강, 결제 완료)"
  }
];
export const skillsOfOthers = [
  {
    id: "ubuntu",
    title: "Ubuntu",
    img: "/ubuntu.png",
    content:
      "리눅스 시스템의 기본적인 명령어를 이용하여 nginx 및 DBMS 서버를 작동시킬 수 있으며, 이미 포트폴리오 중 다수가 개인 서버에서 구동 중입니다."
  },
  {
    id: "git",
    title: "Git",
    img: "/git.png",
    content:
      "Git 원격저장소에서 Git repository를 먼저 생성하고 로컬 Git저장소에서 clone할 수 있으며, commit할 수 있습니다. 협업 시 fork하여 pull request를 하여 동료들이 작성한 코드 내용을 merge기능을 이용하여 결합할 수 있습니다. 브랜치를 생성하여 작업 단위를 분기하여 작성할 수 있습니다."
  },
  {
    id: "android",
    title: "Android",
    img: "/android.png",
    content:
      "안드로이드가 공식 언어로 Kotlin을 추가하기 전에 자바를 이용하여 안드로이드 애플리케이션을 작성하였습니다(2015년 롤리팝까지, 현재 구직 포지션이 아닙니다). 배울 기회가 찾아온다면 Kotlin을 통하여 안드로이드를 다시 배워보고 싶습니다."
  }
];

const hideSkills = [
  {
    id: "d3js",
    title: "d3.js",
    img: "/d3js.png"
  },
  {
    id: "vbnet",
    title: "VB.NET",
    img: "/vbnet.png"
  }
];

export const allSkills = [
  ...skillsOfFrontend,
  ...skillsOfBackEnd,
  ...skillsOfProgramming,
  ...skillsOfOthers,
  ...hideSkills
];
