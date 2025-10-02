"use client";

import { Box, Button, Divider, Stack, Typography } from "@mui/material";

export default function ResumePage() {
  const filePath = "/Van%20Nelson%20Creative%20Resume.pdf";

  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h5" fontWeight={800} gutterBottom>
          Resume
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preview the PDF below or download a copy.
        </Typography>
      </Box>

      <Stack direction="row" spacing={1.5}>
        <Button
          component="a"
          href={filePath}
          download={"Van Nelson Creative Resume.pdf"}
          variant="contained"
          color="primary"
          size="small"
        >
          Download Resume
        </Button>
        <Button
          component="a"
          href={filePath}
          target="_blank"
          rel="noreferrer"
          variant="outlined"
          size="small"
        >
          Open in New Tab
        </Button>
      </Stack>

      <Divider />

      <Box
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          overflow: "hidden",
          height: { xs: 520, md: 720 },
          backgroundColor: "background.default",
        }}
      >
        <Box
          component="iframe"
          src={filePath}
          title="Resume Preview"
          sx={{ width: "100%", height: "100%", border: 0 }}
        />
      </Box>
    </Stack>
  );
}

