"use client";

import { Grid, Stack, Typography, Box, Card, CardContent, Avatar } from "@mui/material";
import siteData from "@/data/siteData.json";
import ServiceCard from "@/components/ServiceCard";

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
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                Full-stack developer with 5 years of experience in frontend and
                backend development. Proficient in designing and implementing
                RESTful APIs, creating responsive and user-friendly interfaces,
                and applying best practices. Strong ability to provide practical
                solutions to complex problems
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
                src={siteData.profile.avatar}
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
        {siteData.services.map((s) => (
          <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} tags={s.tags} />
        ))}
      </Box>
    </Stack>
  );
}
