"use client";

import { Box, Container, Stack, Paper } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

export default function SiteShell({ children }) {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '320px 1fr' },
        gap: { xs: 2, md: 3 },
        alignItems: 'start'
      }}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Sidebar />
        </Box>
        <Box>
          <Box sx={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: 2, minHeight: { md: '100vh' } }}>
            <Box sx={{ position: 'sticky', top: 0, zIndex: (t) => t.zIndex.appBar }}>
              <TopNav />
            </Box>
            <Box component="main" sx={{ px: { xs: 0, md: 0 } }}>
              <Paper sx={{ p: { xs: 2, md: 3 }, border: '1px solid', borderColor: 'divider', backgroundImage: 'none', color: 'text.primary' }}>
                {children}
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
