"use client";

import { Box, Card, CardContent, Chip, Grid, Rating, Stack, Typography } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import siteData from "@/data/siteData.json";
import SkillItem from "@/components/SkillItem";

export default function SkillsPage() {
  const { frontend = [], backend = [], databaseCloud = [], automationTesting = [], automation = [] } = siteData.skills || {};
  return (
    <Stack spacing={2}>
      {/* Intro card */}
      <Card sx={{ position: "relative", overflow: "hidden", border: "1px solid", borderColor: "divider", backgroundImage: "none" }}>
        <Box sx={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(700px 260px at 20% -10%, rgba(34,197,94,0.10), transparent 60%)" }} />
        <CardContent sx={{ position: "relative" }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between">
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box sx={{ width: 40, height: 40, borderRadius: 999, display: "inline-flex", alignItems: "center", justifyContent: "center", bgcolor: "rgba(34,197,94,0.14)", color: "primary.main", border: "1px solid", borderColor: "rgba(34,197,94,0.35)" }}>
                <StarsIcon />
              </Box>
              <Box>
                <Typography variant="h4" fontWeight={900} sx={{ mb: 0 }}>Skills</Typography>
                <Typography color="text.secondary">A simple overview of my current stack with a 10‑star scale.</Typography>
              </Box>
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1} alignItems={{ xs: "flex-start", sm: "center" }}>
              <Chip size="small" label={`Frontend ${frontend.length}`} sx={{ borderRadius: 999 }} />
              <Chip size="small" label={`Backend ${backend.length}`} sx={{ borderRadius: 999 }} />
              <Chip size="small" label={`DB/Cloud/DevOps ${databaseCloud.length}`} sx={{ borderRadius: 999 }} />
              <Chip size="small" label={`Automation & Testing ${automationTesting.length}`} sx={{ borderRadius: 999 }} />
              <Chip size="small" label={`Automation ${automation.length}`} sx={{ borderRadius: 999 }} />
              <Box sx={{ display: { xs: "none", md: "block" }, ml: 1, opacity: 0.7 }}>
                <Rating value={10} max={10} readOnly sx={{ color: "primary.main", fontSize: 18 }} />
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', backgroundImage: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={800} gutterBottom>Frontend</Typography>
              <Grid container spacing={1.25}>
                {frontend.map((s) => (<Grid item xs={12} key={s.name}><SkillItem name={s.name} score={s.score} /></Grid>))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', backgroundImage: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={800} gutterBottom>Backend</Typography>
              <Grid container spacing={1.25}>
                {backend.map((s) => (<Grid item xs={12} key={s.name}><SkillItem name={s.name} score={s.score} /></Grid>))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', backgroundImage: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={800} gutterBottom>Database · Cloud · DevOps</Typography>
              <Grid container spacing={1.25}>
                {databaseCloud.map((s) => (<Grid item xs={12} key={s.name}><SkillItem name={s.name} score={s.score} /></Grid>))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '1px solid', borderColor: 'divider', backgroundImage: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={800} gutterBottom>Automation & Testing</Typography>
              <Grid container spacing={1.25}>
                {automationTesting.map((s) => (<Grid item xs={12} key={s.name}><SkillItem name={s.name} score={s.score} /></Grid>))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ border: '1px solid', borderColor: 'divider', backgroundImage: 'none' }}>
        <CardContent>
          <Typography variant="h6" fontWeight={800} gutterBottom>Automation</Typography>
          <Grid container spacing={1.25}>
            {automation.map((s) => (<Grid item xs={12} md={6} key={s.name}><SkillItem name={s.name} score={s.score} /></Grid>))}
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
}

