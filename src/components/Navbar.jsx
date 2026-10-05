import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [
  {
    label: "About",
    id: "home",
  },
  {
    label: "Tech Stack",
    id: "tech-stack",
  },
  {
    label: "Projects",
    id: "projects",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [showNavbar, setShowNavbar] = React.useState(true);

  const lastScrollY = React.useRef(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        backgroundColor: "#FFCFDB",
        boxShadow: "none",
        zIndex: 1100,

        transform: showNavbar
          ? "translateY(0)"
          : "translateY(-100%)",

        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* ==========================================
              DESKTOP NAME
          ========================================== */}

          <Typography
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
              },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#811128",
              textDecoration: "none",
            }}
          >
            Haya Qonita Amani
          </Typography>

          {/* ==========================================
              MOBILE
          ========================================== */}

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "#811128",
              }}
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
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  component="a"
                  href={`#${page.id}`}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#811128",
                      fontFamily: "sans-serif"
                    }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* ==========================================
              DESKTOP
          ========================================== */}

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "center",
              fontFamily: "sans-serif"
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                component="a"
                href={`#${page.id}`}
                sx={{
                  my: 2,
                  mx: 2,
                  color: "#811128",
                  display: "block",
                  fontFamily: "sans-serif"
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;