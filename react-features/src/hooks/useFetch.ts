import { useCallback, useState } from "react"


const useFetch = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)


  const request = useCallback(async (url: string, method: string = 'GET', body: any, headers = {}) => {
    setLoading(true)
    setError(null)
    try {

      const options: any = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      }
      if (body)
        options.body = JSON.stringify(body)

      const response = await fetch(url, options)
      const data = await response.json()
      setData(data)
      return data
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading, data, error, request
  }

}
export default useFetch;