import { GetServerSidePropsContext } from "next";

const validateCookies = (ctx: GetServerSidePropsContext) => {
  const sessionID = ctx.req.cookies["nayeon.sid"];
  return sessionID ? { Cookie: `nayeon.sid=${sessionID}` } : false;
};

export default validateCookies;
