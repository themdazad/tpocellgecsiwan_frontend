// eslint-disable-next-line no-unused-vars
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Users, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", navigate: "/" },
    { title: "Programs", navigate: "/programs" },
    { title: "FAQ", navigate: "/faq" },
    { title: "Contact", navigate: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderNavItems = (isMobile = false) =>
    navItems.map((item, index) => (
      <NavbarItem key={index}>
        <NavLink
          to={item.navigate}
          onClick={isMobile ? toggleMenu : undefined}
          className={isMobile ? "text-2xl" : ""}
          color="foreground"
        >
          {item.title}
        </NavLink>
      </NavbarItem>
    ));

  return (
    <Navbar isMenuOpen={isMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>
          <NavLink to="/" className="font-bold text-inherit">
            T&P Cell
          </NavLink>
        </NavbarBrand>
        <NavbarMenuToggle className="sm:hidden" onPress={toggleMenu} />
      </NavbarContent>

      {/* Menu Items for Desktop */}
      <NavbarContent className="hidden space-x-2 sm:flex" justify="center">
        {renderNavItems()}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                as={NavLink} 
                // to="/Login"
                to="/"
                radius="lg"
                variant="bordered"
              >
                Login/Signup
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              className="flex "
              aria-label="Dropdown menu with icons"
              variant="faded"
            >
              <DropdownItem key="admin" startContent={<User />}>
                Admin
              </DropdownItem>
              <DropdownItem
                className="flex justify-center"
                key="student"
                startContent={<Users />}
              >
                Students
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Menu Items for Mobile */}
      <NavbarMenu className="items-center bg-transparent space-y-4 text-xl justify-center md:hidden sm:flex">
        {renderNavItems(true)}
        <NavbarItem>
          <Button
            className="text-md"
            color="primary"
            as={NavLink}
            // to="/Login"
            to="/"
            radius="lg"
            size="md"
            variant="light"
            startContent={<FaRegCircleUser />}
            onClick={toggleMenu}
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
