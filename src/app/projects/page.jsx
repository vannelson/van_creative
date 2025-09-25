"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Grid,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const projects = [
  {
    id: "project1",
    title: "Project One",
    desc: "A modern web platform showcasing clean UI and smooth UX.",
    objective: "Deliver a fast, accessible MVP with polished visuals.",
    images: ["/project1/1.PNG", "/project1/2.PNG", "/project1/3.PNG"],
    url: "#",
    tags: ["Next.js", "MUI", "Design"],
  },
  {
    id: "project2",
    title: "Project Two",
    desc: "A data-driven service with dashboards and automation.",
    objective: "Automate manual workflows and surface insights quickly.",
    images: ["/project2/1.jpg", "/project2/2.jpg", "/project2/3.jpg"],
    url: "#",
    tags: ["Automation", "APIs", "Analytics"],
  },
  {
    id: "project3",
    title: "Project Three",
    desc: "A robust application with a delightful mobile-first experience.",
    objective: "Optimize core flows for mobile usage and performance.",
    images: ["/project3/1.jpg", "/project3/2.jpg", "/project3/3.jpg"],
    url: "#",
    tags: ["Mobile-first", "Performance", "UX"],
  },
];

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
        {projects.map((p) => (
          <Card key={p.id} sx={{
            width: 310,
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid',
            borderColor: 'divider',
            backgroundImage: 'none',
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
            transition: 'transform .22s ease, border-color .22s ease, box-shadow .22s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: 'linear-gradient(90deg, rgba(34,197,94,1), rgba(34,197,94,0))'
            },
            '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main', boxShadow: '0 14px 40px rgba(34,197,94,0.16)' }
          }}>
            <CardActionArea onClick={() => handleOpen(p)} sx={{ alignItems: 'stretch', position: 'relative' }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" image={p.images[0]} alt={p.title} sx={{ width: 310, aspectRatio: '16 / 9', height: 'auto', objectFit: 'cover' }} />
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.0))', opacity: 0, transition: 'opacity .2s ease', pointerEvents: 'none', '.MuiCardActionArea-root:hover &': { opacity: 1 } }} />
                <Chip label={`${p.images.length} images`} size="small" sx={{ position: 'absolute', left: 8, bottom: 8, bgcolor: 'rgba(15,17,19,0.7)', color: 'white', borderColor: 'rgba(255,255,255,0.25)', height: 22, '& .MuiChip-label': { px: 0.75, fontSize: 11 } }} variant="outlined" />
                <IconButton component="span" aria-hidden sx={{ position: 'absolute', right: 8, bottom: 8, bgcolor: 'rgba(0,0,0,0.5)', color: 'white', opacity: 0, transition: 'opacity .2s ease', '.MuiCardActionArea-root:hover &': { opacity: 1 } }}>
                  <ZoomInIcon fontSize="small" />
                </IconButton>
              </Box>
              <CardContent>
                <Typography fontWeight={900} gutterBottom noWrap sx={{ fontSize: 16 }}>{p.title}</Typography>
                <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>{p.desc}</Typography>
                {p.objective && (
                  <Box sx={{ p: 1, border: '1px dashed', borderColor: 'rgba(34,197,94,0.35)', borderRadius: 2, bgcolor: 'rgba(34,197,94,0.06)', mb: 1 }}>
                    <Typography variant="caption" color="primary" fontWeight={800} sx={{ display: 'block', mb: 0.25 }}>Objective</Typography>
                    <Typography variant="body2" color="text.secondary">{p.objective}</Typography>
                  </Box>
                )}
                <Stack direction="row" spacing={0.75} flexWrap="wrap">
                  {p.tags.map((t) => (
                    <Chip key={t} label={t} size="small" variant="outlined" color="primary" sx={{ borderRadius: 999, height: 22, '& .MuiChip-label': { px: 0.75, fontSize: 11 } }} />
                  ))}
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
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
