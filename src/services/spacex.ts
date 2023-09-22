import { type Doc, type SpaceXResponseAPI } from "../types/api";

export const getLaunchById = async ({ id }: { id: string }): Promise<Doc> => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

  const launch = (await res.json()) as Doc
  return launch
}

export const getLaunches = async (): Promise<Doc[]> => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc"
        },
        limit: 12
      }
    })
  }
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", fetchOptions)

  const { docs: launches } = (await res.json()) as SpaceXResponseAPI
  return launches
}