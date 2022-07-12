import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  Avatar,
} from "@mui/material";
import { projects } from "../helpers/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "70vh" }}>
      <Typography
        variant="h5"
        component="div"
        pt={4}
        sx={{ borderBottom: "2px solid black", color: "crimson" }}
      >
        Personal Projects
      </Typography>
      <Box display="flex" justifyContent={"space-evenly"} flexWrap="wrap">
        {projects.map((project, idx) => {
          return (
            <Card key={idx} sx={{ my: 3 }} elevation={4}>
              <CardMedia
                component="img"
                height="160"
                image={project.image}
                alt="img"
                sx={{ borderBottom: "1px solid black", maxWidth: "330px" }}
              />
              <Box display="flex" justifyContent="space-around" my={1}>
                {project.tech.map((tech, idx) => {
                  return (
                    <Avatar
                      src={tech.logo}
                      sx={{ height: "30px", width: "30px" }}
                    />
                  );
                })}
              </Box>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  bgcolor: "whitesmoke",
                  color: "black",
                }}
              >
                <Box>
                  <Typography variant="h6" component="div">
                    {project.name.toUpperCase()}
                  </Typography>
                </Box>
                <Link
                  to={`/projects/${project.name}`}
                  state={{ project: project }}
                  style={{
                    textDecoration: "none",
                    backgroundColor: "steelblue",
                    borderRadius: "5px",
                    color: "white",
                    fontWeight: 500,
                    padding: "5px 8px 5px 8px",
                  }}
                >
                  Open
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}
