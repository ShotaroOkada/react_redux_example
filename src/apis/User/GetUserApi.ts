import { AxiosPromise } from "axios";
import Axios from "../Axios";

export type GetUserParam = {
  id: string
}

export function getUserApi({ id }: GetUserParam): AxiosPromise<void> {
  return Axios.get('/user', {
    params: {
      id
    }
  })
};