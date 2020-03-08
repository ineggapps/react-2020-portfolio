const getUrl = path => process.env.PUBLIC_URL + path;
export const getSkillUrl = path => getUrl("/images/skills" + path);
export const getWorkUrl = path => getUrl("/images/works" + path);
export const getHeaderUrl = path => getUrl("/images/header" + path);
