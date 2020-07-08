import * as React from 'react'

type NavItemProps = {
  href: string
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <li className='nav-item'>
      <a className='nav-link' href={props.href}>
        {props.children}
      </a>
    </li>
  )
}

export { NavItem }
