"use client";

import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { getIcon } from "@/lib/iconMap";

export default function ServiceCard({ icon, title, desc, tags }) {
  return (
    <Card
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
            {getIcon(icon)}
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight={800} gutterBottom>
              {title}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {desc}
            </Typography>
            {tags && (
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.75,
                }}
              >
                {tags.map((t) => (
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
  );
}

