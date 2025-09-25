"use client";

import {
  Avatar,
  Box,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
        <Avatar
          src="/profile.jpg"
          alt="Profile"
          sx={{
            width: { xs: 96, md: 120, lg: 140 },
            height: { xs: 96, md: 120, lg: 140 },
            bgcolor: "primary.main",
            color: "primary.contrastText",
            fontWeight: 800,
            boxShadow: (t) =>
              `0 0 0 3px ${t.palette.primary.main}33, 0 0 0 6px rgba(0,0,0,0.25)`,
          }}
        >
          VC
        </Avatar>
        <Box textAlign="center">
          <Typography variant="h6">Van Nelson Sim P Umbay</Typography>
          <Chip
            label="Full-Stack Developer"
            color="primary"
            variant="filled"
            size="small"
            sx={{ mt: 1, fontWeight: 700 }}
          />
        </Box>
      </Stack>

      <Divider flexItem sx={{ borderColor: "divider" }} />

      <List sx={{ width: "100%", py: 0, flex: 1, overflow: "auto" }}>
        <ListItem dense>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="hello@vancreative.dev" secondary="Email" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="0993 854 5594" secondary="Phone" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon>
            <WhatsAppIcon />
          </ListItemIcon>
          <ListItemText primary="0993 854 5594" secondary="WhatsApp" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="0916 982 5856" secondary="Viber" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Remote — Worldwide" secondary="Location" />
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
          <IconButton
            color="primary"
            size="small"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            color="primary"
            size="small"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Paper>
  );
}
