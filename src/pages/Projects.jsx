import React, { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import project1 from "./../assets/projects/project1.png";
import project2 from "./../assets/projects/project2.png";
import project3 from "./../assets/projects/project3.png";
import project4 from "./../assets/projects/project4.png";
import project5 from "./../assets/projects/project5.png";
import project6 from "./../assets/projects/project6.png";
import project7 from "./../assets/projects/project7.png";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Web-Based Party Equipment Rental Application",
      image: project1,
      description:
        "Developed a web-based party equipment rental application to support product browsing, rental orders, payment status tracking, and order management. Developed the frontend interface using React.js and integrated it with backend services.",
      info: [
        {
          title: "Role",
          value: "Full-stack Developer",
        },
        {
          title: "Technology",
          value:
            "Python, Django, Django REST Framework, React.js, PostgreSQL",
        },
        {
          title: "Year",
          value: "2026",
        },
      ],
    },

    {
      title: "PPh & PPN Tax Management System",
      image: project2,
      description:
        "Developed a web-based tax management system covering user, client, tax, reporting, dashboard, and data export functionalities.",
      info: [
        {
          title: "Role",
          value: "Full-stack Developer",
        },
        {
          title: "Technology",
          value:
            "PHP, Laravel, Bootstrap, PostgreSQL, Livewire, JavaScript",
        },
        {
          title: "Year",
          value: "2025",
        },
      ],
    },

    {
      title: "Cash Budget Management System",
      image: project3,
      description:
        "Developed features for a web-based cash budget management system, including budget percentage management and WhatsApp broadcast functionality.",
      info: [
        {
          title: "Role",
          value: "Full-stack Developer",
        },
        {
          title: "Technology",
          value: "PHP, Laravel, Bootstrap, MySQL, Vue.js",
        },
        {
          title: "Year",
          value: "2024",
        },
      ],
    },

    {
      title: "Automated PowerPoint Report Generation via Telegram Bot",
      image: project4,
      description:
        "Developed a Telegram bot that automates the generation of PowerPoint reports from date-based user input, reducing the need for manual report preparation.",
      info: [
        {
          title: "Role",
          value: "Backend Developer & Automation Engineer",
        },
        {
          title: "Technology",
          value:
            "TypeScript, Telegraf, PptxGenJS, PostgreSQL, DBeaver",
        },
        {
          title: "Year",
          value: "2025",
        },
      ],
    },

    {
      title: "PKM Proposal Submission & Evaluation System",
      image: project5,
      description:
        "Developed a web-based system for proposal submission and evaluation, supporting approximately 200 proposals in one competition period.",
      info: [
        {
          title: "Role",
          value: "Full-stack Developer",
        },
        {
          title: "Technology",
          value: "PHP, Laravel, Bootstrap, MySQL",
        },
        {
          title: "Year",
          value: "2024",
        },
      ],
    },

    {
      title: "Network Performance Monitoring Dashboard",
      image: project6,
      description:
        "Developed API endpoints to support network performance monitoring, including KPI filtering, benchmark data, paginated tables, and charts.",
      info: [
        {
          title: "Role",
          value: "Backend Developer",
        },
        {
          title: "Technology",
          value: "C#, .NET, PostgreSQL, Postman",
        },
        {
          title: "Year",
          value: "2025",
        },
      ],
    },

    {
      title: "Network Performance Benchmarking Dashboard",
      image: project7,
      description:
        "Developed API endpoints for a network performance benchmarking dashboard, supporting KPI filtering and benchmark cards.",
      info: [
        {
          title: "Role",
          value: "Backend Developer",
        },
        {
          title: "Technology",
          value: "C#, .NET, PostgreSQL, Postman",
        },
        {
          title: "Year",
          value: "2025",
        },
      ],
    },
  ];

  const handlePrevious = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentProject((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const project = projects[currentProject];

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#fffaf3",

        px: {
          xs: 2,
          sm: 4,
          md: 8,
        },

        py: {
          xs: 2,
          sm: 3,
        },

        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >

      {/* ==========================================
          CAROUSEL
      ========================================== */}

      <Box
        sx={{
          flex: 1,
          minHeight: 0,

          display: "flex",
          alignItems: "center",

          gap: {
            xs: 1,
            sm: 2,
            md: 4,
          },
        }}
      >
        {/* ======================================
            LEFT BUTTON
        ====================================== */}

        <IconButton
          onClick={handlePrevious}
          sx={{
            width: {
              xs: 40,
              sm: 50,
            },

            height: {
              xs: 40,
              sm: 50,
            },

            flexShrink: 0,

            color: "#811128",
            border: "1px solid #811128",

            "&:hover": {
              backgroundColor: "#811128",
              color: "#fffaf3",
            },
          }}
        >
          <ArrowBackIosNewIcon
            sx={{
              fontSize: {
                xs: 18,
                sm: 22,
              },
            }}
          />
        </IconButton>

        {/* ======================================
            CARD
        ====================================== */}

        <Card
            elevation={0}
            sx={{
                flex: 1,

                height: {
                xs: "auto",
                md: "100%",
                },

                border: "2px solid #811128",
                borderRadius: 4,

                backgroundColor: "#fffaf3",

                overflow: "hidden",
            }}
        >
          <CardContent
            sx={{
              height: {
                xs: "auto",
                md: "100%",
            },
              boxSizing: "border-box",

              p: {
                xs: 2,
                sm: 3,
                md: 4,
              },

              "&:last-child": {
                pb: {
                  xs: 2,
                  sm: 3,
                  md: 4,
                },
              },

              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* ==================================
                PROJECT TITLE
            ================================== */}

            <div className="font-serif text-lg mb-2 font-semibold text-[#811128]">
              {project.title}
            </div>

            {/* ==================================
                CONTENT GRID
            ================================== */}

            <Box
              sx={{
                flex: 1,
                minHeight: 0,

                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },

                gap: {
                  xs: 2,
                  md: 4,
                },
              }}
            >
              {/* ==================================
                  LEFT
              ================================== */}

              <Box
                sx={{
                  minWidth: 0,

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* ==================================
                    IMAGE
                ================================== */}

                <Box
  component="img"
  src={project.image}
  alt={project.title}
  sx={{
    width: "100%",

    height: {
      xs: "180px",
      sm: "220px",
      md: "240px",
    },

    objectFit: "cover",
    display: "block",

    backgroundColor: "#eeeeee",
  }}
/>

                {/* ==================================
                    DESCRIPTION
                ================================== */}

                <div className="mt-4 font-serif text-sm sm:text-base text-justify text-[#811128]">
                  {project.description}
                </div>
              </Box>

              {/* ==================================
                  RIGHT
              ================================== */}

              <Box
                sx={{
                  minHeight: 0,

                  display: "grid",

                  gridTemplateRows: "repeat(3, 1fr)",

                  gap: {
                    xs: 1.5,
                    sm: 2,
                  },
                }}
              >
                {project.info.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: {
                        xs: 1.5,
                        sm: 2,
                      },

                      py: {
                        xs: 1,
                        sm: 2,
                      },

                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    {/* INFO TITLE */}

                    <div className="font-serif font-semibold text-sm sm:text-base text-[#811128]">
                      {item.title}
                    </div>

                    {/* INFO VALUE */}

                    <div className="mt-1 font-serif text-[0.85rem] sm:text-[0.95rem] text-[#811128]">
                      {item.value}
                    </div>
                  </Box>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* ======================================
            RIGHT BUTTON
        ====================================== */}

        <IconButton
          onClick={handleNext}
          sx={{
            width: {
              xs: 40,
              sm: 50,
            },

            height: {
              xs: 40,
              sm: 50,
            },

            flexShrink: 0,

            color: "#811128",
            border: "1px solid #811128",

            "&:hover": {
              backgroundColor: "#811128",
              color: "#fffaf3",
            },
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              fontSize: {
                xs: 18,
                sm: 22,
              },
            }}
          />
        </IconButton>
      </Box>

      {/* ==========================================
          DOT INDICATOR
      ========================================== */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          gap: 1,

          mt: {
            xs: 1.5,
            sm: 2,
          },

          flexShrink: 0,
        }}
      >
        {projects.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentProject(index)}
            sx={{
              width: 10,
              height: 10,

              borderRadius: "50%",

              cursor: "pointer",

              backgroundColor:
                currentProject === index
                  ? "#811128"
                  : "#d6b9c0",

              transition: "0.2s",

              "&:hover": {
                backgroundColor: "#811128",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}