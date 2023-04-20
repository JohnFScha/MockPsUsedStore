import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'
import { SiPlaystation3, SiPlaystation4, SiPlaystation5 } from 'react-icons/si'

const Categories = () => {
   return (
    <ul className="nav nav-pills nav-flush d-flex flex-column justify-content-evenly">
      <li className="nav-item">
        <Link to={"/category/PlayStation 3"} className="nav-link rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="PlayStation 3">
          <SiPlaystation3 />
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/category/PlayStation 4"} className="nav-link rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="PlayStation 4">
            <SiPlaystation4 />
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/category/PlayStation 5"} className="nav-link rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="PlayStation 5">
          <SiPlaystation5 />
        </Link>
      </li>
    </ul>
  )
}

export default Categories