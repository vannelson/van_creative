"use client";

import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory"; // Vue (triangle)
import BlurOnIcon from "@mui/icons-material/BlurOn"; // React
import AllInclusiveIcon from "@mui/icons-material/AllInclusive"; // jQuery
import TsunamiIcon from "@mui/icons-material/Tsunami"; // Tailwind (waves)
import BlurCircularIcon from "@mui/icons-material/BlurCircular"; // Quasar
import SpaIcon from "@mui/icons-material/Spa"; // Chakra UI
import ViewWeekIcon from "@mui/icons-material/ViewWeek"; // Material UI
import DiamondIcon from "@mui/icons-material/Diamond"; // Laravel
import RouteIcon from "@mui/icons-material/Route"; // Express/Node
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment"; // CodeIgniter
import StorageIcon from "@mui/icons-material/Storage"; // DBs
import CloudQueueIcon from "@mui/icons-material/CloudQueue"; // Cloud/Azure
import GitHubIcon from "@mui/icons-material/GitHub"; // Git
import ScienceIcon from "@mui/icons-material/Science"; // Testing
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice"; // Postman
import ApiIcon from "@mui/icons-material/Api"; // Swagger
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"; // GoHighLevel
import WhatshotIcon from "@mui/icons-material/Whatshot"; // Firebase
import AutoModeIcon from "@mui/icons-material/AutoMode"; // Power Automate
import { Box } from "@mui/material";

const map = {
  Vue: { C: ChangeHistoryIcon, color: "#42b883" },
  React: { C: BlurOnIcon, color: "#61dafb" },
  jQuery: { C: AllInclusiveIcon, color: "#0769ad" },
  Tailwind: { C: TsunamiIcon, color: "#38bdf8" },
  Quasar: { C: BlurCircularIcon, color: "#1976d2" },
  "Chakra UI": { C: SpaIcon, color: "#3cc6aa" },
  "Material UI": { C: ViewWeekIcon, color: "#00b0ff" },
  Laravel: { C: DiamondIcon, color: "#fb503b" },
  "Express (Node.js)": { C: RouteIcon, color: "#3c873a" },
  CodeIgniter: { C: LocalFireDepartmentIcon, color: "#ef4444" },
  MySQL: { C: StorageIcon, color: "#4479A1" },
  MSSQL: { C: StorageIcon, color: "#CC2927" },
  Firebase: { C: WhatshotIcon, color: "#FFCA28" },
  "Azure DevOps": { C: CloudQueueIcon, color: "#0078D4" },
  Git: { C: GitHubIcon, color: "#f97316" },
  PHPUnit: { C: ScienceIcon, color: "#8892bf" },
  Cypress: { C: ScienceIcon, color: "#00bf88" },
  Postman: { C: LocalPostOfficeIcon, color: "#ff6c37" },
  Swagger: { C: ApiIcon, color: "#85EA2D" },
  "Power Automate": { C: AutoModeIcon, color: "#0066ff" },
  GoHighLevel: { C: RocketLaunchIcon, color: "#0ea5e9" },
};

export function getTechIcon(name) {
  const entry = map[name];
  if (!entry) return null;
  const { C, color } = entry;
  return (
    <Box sx={{ width: 36, height: 36, borderRadius: 999, display: "inline-flex", alignItems: "center", justifyContent: "center", bgcolor: `${color}22`, color }}>
      <C fontSize="small" />
    </Box>
  );
}
