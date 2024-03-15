export const GET = async (request: Request) => {
  const response = await fetch("http://localhost:4000/companyInfo");
  const companyInfo = await response.json();

  if (!companyInfo) {
    return new Response("Company Info Not Found", { status: 404 });
  }

  return Response.json({
    companyInfo
  });
};
