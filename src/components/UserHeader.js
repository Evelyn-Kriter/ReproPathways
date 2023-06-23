import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HealthAndSafetySharpIcon from "@mui/icons-material/HealthAndSafetySharp";
import Link from "next/link";
import { useUser } from "../contexts/UserContext";
// import { useRouter } from "next/router";
import { useState } from "react";
import { getAuth } from "firebase/auth";
//import PropTypes from "prop-types";

/*/
This component renders the header for each ReproHub page
/*/

export default function UserHeader({}) {
  const pages = ["Home", "Explore", "Internships", "About"];
  const settings = ["Settings"];

  const user = useUser();
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();

  const openNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const closeNavMenu = () => {
    setAnchorElNav();
  };

  const openUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const closeUserMenu = () => {
    //console.log("Closed settings!");
    setAnchorElUser();
    // logOut();
  };

  const logOut = () => {
    const auth = getAuth();
    auth.signOut();
    setAnchorElUser();
  };

  return (
    <AppBar position="absolute" style={{ background: "#1b3a5d" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HealthAndSafetySharpIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          {user && user.email}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openNavMenu}
              color="white"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={closeNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={closeNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={closeNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={openUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: "#1b3a5d" }}>
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={closeUserMenu}
            >
              {settings.map((setting) => (
                <Link key={setting} href="/login">
                  <MenuItem key={setting} onClick={logOut}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

UserHeader.propTypes = {
  //isStudent: PropTypes.bool.isRequired,
};
