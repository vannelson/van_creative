"use client";

import React from "react";
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import TimelineIcon from "@mui/icons-material/Timeline";
import siteData from "@/data/siteData.json";

const experiences = siteData.experiences;

export default function ExperiencePage() {
  return (
    <Stack spacing={2}>
      <Card sx={{ position: "relative", overflow: "hidden", border: "1px solid", borderColor: "divider", backgroundImage: "none" }}>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(600px 200px at 30% -20%, rgba(34,197,94,0.12), transparent 60%)" }} />
        <CardContent sx={{ position: "relative", zIndex: 1 }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "flex-start", sm: "center" }} justifyContent="space-between">
            <Stack direction="row" spacing={1.5} alignItems="center">
              <WorkHistoryIcon color="primary" />
              <Typography variant="h4" fontWeight={800}>Experience</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <TimelineIcon sx={{ opacity: 0.6 }} />
              <Typography variant="body2" color="text.secondary">{experiences.length} roles</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ border: "1px solid", borderColor: "divider", backgroundImage: "none" }}>
        <CardContent>
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", left: 13, top: 0, bottom: 0, width: 3, bgcolor: "transparent", background: "linear-gradient(to bottom, rgba(34,197,94,0.3), rgba(34,197,94,0))" }} />
            <Stack spacing={3}>
              {experiences.map((e, i) => (
                <Box key={e.company} sx={{ display: "grid", gridTemplateColumns: "26px 1fr", columnGap: 2 }}>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 6,
                        left: -15,
                        width: 28,
                        height: 28,
                        borderRadius: 999,
                        bgcolor: "background.paper",
                        border: "2px solid",
                        borderColor: "rgba(34,197,94,0.5)",
                        boxShadow: "0 4px 18px rgba(34,197,94,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                      }}
                    >
                      <Box sx={{ width: 24, height: 24, borderRadius: 999, bgcolor: "primary.main", color: "primary.contrastText", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>
                        {i + 1}
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        p: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                        backgroundImage: "none",
                        transition: "transform .2s ease, border-color .2s ease, box-shadow .2s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          borderColor: "primary.main",
                          boxShadow: "0 10px 30px rgba(34,197,94,0.12)",
                        },
                      }}
                    >
                      <Stack spacing={1.5}>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "flex-start", sm: "center" }} justifyContent="space-between">
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Box component="img" src={e.logo} alt={e.company} sx={{ width: 80, height: 48, objectFit: "cover", borderRadius: 1, border: "1px solid", borderColor: "divider", bgcolor: "#0f1113" }} />
                            <Box>
                              <Typography variant="h6" fontWeight={800}>{e.company}</Typography>
                              <Typography color="text.secondary" sx={{ fontWeight: 600 }}>{e.role}</Typography>
                            </Box>
                          </Stack>
                          <Chip icon={<TimelineIcon fontSize="small" />} label={e.period} color="primary" variant="filled" size="small" sx={{ fontWeight: 700 }} />
                        </Stack>

                        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>{e.summary}</Typography>

                        <Stack spacing={0.75} sx={{ mt: 0.5 }}>
                          {e.highlights.map((h, idx) => (
                            <Stack key={idx} direction="row" spacing={1} alignItems="flex-start">
                              <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 18, mt: "2px" }} />
                              <Typography variant="body2" color="text.secondary">{h}</Typography>
                            </Stack>
                          ))}
                        </Stack>

                        <Stack direction="row" spacing={1} flexWrap="wrap">
                          {e.tags.map((t) => (
                            <Chip key={t} size="small" label={t} variant="outlined" color="primary" sx={{ borderRadius: 999 }} />
                          ))}
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
}
