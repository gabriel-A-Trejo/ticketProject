import NavLinks from './nav-links'
import Logo from './Logo'

const NavBar = () => {
  return (
     <nav
      className="
        animate-header-from-top
        supports-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-20
        border-b bg-background/95 backdrop-blur
        w-full flex py-2.5 px-5 justify-between
      "
    >
      <div className="flex items-center gap-x-2">
       <Logo />
      </div>
      <NavLinks />
    </nav>
  )
}

export default NavBar