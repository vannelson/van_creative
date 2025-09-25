"use client";

import { Avatar, Box, Chip, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Tooltip, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import siteData from "@/data/siteData.json";

export default function Sidebar() {
  return (
    <Paper
      sx={{
        p: { xs: 2, md: 3 },
        position: { xs: "static", md: "sticky" },
        top: { md: 0 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
        overflow: "hidden",
        background: `linear-gradient(180deg, rgba(34, 197, 94, 0.08), transparent 20%),
          linear-gradient(180deg, rgba(16, 185, 129, 0.06), transparent 60%)`,
        border: { xs: "none", md: "1px solid" },
        borderColor: { xs: "transparent", md: "divider" },
        backdropFilter: "saturate(120%) blur(8px)",
        borderRadius: { xs: 0, md: 2 },
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Avatar src={siteData.profile.avatar} alt="Profile" sx={{ width: { xs: 96, md: 120, lg: 140 }, height: { xs: 96, md: 120, lg: 140 }, bgcolor: "primary.main", color: "primary.contrastText", fontWeight: 800, boxShadow: (t) => `0 0 0 3px ${t.palette.primary.main}33, 0 0 0 6px rgba(0,0,0,0.25)` }}>
          {siteData.profile.initials}
        </Avatar>
        <Box textAlign="center">
          <Typography variant="h6">{siteData.profile.name}</Typography>
          <Chip label={siteData.profile.title} color="primary" variant="filled" size="small" sx={{ mt: 1, fontWeight: 700 }} />
        </Box>
      </Stack>

      <Divider flexItem sx={{ borderColor: "divider" }} />

      <List sx={{ width: "100%", py: 0, flex: 1, overflow: "auto" }}>
        <ListItem dense>
          <ListItemIcon><EmailIcon /></ListItemIcon>
          <ListItemText primary={siteData.profile.email} secondary="Email" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon><PhoneIcon /></ListItemIcon>
          <ListItemText primary={siteData.profile.phone} secondary="Phone" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon><WhatsAppIcon /></ListItemIcon>
          <ListItemText primary={siteData.profile.whatsapp} secondary="WhatsApp" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon><PhoneIcon /></ListItemIcon>
          <ListItemText primary={siteData.profile.viber} secondary="Viber" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon><LocationOnIcon /></ListItemIcon>
          <ListItemText primary={siteData.profile.location} secondary="Location" />
        </ListItem>
      </List>

      <Stack
        direction="row"
        spacing={1.25}
        justifyContent="center"
        sx={{
          "& .MuiIconButton-root:hover": { transform: "translateY(-2px)" },
          "& .MuiIconButton-root": { transition: "transform .2s ease" },
        }}
      >
        <Tooltip title="GitHub">
          <IconButton color="primary" size="small" href={siteData.profile.social.github || undefined} target="_blank" rel="noreferrer">
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton color="primary" size="small" href={siteData.profile.social.linkedin || undefined} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Paper>
  );
}

