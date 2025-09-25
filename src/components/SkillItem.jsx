"use client";

import {
  Box,
  Chip,
  Rating,
  Stack,
  Typography,
  LinearProgress,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { getTechIcon } from "@/lib/techIcons";

export default function SkillItem({ name, score, max = 10 }) {
  const percent = Math.max(0, Math.min(100, (score / max) * 100));
  return (
    <Box
      sx={{
        position: "relative",
        p: 1.5,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        backgroundImage: "none",
        transition:
          "transform .18s ease, border-color .18s ease, box-shadow .18s ease",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 90,
          right: 20,
          height: 3,
          background:
            "linear-gradient(90deg, rgba(34,197,94,1), rgba(34,197,94,0))",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
        "&:hover": {
          transform: "translateY(-2px)",
          borderColor: "primary.main",
          boxShadow: "0 10px 24px rgba(34,197,94,0.12)",
        },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center">
        {getTechIcon(name)}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 0.5 }}
          >
            <Typography fontWeight={800} noWrap>
              {name}
            </Typography>
            <Chip
              size="small"
              label={`${score}/${max}`}
              sx={{ borderRadius: 999 }}
            />
          </Stack>
          <Rating
            value={score}
            max={max}
            readOnly
            icon={<StarRoundedIcon fontSize="inherit" />}
            emptyIcon={<StarOutlineRoundedIcon fontSize="inherit" />}
            sx={{ color: "primary.main", fontSize: 18, mb: 0.5 }}
          />
          <LinearProgress
            variant="determinate"
            value={percent}
            sx={{
              height: 6,
              borderRadius: 999,
              backgroundColor: (t) =>
                t.palette.mode === "dark" ? "#1f2327" : t.palette.grey[200],
              "& .MuiLinearProgress-bar": { borderRadius: 999 },
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
