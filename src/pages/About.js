import React from 'react'
import { Container,Typography } from '@mui/material'

export default function About() {
  return (
    <Container maxWidth="md">
        <Typography variant="h6" component="div" mt={4} sx={{borderBottom: 2, borderColor: "black"}}>
            Education
          </Typography>
          <Typography variant="subtitle1" component="div" mt={2}>
            GRADUATION : B.Tech, Electronics and Communication Engineering
          </Typography>
    </Container>
  )
}
