"use client";

import { Typography, Stack } from "@mui/material";

export default function BlogPage() {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ minHeight: 200 }}>
      <Typography variant="h3" fontWeight={900} letterSpacing={2}>
        BLOG
      </Typography>
    </Stack>
  );
}
