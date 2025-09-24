"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SubjectIcon from "@mui/icons-material/Title";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Stack spacing={2}>
      <Card
        sx={{
          position: "relative",
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
          backgroundImage: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(700px 260px at 20% -10%, rgba(34,197,94,0.10), transparent 60%)",
          }}
        />
        <CardContent sx={{ position: "relative" }}>
          <Typography variant="h4" fontWeight={900} gutterBottom>
            Contact
          </Typography>
          <Typography color="text.secondary">
            Let's build something great together. Send a message and I'll get
            back to you.
          </Typography>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Contact Form - Left Side */}
        <Grid item xs={12} lg={8}>
          <Card
            sx={{
              border: "1px solid",
              borderColor: "divider",
              backgroundImage: "none",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background:
                  "linear-gradient(90deg, rgba(34,197,94,1), rgba(34,197,94,0))",
              }}
            />
            <CardContent>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Stack spacing={3}>
                  {/* First Row - Name and Email */}
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Your name *"
                        fullWidth
                        required
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "background.paper",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        type="email"
                        label="Email address *"
                        fullWidth
                        required
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "background.paper",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  {/* Second Row - Phone and Subject */}
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        type="tel"
                        label="Phone (optional)"
                        fullWidth
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "background.paper",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Subject *"
                        fullWidth
                        required
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SubjectIcon />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "background.paper",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  {/* Message Field */}
                  <TextField
                    label="Your message *"
                    fullWidth
                    required
                    multiline
                    minRows={6}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <ChatIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "background.paper",
                      },
                    }}
                  />

                  {/* Buttons */}
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mt: 1 }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Chip
                        icon={<WhatsAppIcon />}
                        label="WhatsApp"
                        variant="outlined"
                        color="primary"
                        sx={{ borderRadius: 999, px: 1 }}
                      />
                      <Chip
                        icon={<CallIcon />}
                        label="Viber"
                        variant="outlined"
                        color="primary"
                        sx={{ borderRadius: 999, px: 1 }}
                      />
                    </Stack>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1,
                        fontSize: "1rem",
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side - Contact Info and Map */}
        <Grid item xs={12} lg={4}>
          <Stack spacing={3}>
            {/* Quick Contact Card */}
            <Card
              sx={{
                width: "439px",
                border: "1px solid",
                borderColor: "divider",
                backgroundImage: "none",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={800} gutterBottom>
                  Quick Contact
                </Typography>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <EmailIcon color="primary" />
                    <Typography color="text.secondary">
                      hello@vancreative.dev
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PhoneIcon color="primary" />
                    <Typography color="text.secondary">
                      (+1) 555-0123
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <WhatsAppIcon color="primary" />
                    <Typography color="text.secondary">
                      (+1) 555-0456
                    </Typography>
                  </Stack>
                </Stack>
                <Box
                  sx={{
                    mt: 2,
                    p: 1.5,
                    border: "1px dashed",
                    borderColor: "rgba(34,197,94,0.35)",
                    borderRadius: 2,
                    bgcolor: "rgba(34,197,94,0.06)",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    fontWeight={800}
                    gutterBottom
                  >
                    Availability
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    Mon–Fri, 8am–6pm (UTC-5)
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Address and Map Card */}
            <Card
              sx={{
                border: "1px solid",
                borderColor: "divider",
                backgroundImage: "none",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={800} gutterBottom>
                  Our Location
                </Typography>

                {/* Address */}
                <Stack spacing={1} sx={{ mb: 2 }}>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <LocationOnIcon color="primary" sx={{ mt: 0.5 }} />
                    <Box>
                      <Typography fontWeight={600}>
                        Van Creative Studio
                      </Typography>
                      <Typography color="text.secondary" variant="body2">
                        123 Creative Street
                        <br />
                        Innovation District
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>

                {/* Map Placeholder */}
                <Box
                  sx={{
                    height: 200,
                    borderRadius: 2,
                    backgroundColor: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "primary.main",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Map Grid Pattern */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `
                        linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Map Center Marker */}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      textAlign: "center",
                    }}
                  >
                    <MapIcon sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="body2" fontWeight={600}>
                      Interactive Map
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Click to view larger map
                    </Typography>
                  </Box>

                  {/* Location Pin */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -60%)",
                      width: 12,
                      height: 12,
                      backgroundColor: "primary.main",
                      borderRadius: "50% 50% 50% 0",
                      transformOrigin: "center",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: 6,
                        height: 6,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      },
                    }}
                  />
                </Box>

                {/* Directions Button */}
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  startIcon={<LocationOnIcon />}
                  sx={{ mt: 2 }}
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
