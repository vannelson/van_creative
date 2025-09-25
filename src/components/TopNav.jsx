"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Chip, Stack, Paper, Drawer, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "@/components/Sidebar";
import siteData from "@/data/siteData.json";
import { getIcon } from "@/lib/iconMap";

export default function TopNav() {
  const pathname = usePathname() || "/about";
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 1, sm: 1.25 },
        border: { xs: 'none', md: '1px solid' },
        borderColor: { xs: 'transparent', md: 'divider' },
        borderRadius: { xs: 0, md: 2 },
        backdropFilter: "saturate(120%) blur(6px)",
        width: "100%",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        alignItems="center"
        sx={{ flexWrap: "wrap", rowGap: 1 }}
      >
        <Box sx={{ display: { xs: "inline-flex", md: "none" }, mr: 1 }}>
          <IconButton onClick={() => setOpen(true)} size="small" color="primary" aria-label="Open sidebar">
            <MenuIcon />
          </IconButton>
        </Box>
        {siteData.nav.map((l) => {
          const active = pathname === l.href || (pathname === "/" && l.href === "/about");
          return (
            <Chip
              key={l.href}
              component="button"
              icon={getIcon(l.icon, { fontSize: "small" })}
              label={l.label}
              color={active ? "primary" : undefined}
              variant={active ? "filled" : "outlined"}
              clickable
              onClick={() => router.push(l.href)}
              sx={{
                fontWeight: active ? 800 : 700,
                borderRadius: 999,
                px: { xs: 1, sm: 1.5 },
                py: { xs: 0.75, sm: 1 },
                fontSize: { xs: 13, sm: 15 },
                letterSpacing: 0.2,
                "& .MuiChip-icon": { fontSize: { xs: 18, sm: 20 } },
                transition: "transform .18s ease, background-color .18s ease",
                "&:hover": { transform: "translateY(-1px)" },
              }}
            />
          );
        })}
      </Stack>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)} sx={{ display: { xs: "block", md: "none" } }}>
        <Box sx={{ width: 320, p: 2 }} role="presentation" onClick={() => setOpen(false)}>
          <Sidebar />
        </Box>
      </Drawer>
    </Paper>
  );
}
