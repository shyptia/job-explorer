import { Job } from "@/features/types";
import axios from "axios";
import { Fetcher } from "swr";

export const fetcher: Fetcher<Job[], string> = (url: string) =>
  axios({
    method: "get",
    url,
    headers: {
      "X-RapidAPI-Key": "e0bb57b61bmsh548a8012ba63200p12e500jsn96a2a16d9a89",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  }).then((res) => res.data.data);