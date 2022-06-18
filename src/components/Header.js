import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  SwipeableDrawer,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import KARTIKEYA_PANDEY_UPDATED_RESUME from "./KARTIKEYA_PANDEY_UPDATED_RESUME.pdf";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [sel, setSel] = useState(false);

  return (
    <AppBar
      position="relative"
      sx={{ bgcolor: "white", mb: 4, borderRadius: 1 }}
    >
      <Toolbar variant="regular">
        <Typography
          color="textPrimary"
          sx={{ display: { sm: "block", xs: "block", md: "none" } }}
          onClick={() => setSel(true)}
        >
          <MenuIcon fontSize="large" />
        </Typography>
        <SwipeableDrawer open={sel} onClose={() => setSel(false)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              flexWrap: "wrap",
              height: "100%",
              p: 4,
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "crimson" }}
              >
                Home
              </Typography>
            </Link>
            {/* <Link to="/about"  style={{textDecoration:'none'}} >
                <Typography variant="h5" component="div" sx={{color:'crimson'}} > 
                  About-Me
              </Typography>
              </Link> */}
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "crimson" }}
              >
                Projects
              </Typography>
            </Link>
            <Link to="/experiences" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "crimson" }}
              >
                Experience
              </Typography>
            </Link>
            <Typography variant="h5" component="div">
              <a
                href={KARTIKEYA_PANDEY_UPDATED_RESUME}
                download={KARTIKEYA_PANDEY_UPDATED_RESUME}
                style={{ color: "crimson", textDecoration: "none" }}
              >
                Resume <DownloadIcon />
              </a>
            </Typography>
          </Box>
        </SwipeableDrawer>
        <Box
          sx={{
            display: { sm: "none", xs: "none", md: "flex" },
            justifyContent: { md: "space-around" },
            flexWrap: { md: "wrap" },
            width: "100%",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h6" component="div" sx={{ color: "crimson" }}>
              Home
            </Typography>
          </Link>
          {/* <Link to="/about"  style={{textDecoration:'none'}} >
                <Typography variant="h6" component="div" sx={{color:'crimson'}} > 
                  About-Me
              </Typography>
              </Link> */}
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <Typography variant="h6" component="div" sx={{ color: "crimson" }}>
              Projects
            </Typography>
          </Link>
          <Link to="/experiences" style={{ textDecoration: "none" }}>
            <Typography variant="h6" component="div" sx={{ color: "crimson" }}>
              Experience
            </Typography>
          </Link>
          <Typography variant="h6" component="div">
            <a
              href={KARTIKEYA_PANDEY_UPDATED_RESUME}
              download={KARTIKEYA_PANDEY_UPDATED_RESUME}
              style={{ color: "crimson", textDecoration: "none" }}
            >
              Resume <DownloadIcon />
            </a>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
