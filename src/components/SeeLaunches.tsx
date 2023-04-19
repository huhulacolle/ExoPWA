import React, { useEffect, useState } from 'react'
import { ILaunches } from '../interfaces/ILaunches'
import axios from 'axios'

function SeeLaunches() {

  const [Launches, setLaunches] = useState<ILaunches[]>([])

  useEffect(() => {
    getLaunches();
  }, [])

  function getLaunches(): void {
    axios.get("https://api.spacexdata.com/v3/launches")
      .then(data => {
        setLaunches(data.data)
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <div className='container'>
      <table className='table table-dark table-striped'>
        <thead>
          <tr>
            <th scope="col">Flight number</th>
            <th scope="col">Mission name</th>
            <th scope="col">launch year</th>
            <th scope="col">Launch success</th>
          </tr>
        </thead>
        <tbody>
          {Launches.map((l, i) => (
            <tr key={i}>
              <td>
                {l.flight_number}
              </td>
              <td>
                {l.mission_name}
              </td>
              <td>
                {l.mission_name}
              </td>
              <td>
                {l.launch_success}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SeeLaunches