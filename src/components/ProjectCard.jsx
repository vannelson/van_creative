"use client";

import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, IconButton, Stack, Typography } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

export default function ProjectCard({ project, onOpen }) {
  const p = project;
  return (
    <Card
      sx={{
        width: 310,
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        borderColor: "divider",
        backgroundImage: "none",
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        transition:
          "transform .22s ease, border-color .22s ease, box-shadow .22s ease",
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
          transform: "translateY(-4px)",
          borderColor: "primary.main",
          boxShadow: "0 14px 40px rgba(34,197,94,0.16)",
        },
      }}
    >
      <CardActionArea onClick={() => onOpen(p)} sx={{ alignItems: "stretch", position: "relative" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={p.images[0]}
            alt={p.title}
            sx={{ width: 310, aspectRatio: "16 / 9", height: "auto", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.0))",
              opacity: 0,
              transition: "opacity .2s ease",
              pointerEvents: "none",
              ".MuiCardActionArea-root:hover &": { opacity: 1 },
            }}
          />
          <Chip
            label={`${p.images.length} images`}
            size="small"
            sx={{
              position: "absolute",
              left: 8,
              bottom: 8,
              bgcolor: "rgba(15,17,19,0.7)",
              color: "white",
              borderColor: "rgba(255,255,255,0.25)",
              height: 22,
              "& .MuiChip-label": { px: 0.75, fontSize: 11 },
            }}
            variant="outlined"
          />
          <IconButton
            component="span"
            aria-hidden
            sx={{
              position: "absolute",
              right: 8,
              bottom: 8,
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              opacity: 0,
              transition: "opacity .2s ease",
              ".MuiCardActionArea-root:hover &": { opacity: 1 },
            }}
          >
            <ZoomInIcon fontSize="small" />
          </IconButton>
        </Box>
        <CardContent>
          <Typography fontWeight={900} gutterBottom noWrap sx={{ fontSize: 16 }}>
            {p.title}
          </Typography>
          <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
            {p.desc}
          </Typography>
          {p.objective && (
            <Box
              sx={{
                p: 1,
                border: "1px dashed",
                borderColor: "rgba(34,197,94,0.35)",
                borderRadius: 2,
                bgcolor: "rgba(34,197,94,0.06)",
                mb: 1,
              }}
            >
              <Typography
                variant="caption"
                color="primary"
                fontWeight={800}
                sx={{ display: "block", mb: 0.25 }}
              >
                Objective
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {p.objective}
              </Typography>
            </Box>
          )}
          <Stack direction="row" spacing={0.75} flexWrap="wrap">
            {p.tags.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                variant="outlined"
                color="primary"
                sx={{ borderRadius: 999, height: 22, "& .MuiChip-label": { px: 0.75, fontSize: 11 } }}
              />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

