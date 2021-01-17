import React from "react";

export default function Employee(props){     
  
  return(
    <div> 
      <br />
      <table>       
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col" onClick={props.sortResults}>
              Name
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((emp, num) => (
            <tr key={num}>
              <td>
                <img src={emp.picture.medium} alt="employeethumbnail" />
              </td>
              <td>{`${emp.name.first} ${emp.name.last}`}</td>
              <td>{emp.cell}</td>
              <td>{emp.email}</td>
              <td>{`${emp.location.city}, ${emp.location.state}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}