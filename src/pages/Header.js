import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	SwipeableDrawer,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import HomeIcon from "@mui/icons-material/Home";
import WebIcon from "@mui/icons-material/Web";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Link } from "react-router-dom";
import KARTIKEYA_PANDEY_RESUME from "../assets/resume/KARTIKEYA_PANDEY_RESUME.pdf";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
	const [sel, setSel] = useState(false);

	return (
		<AppBar position="sticky" sx={{ bgcolor: "white", mb: 2, borderRadius: 1}}>
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
							<Typography variant="h6" component="div" sx={{ color: "black" }}>
								<HomeIcon sx={{ color: "crimson" }} /> Home{" "}
							</Typography>
						</Link>
						{/* <Link to="/about"  style={{textDecoration:'none'}} >
                <Typography variant="h5" component="div" sx={{color:'crimson'}} > 
                  About-Me
              </Typography>
              </Link> */}

						<Link to="/experiences" style={{ textDecoration: "none" }}>
							<Typography variant="h6" component="div" sx={{ color: "black" }}>
								<WorkHistoryIcon sx={{ color: "crimson" }} /> Experience
							</Typography>
						</Link>
						<Link to="/projects" style={{ textDecoration: "none" }}>
							<Typography variant="h6" component="div" sx={{ color: "black" }}>
								<WebIcon sx={{ color: "crimson" }} /> Projects
							</Typography>
						</Link>

						<Typography variant="h6" component="div">
							<a
								href={KARTIKEYA_PANDEY_RESUME}
								download={KARTIKEYA_PANDEY_RESUME}
								style={{ color: "black", textDecoration: "none" }}
							>
								<DownloadIcon sx={{ color: "crimson" }} /> Resume
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
						<Typography variant="h6" component="div" sx={{ color: "black" }}>
							Home <HomeIcon sx={{ color: "crimson" }} />
						</Typography>
					</Link>
					{/* <Link to="/about"  style={{textDecoration:'none'}} >
                <Typography variant="h6" component="div" sx={{color:'crimson'}} > 
                  About-Me
              </Typography>
              </Link> */}

					<Link to="/experiences" style={{ textDecoration: "none" }}>
						<Typography variant="h6" component="div" sx={{ color: "black" }}>
							Experience <WorkHistoryIcon sx={{ color: "crimson" }} />
						</Typography>
					</Link>

					<Link to="/projects" style={{ textDecoration: "none" }}>
						<Typography variant="h6" component="div" sx={{ color: "black" }}>
							Projects <WebIcon sx={{ color: "crimson" }} />
						</Typography>
					</Link>

					<Typography variant="h6" component="div">
						<a
							href={KARTIKEYA_PANDEY_RESUME}
							download={KARTIKEYA_PANDEY_RESUME}
							style={{ color: "black", textDecoration: "none" }}
						>
							Resume <DownloadIcon sx={{ color: "crimson" }} />
						</a>
					</Typography>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
