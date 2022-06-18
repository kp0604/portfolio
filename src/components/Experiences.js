import React from "react";
import { Box, Typography, Tabs, Tab, Avatar, Container } from "@mui/material";
import { experiences } from "../helpers/experiences";
import PropTypes from "prop-types";

export default function Experiences() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ px: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container
      py={{ md: 2, xs: 2, sm: 1 }}
      maxWidth="lg"
      sx={{ flexGrow: 1, py: 4, minHeight: "70vh" }}
    >
      <Tabs
        orientation={{ xs: "horizontal", md: "vertical" }}
        // orientation='vertical'
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderBottom: 1, borderColor: "divider", mb: 6 }}
      >
        {experiences.map((ex, idx) => {
          return (
            <Tab
              sx={{
                fontSize: 15,
                mx: "auto",
                fontWeight: 500,
                color: "crimson",
              }}
              label={`${ex.start} - ${ex.end}`}
              {...a11yProps(idx)}
            />
          );
        })}
      </Tabs>
      {experiences.map((ex, idx) => {
        return (
          <TabPanel value={value} index={idx}>
            <Typography variant="h5" component="div">
              {ex.title.toUpperCase()}
            </Typography>
            <Typography variant="subtitle1" component="div" mt={2}>
              Worked At : {ex.company.toUpperCase()}
            </Typography>
            <Box display="flex" alignItems="center" my={1}>
              {ex.tech.length ? (
                <Typography variant="subtitle1" component="div" mr={2}>
                  Tech Worked On :
                </Typography>
              ) : null}
            </Box>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap" mt={2}>
              {ex.tech.map((tech, idx) => {
                return (
                  <Box key={idx}>
                    <Avatar
                      src={tech.logo}
                      sx={{ height: "35px", width: "35px", mx: "auto" }}
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
              })}
            </Box>
            <Typography variant="subtitle1" component="div" sx={{ mt: 2 }}>
              {ex.description}
            </Typography>
          </TabPanel>
        );
      })}
    </Container>
  );
}
