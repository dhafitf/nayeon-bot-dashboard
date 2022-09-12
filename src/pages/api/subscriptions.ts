import type { NextApiRequest, NextApiResponse } from "next";
import axiosReq from "~/utils/lib/axiosReq";

const validateCookies = (req: NextApiRequest) => {
  const sessionID = req.cookies["nayeon.sid"];
  return sessionID ? { Cookie: `nayeon.sid=${sessionID}` } : false;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "PUT") return res.status(404).json({ status: "Unknown Request" });
    const headers = validateCookies(req) as HeadersInit;
    const referer = req.headers.referer;
    const splitedRef = referer?.split("/");

    const body = JSON.parse(req.body);
    const subsReq = (type: string) => {
      return axiosReq(headers, {
        method: "put",
        endpoint: `/guilds/${splitedRef![4]}/subs`,
        data: {
          type: type,
          ...body,
        },
      });
    };

    switch (splitedRef![5]) {
      case "instagram":
        await subsReq("instagram");
        break;
      case "vlive":
        await subsReq("vlive");
        break;
      case "tiktok":
        await subsReq("tiktok");
        break;
      case "youtube":
        await subsReq("youtube");
        break;
      default:
        return res.status(404).json({ status: "Unknown Route" });
    }

    return res.status(200).json({ status: "Updated" });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ status: "Error" });
  }
}
