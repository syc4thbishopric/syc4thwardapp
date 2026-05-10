import { fetchWardJson, getWardPath } from "./api-client"

export const getSacramentProgram = async <T>() => {
  return fetchWardJson<T>(getWardPath("agenda"))
}
