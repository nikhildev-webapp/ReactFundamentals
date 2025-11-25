import React, { useEffect, useState } from 'react'

const Users = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    //direct method to fetch api using useEffect
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((json) => {
                setData(json)
                setLoading(true)
        })
    }, [])
    if (!loading) {
        return <div>Loading...</div>
      }
  return (
      <>
          <div>
              <h1>Fetch Api in react</h1>
              <div>
                  {data.map((data) => (
                      <div className='data' key={data.id}>
                          <ol>
                              <div>
                                  <strong>UserName:</strong>{data.username}
                              </div>
                              <div>FullName:{data.name}</div>
                              <div>Email:{data.email}</div>
                          </ol>
                      </div>
                  ))}
              </div>
          </div>
          
      </>
  )
}

export default Users