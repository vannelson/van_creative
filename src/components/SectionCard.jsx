"use client";

import { Card, CardContent } from "@mui/material";
import { m } from "framer-motion";

export default function SectionCard({ children, sx, motion = true, delay = 0 }) {
  const content = (
    <Card elevation={1} sx={{ borderColor: "divider", backdropFilter: "saturate(120%) blur(6px)", ...sx }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
  if (!motion) return content;
  return (
    <m.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay }}>
      {content}
    </m.div>
  );
}
