"use client";

import {
  Grid,
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Button,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import DnsIcon from "@mui/icons-material/Dns";
import StorageIcon from "@mui/icons-material/Storage";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import BugReportIcon from "@mui/icons-material/BugReport";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

const services = [
  {
    icon: <CodeIcon />,
    title: "Front-End Developer",
    desc: "React, Next.js, modern UI/UX",
    tags: ["React", "Next.js", "UI/UX"],
  },
  {
    icon: <DnsIcon />,
    title: "Back-End Developer",
    desc: "Node.js, REST/GraphQL, services",
    tags: ["Node.js", "Express", "GraphQL"],
  },
  {
    icon: <StorageIcon />,
    title: "Database",
    desc: "Design, performance, migrations",
    tags: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    icon: <AutoModeIcon />,
    title: "Automation And Support",
    desc: "Workflow + business automation",
    tags: ["Power Automate", "GoHighLevel"],
  },
  {
    icon: <BugReportIcon />,
    title: "Testing / QA",
    desc: "Unit, E2E, performance checks",
    tags: ["Jest", "Playwright", "Lighthouse"],
  },
  {
    icon: <CloudDoneIcon />,
    title: "GitHub & Azure CI/CD",
    desc: "Pipelines, Actions, releases",
    tags: ["GitHub Actions", "Azure DevOps", "Pipelines"],
  },
];

export default function AboutPage() {
  return (
    <Stack spacing={2}>
      <Card
        sx={{
          position: "relative",
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
          backgroundImage: "none",
          transition:
            "transform .2s ease, border-color .2s ease, box-shadow .2s ease",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg, rgba(34,197,94,1), rgba(34,197,94,0))",
          },
          "&:hover": {
            transform: "translateY(-2px)",
            borderColor: "primary.main",
            boxShadow: "0 10px 30px rgba(34,197,94,0.12)",
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
              gap: 3,
              alignItems: "center",
            }}
          >
            <Box>
              <Chip
                label="Full-Stack Developer"
                color="primary"
                size="small"
                sx={{ mb: 1, fontWeight: 700 }}
              />
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                I'm a creative full-stack developer focused on building fast,
                accessible, and beautiful web experiences. I ship thoughtfully
                designed products with solid engineering foundations.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      bgcolor: "primary.main",
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    5+ years experience
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      bgcolor: "primary.main",
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    30+ projects shipped
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      bgcolor: "primary.main",
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Available for new work
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Avatar
                src="/profile.jpg"
                alt="Profile"
                sx={{
                  width: 112,
                  height: 112,
                  boxShadow: (t) =>
                    `0 0 0 3px ${t.palette.primary.main}33, 0 0 0 6px rgba(0,0,0,0.25)`,
                }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
        }}
      >
        {services.map((s) => (
          <Card
            key={s.title}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              border: "1px solid",
              borderColor: "divider",
              backgroundImage: "none",
              cursor: "pointer",
              transition:
                "transform .22s ease, border-color .22s ease, box-shadow .22s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                borderColor: "primary.main",
                boxShadow: "0 10px 30px rgba(34,197,94,0.15)",
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Box
                  sx={{
                    p: 1.25,
                    borderRadius: 2,
                    bgcolor: "rgba(34,197,94,0.15)",
                    border: "1px solid",
                    borderColor: "rgba(34,197,94,0.35)",
                    color: "primary.light",
                    transition: "transform .22s ease, box-shadow .22s ease",
                    "& .MuiSvgIcon-root": { fontSize: 34 },
                  }}
                >
                  {s.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight={800} gutterBottom>
                    {s.title}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {s.desc}
                  </Typography>
                  {s.tags && (
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.75,
                      }}
                    >
                      {s.tags.map((t) => (
                        <Chip
                          key={t}
                          size="small"
                          label={t}
                          variant="outlined"
                          color="primary"
                          sx={{ borderRadius: 999 }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  );
}
