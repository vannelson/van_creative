"use client";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import TimelineIcon from "@mui/icons-material/Timeline";

const experiences = [
  {
    company: "Creative Co.",
    role: "Senior Full‑Stack Developer",
    period: "2023 — Present",
    logo: "/company1.png",
    summary:
      "Leading product initiatives across web apps with a focus on performance, DX, and delightful UI.",
    highlights: [
      "Shipped multi-tenant platform with Next.js",
      "Scaled APIs and caching for 10x traffic",
      "Mentored devs; improved DX and CI/CD",
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "CI/CD"],
  },
  {
    company: "Tech Studio",
    role: "Frontend Engineer",
    period: "2020 — 2023",
    logo: "/company2.png",
    summary:
      "Built component libraries and modern UIs, collaborating with design to raise quality bars.",
    highlights: [
      "Delivered design system in MUI",
      "Optimized bundle size and CLS",
      "Implemented E2E tests and a11y checks",
    ],
    tags: ["MUI", "React", "Playwright", "Lighthouse"],
  },
  {
    company: "Startup Labs",
    role: "Full‑Stack Developer",
    period: "2018 — 2020",
    logo: "/company3.jpg",
    summary:
      "Prototyped quickly, validated features with users, and iterated towards product‑market fit.",
    highlights: [
      "Built MVPs in weeks",
      "Integrated payments + analytics",
      "Automated ops with scripts",
    ],
    tags: ["Express", "MongoDB", "Stripe", "Automation"],
  },
];

export default function ExperiencePage() {
  return (
    <Stack spacing={2}>
      <Card sx={{ position: 'relative', overflow: 'hidden', border: '1px solid', borderColor: 'divider', backgroundImage: 'none' }}>
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(600px 200px at 30% -20%, rgba(34,197,94,0.12), transparent 60%)' }} />
        <CardContent sx={{ position: 'relative', zIndex: 1 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between">
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

      <Card sx={{ border: '1px solid', borderColor: 'divider', backgroundImage: 'none' }}>
        <CardContent>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: 13, top: 0, bottom: 0, width: 2, bgcolor: 'divider' }} />
            <Stack spacing={3}>
              {experiences.map((e, i) => (
                <Box key={e.company} sx={{ display: 'grid', gridTemplateColumns: '26px 1fr', columnGap: 2 }}>
                  <Box sx={{ position: 'relative' }}>
                    <Box sx={{ width: 26, height: 26, borderRadius: 999, bgcolor: 'primary.main', color: 'primary.contrastText', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{i + 1}</Box>
                  </Box>
                  <Box>
                    <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2, backgroundImage: 'none', transition: 'transform .2s ease, border-color .2s ease, box-shadow .2s ease', '&:hover': { transform: 'translateY(-2px)', borderColor: 'primary.main', boxShadow: '0 10px 30px rgba(34,197,94,0.12)' } }}>
                      <Stack spacing={1.5}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between">
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Box component="img" src={e.logo} alt={e.company} sx={{ width: 80, height: 48, objectFit: 'cover', borderRadius: 1, border: '1px solid', borderColor: 'divider', bgcolor: '#0f1113' }} />
                            <Box>
                              <Typography variant="h6" fontWeight={800}>{e.company}</Typography>
                              <Typography color="text.secondary">{e.role}</Typography>
                            </Box>
                          </Stack>
                          <Chip icon={<TimelineIcon fontSize="small" />} label={e.period} color="primary" variant="filled" size="small" sx={{ fontWeight: 700 }} />
                        </Stack>

                        <Typography color="text.secondary">{e.summary}</Typography>

                        <Box>
                          {e.highlights.map((h, idx) => (
                            <Stack key={idx} direction="row" spacing={1.25} alignItems="flex-start" sx={{ mb: 0.5 }}>
                              <Box sx={{ mt: '6px', width: 8, height: 8, borderRadius: 999, bgcolor: 'primary.main' }} />
                              <Typography>{h}</Typography>
                            </Stack>
                          ))}
                        </Box>

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
