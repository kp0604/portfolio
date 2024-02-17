import React from "react";
import { Box, Typography, Avatar,Link,Container } from "@mui/material";
import {useLocation } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";

export default function Project() {
  const location = useLocation();
  const { project } = location.state;

  return (
    <>
      <Container sx={{py:2}} maxWidth="lg">
       {/* <Link href="/projects" style={{textDecoration:'none',backgroundColor:'steelblue',borderRadius:'5px',color:'white',fontWeight:500,padding:'5px 15px 5px 15px'}}>
          Back
          </Link> */}
      <Typography variant="h5" component="div" color="crimson" mb={4} mt={2} sx={{borderBottom: 2, borderColor: "black"}}>
            {project.name.toUpperCase()}
          </Typography>
          <Avatar
            src={project.image}
            alt="img"
            variant="square"
            sx={{ width:'80%', height: {md:350,sm:350,xs:300},border:'2px solid crimson',mb:2,borderRadius:1,mx:'auto' }}
          />
        <Box width="100%" mt={4} display="flex" justifyContent={'center'}>
          <Link
            href={project.url}
            variant="h6"
            underline="none"
            sx={{ bgcolor:'steelblue',px:4,py:1,mr:4,borderRadius:1,color:'white',boxShadow:2}}
            >
            View
            <LaunchIcon sx={{ ml: 1 }} />
          </Link>
          <Link
            href={project.repoUrl}
            variant="h6"
            underline="none"
            sx={{ bgcolor:'steelblue',px:4,py:1,borderRadius:1,color:'white',boxShadow:2}}
          >
            Code
            <CodeIcon sx={{ ml: 1,my:'auto' }} />
          </Link>
        </Box>
          <Typography variant="h6" component="div" mt={4} sx={{borderBottom: 2, borderColor: "black"}}>
            Tech Used
          </Typography>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap" mt={2}>
          {
          project.tech.map((tech, idx) => {return (
              <Box key={idx}>
                <Avatar
                  src={tech.logo}
                  sx={{ height: "40px", width: "40px", mx: "auto" }}
                />
                <Typography
                  align="center"
                  variant="captionText"
                  component="div"
                  mt={2}
                >
                  {tech.name.toUpperCase()}
                </Typography>
              </Box>
            );
          })
          }
        </Box>
          <Typography variant="h6" component="div" mt={4} sx={{borderBottom: 2, borderColor: "black"}}>
            Description
          </Typography>
          <Typography variant="subtitle1" component="div" mt={2}>
            {project.description}
          </Typography>
      </Container>
    </>
  );
}
