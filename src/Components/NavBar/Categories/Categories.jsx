import React from 'react'
import { Link } from 'react-router-dom'
import { SiPlaystation3, SiPlaystation4, SiPlaystation5 } from 'react-icons/si'

const Categories = () => {
   return (
    <ul className="nav nav-pills nav-flush d-flex flex-column justify-content-evenly">
      <li className="nav-item">
        <Link to={"/category/ps3"} className="nav-link py-3 rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="ps3" data-bs-original-title="ps3">
          <SiPlaystation3 />
        </Link>
      </li>
      <li>
        <Link to={"/category/ps4"} className="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="ps4" data-bs-original-title="ps4">
            <SiPlaystation4 />
        </Link>
      </li>
      <li>
        <Link to={"/category/ps5"} className="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="ps5" data-bs-original-title="ps5">
          <SiPlaystation5 />
        </Link>
      </li>
    </ul>
  )
}

export default Categories