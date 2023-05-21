import { useEffect, useState } from 'react'
import { SHORT_URL_API_URL } from '../../constants/constants';

function UrlTable() {
  const [myUrlData, setmyUrlData] = useState([]);

  useEffect(() => {
    const options: any = {
      method: 'GET',
      headers: {
        authToken: localStorage.getItem('authToken'),
      },
    };
    fetch(SHORT_URL_API_URL, options)
      .then((response: any) => (response.json()))
      .then((data) => setmyUrlData(data))
      .catch((err: any) => console.log('::Error::', err))

  }, []);

  return (
    <div className="space-y-12">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead
                  className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">#</th>
                    <th scope="col" className=" px-6 py-4">Original Url</th>
                    <th scope="col" className=" px-6 py-4">Shortened Url</th>
                  </tr>
                </thead>
                <tbody>
                  {myUrlData.map((data: any, index: number) => {
                    return (<tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-wrap  px-6 py-4 font-medium">{index + 1}</td>
                      <td className="whitespace-wrap  px-6 py-4">{data.origUrl}</td>
                      <td className="whitespace-wrap  px-6 py-4">{data.shortUrl}</td>
                    </tr>)
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UrlTable