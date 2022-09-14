import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dateNow = new Date().toUTCString();
    res.setHeader("Set-Cookie", `nayeon.sid= ; path=/; expires=${dateNow}`);
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`);
    return res.status(200).json({ status: "success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error" });
  }
}
