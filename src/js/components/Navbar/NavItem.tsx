import * as React from 'react'
import { Link } from 'react-router-dom'

type NavItemProps = {
  href: string
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <li className='nav-item'>
      <Link className='nav-link' to={props.href}>
        {props.children}
      </Link>
    </li>
  )
}

export { NavItem }
