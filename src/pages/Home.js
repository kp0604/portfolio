import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import mav from "../assets/images/mav.png";
import { skills } from "../data/skills";

export default function Home() {
	return (
		<Container maxWidth="lg">
			<Box
				display="flex"
				sx={{ flexWrap: "wrap", justifyContent: { md: "space-around" } }}
				flexDirection={{ xs: "column", md: "row" }}
			>
				{/* <Avatar
            src={kp1}
            variant="rounded"
            sx={{ height: "220px", width: "220px" }}
          /> */}
				<Avatar
					src={mav}
					variant="circular"
					sx={{ height: "250px", width: "250px" }}
				/>
				{/* <Box> */}
				<Box my="auto">
					<Typography variant="h5" component="div">
						Hello, I'm
					</Typography>
					<Typography variant="h2" component="div" sx={{ color: "crimson" }}>
						Kartikeya Pandey
					</Typography>
					<Typography variant="h4" component="div" mt={2} sx={{}}>
						Frontend Developer
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						flexDirection: { xs: "row", md: "column" },
						justifyContent: { md: "space-around" },
					}}
					mt={4}
				>
					<Link href="https://github.com/kp0604" sx={{ color: "black", mr: 4 }}>
						<GitHubIcon fontSize="large" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/kartikeya-pandey-576ba1139/"
						sx={{ color: "black", mr: 4 }}
					>
						<LinkedInIcon fontSize="large" />
					</Link>
					<Link
						href="https://twitter.com/kartikeya06"
						sx={{ color: "black", mr: 4 }}
					>
						<TwitterIcon fontSize="large" />
					</Link>
				</Box>
				{/* </Box> */}
			</Box>
			<Box mt={12}>
				<Typography
					variant="h6"
					component="div"
					color="crimson"
					sx={{ borderBottom: "2px solid black" }}
				>
					Skilled-In
				</Typography>
				<Box
					display="flex"
					justifyContent="space-between"
					flexWrap="wrap"
					mt={2}
				>
					{skills.map((skill, idx) => {
						return (
							<Box>
								<Avatar
									src={skill.logo}
									sx={{ height: "55px", width: "55px", mx: "auto" }}
								/>
								<Typography
									align="center"
									variant="captionText"
									component="div"
									mt={2}
								>
									{skill.name.toUpperCase()}
								</Typography>
							</Box>
						);
					})}
				</Box>
			</Box>
		</Container>
	);
}
