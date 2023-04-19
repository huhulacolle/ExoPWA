import React, { useEffect, useState } from 'react'
import { ICapsules } from '../interfaces/ICapsules'
import axios from 'axios'

function SeeCapsules() {

  const [Capsules, setCapsules] = useState<ICapsules[]>([]);

  useEffect(() => {
    getCapsules();
  }, [])


  function getCapsules(): void {
    axios.get("https://api.spacexdata.com/v3/capsules")
      .then(data => {
        setCapsules(data.data)
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <div className="container">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">capsule_serial</th>
            <th scope="col">capsule_id</th>
            <th scope="col">original_launch</th>
            <th scope="col">original_launch_unix</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          {Capsules.map((c, i) => (
            <tr key={i}>
              <td> {c.capsule_serial} </td>
              <td> {c.capsule_id} </td>
              <td> {c.original_launch} </td>
              <td> {c.original_launch_unix} </td>
              <td> {c.status} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
}

export default SeeCapsules