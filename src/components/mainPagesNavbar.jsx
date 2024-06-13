import React from 'react';
import { Link } from 'react-router-dom'

const mainPagesNavbar = ({data}) => {
  return (
    <nav>
        <ul>
           {
            data.map(
              (item, index)=>(
                <li key={index}>
                  <Link to={item[0]}>{item[1]}</Link>
                </li>
              )
            )
           }
        </ul>

    </nav>
  )
}

export default mainPagesNavbar;