import React from "react";
import { Box, Paper } from "@mui/material";

import csharp from "./../assets/logo-tech/csharp.png";
import django from "./../assets/logo-tech/django.png";
import dotnet from "./../assets/logo-tech/dotnet.png";
import figma from "./../assets/logo-tech/figma.png";
import github from "./../assets/logo-tech/github.png";
import javascript from "./../assets/logo-tech/js.png";
import laravel from "./../assets/logo-tech/laravel.png";
import mysql from "./../assets/logo-tech/mysql.png";
import php from "./../assets/logo-tech/php.png";
import postgre from "./../assets/logo-tech/postgre.png";
import postman from "./../assets/logo-tech/postman.png";
import python from "./../assets/logo-tech/python.png";
import react from "./../assets/logo-tech/react.png";

export default function Tech() {
  const techStack = {
    programmingLanguages: [
      {
        name: "PHP",
        image: php,
      },
      {
        name: "Python",
        image: python,
      },
      {
        name: "C#",
        image: csharp,
      },
      {
        name: "JavaScript",
        image: javascript,
      },
    ],

    frameworks: [
      {
        name: "Laravel",
        image: laravel,
      },
      {
        name: ".NET",
        image: dotnet,
      },
      {
        name: "React",
        image: react,
      },
      {
        name: "Django",
        image: django,
      },
    ],

    databases: [
      {
        name: "MySQL",
        image: mysql,
      },
      {
        name: "PostgreSQL",
        image: postgre,
      },
    ],

    tools: [
      {
        name: "GitHub",
        image: github,
      },
      {
        name: "Postman",
        image: postman,
      },
      {
        name: "Figma",
        image: figma,
      },
    ],
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#d62839",
        p: { xs: 2, sm: 4 },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          minHeight: "500px",

          backgroundColor: "#fffaf3",

          borderRadius: 0,

          overflow: "hidden",

          // ==========================================
          // BOLONGAN DI BAGIAN ATAS
          // ==========================================
          "&::before": {
            content: '""',
            position: "absolute",

            top: "8px",
            left: "10px",
            right: "10px",

            height: "24px",

            backgroundImage: `
              radial-gradient(
                circle,
                #d62839 0,
                #d62839 10px,
                transparent 10.5px
              )
            `,

            backgroundSize: "35px 24px",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
          },

          // ==========================================
          // GARIS MERAH DI BAWAH LUBANG
          // ==========================================
          "&::after": {
            content: '""',
            position: "absolute",

            top: "37px",
            left: 0,
            right: 0,

            height: "2px",

            backgroundColor: "#d62839",
          },
        }}
      >
        <div className="px-6 pb-12 pt-20 sm:px-10">
          {/* ==========================================
              TITLE
          ========================================== */}
          <div className="font-serif text-lg text-center text-[#811128] sm:text-lg">
            Here's My
          </div>

          <div className="mb-10 font-serif text-xl text-center text-[#811128] sm:text-2xl">
            TECH STACK
          </div>

          {/* ==========================================
              4 COLUMN UTAMA
          ========================================== */}

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-4">

            {/* PROGRAMMING LANGUAGES */}
            <div className="border-2 border-[#811128] p-5">
              <div className="mb-5 font-serif text-base font-semibold text-[#811128]">
                Programming Languages
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                {techStack.programmingLanguages.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-10 w-10 object-contain"
                    />

                    <div className="text-center font-serif text-xs text-[#811128]">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FRAMEWORKS */}
            <div className="border-2 border-[#811128] p-5">
              <div className="mb-5 font-serif text-base font-semibold text-[#811128]">
                Frameworks
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                {techStack.frameworks.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-10 w-10 object-contain"
                    />

                    <div className="text-center font-serif text-xs text-[#811128]">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DATABASES */}
            <div className="border-2 border-[#811128] p-5">
              <div className="mb-5 font-serif text-base font-semibold text-[#811128]">
                Databases
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                {techStack.databases.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-10 w-10 object-contain"
                    />

                    <div className="text-center font-serif text-xs text-[#811128]">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TOOLS */}
            <div className="border-2 border-[#811128] p-5">
              <div className="mb-5 font-serif text-base font-semibold text-[#811128]">
                Tools
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                {techStack.tools.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-10 w-10 object-contain"
                    />

                    <div className="text-center font-serif text-xs text-[#811128]">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Paper>
    </Box>
  );
}