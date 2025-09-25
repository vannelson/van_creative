"use client";

import React, { useState } from "react";
import { Box, Card, CardContent, Dialog, DialogContent, DialogTitle, DialogActions, Button, Stack, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProjectCard from "@/components/ProjectCard";
import siteData from "@/data/siteData.json";

export default function ProjectsPage() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [idx, setIdx] = useState(0);

  const handleOpen = (p) => {
    setActive(p);
    setIdx(0);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const next = () => setIdx((i) => (i + 1) % (active?.images?.length || 1));
  const prev = () => setIdx((i) => (i - 1 + (active?.images?.length || 1)) % (active?.images?.length || 1));

  return (
    <Stack spacing={2}>
      <Card sx={{ border: '1px solid', borderColor: 'divider', backgroundImage: 'none' }}>
        <CardContent>
          <Typography variant="h5" fontWeight={800} gutterBottom>Projects</Typography>
          <Typography color="text.secondary">A selection of recent work. Click a card to see more.</Typography>
        </CardContent>
      </Card>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 310px)', md: 'repeat(3, 310px)' },
        justifyContent: 'center',
        gap: 2
      }}>
        {siteData.projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={handleOpen} />
        ))}
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography component="span" variant="h6" fontWeight={800}>{active?.title}</Typography>
          <IconButton onClick={handleClose} aria-label="Close"><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {active && (
            <Box sx={{ position: 'relative' }}>
              <Box component="img" src={active.images[idx]} alt={`${active.title} ${idx+1}`} sx={{ width: '100%', aspectRatio: '16 / 9', height: 'auto', objectFit: 'cover', borderRadius: 2, border: '1px solid', borderColor: 'divider', background: '#0f1113' }} />
              {active.images.length > 1 && (
                <>
                  <IconButton onClick={prev} sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.4)' }} aria-label="Previous"><ArrowBackIosNewIcon fontSize="small" /></IconButton>
                  <IconButton onClick={next} sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.4)' }} aria-label="Next"><ArrowForwardIosIcon fontSize="small" /></IconButton>
                </>
              )}
              <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1 }}>
                {active.images.map((_, i) => (
                  <Box key={i} onClick={() => setIdx(i)} sx={{ width: 10, height: 10, borderRadius: 999, cursor: 'pointer', bgcolor: i === idx ? 'primary.main' : 'grey.700' }} />
                ))}
              </Stack>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" fontWeight={800} gutterBottom>Description</Typography>
                <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>{active.desc}</Typography>
                {active.objective && (
                  <>
                    <Typography variant="subtitle2" fontWeight={800} color="primary" gutterBottom>Objective</Typography>
                    <Typography color="text.secondary" variant="body2">{active.objective}</Typography>
                  </>
                )}
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button href={active?.url || '#'} target="_blank" rel="noreferrer" variant="contained" color="primary">
            Go to Project
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
