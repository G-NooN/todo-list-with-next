import { CompanyType } from "../types/type";

const AboutPage = async () => {
  const response = await fetch("http://localhost:4000/companyInfo");
  const companyInfo: CompanyType = await response.json();

  return (
    <>
      <h1>AboutPage</h1>
      <p>회사 이름 : {companyInfo.name}</p>
      <p>회사 설명 : {companyInfo.description}</p>
      <img src={companyInfo.image} alt="회사 로고" />
    </>
  );
};

export default AboutPage;
