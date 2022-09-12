import axios from "axios";

type axiosReq = {
  method: string;
  endpoint: string;
  data?: string;
};

export default function axiosReq(headers: any, { method, endpoint, data }: axiosReq) {
  try {
    if (!headers) return { redirect: { destination: "/" } };

    let config = { method, url: `${process.env.API_URL}${endpoint}`, headers, data };
    const res = axios(config).then((response) => response.data);

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}
