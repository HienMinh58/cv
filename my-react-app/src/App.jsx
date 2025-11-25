import React from "react";
import { Box, Container, Typography, Chip, Grid, Card, CardContent, Avatar } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CodeIcon from "@mui/icons-material/Code";
import avatarImg from "./assets/avatar.png";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SmartToyIcon from "@mui/icons-material/SmartToy";
export default function CV() {
  return (
    <Container maxWidth="md" sx={{ py: 6, fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Avatar
          src={avatarImg}
          alt="Nguyen Hien Minh"
          sx={{ width: 120, height: 120, mx: "auto", mb: 2, boxShadow: 4 }}
        />
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Nguyen Hien Minh
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Computer Science • University of Auckland
        </Typography>
        <Typography variant="body1" color="text.secondary">
          GPA: <strong>9/9</strong>
        </Typography>
      </Box>

      {/* Awards */}
      <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <EmojiEventsIcon color="primary" />
            <Typography variant="h5" fontWeight={700}>Awards</Typography>
          </Box>
          <Typography variant="body1">TNE High Achiever Award</Typography>
        </CardContent>
      </Card>

      {/* AI / ML SKILLS */}
      <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" mb={2} fontWeight={700} display="flex" alignItems="center">
            <SmartToyIcon sx={{ mr: 1 }} /> AI / ML Skills
          </Typography>

          <Grid container spacing={1}>
            {[
              "Data Preprocessing & Feature Engineering",
              "Supervised & Unsupervised Learning",
              "Deep Learning Basics",
              "Model Evaluation / Metric Analysis",
              "LLM Integration",
              "RAG Systems",
              "Multi agents architecture",
              "Semantic Chunking",
              "Vector Databases",
              "Embedding Pipelines",
            ].map((skill) => (
              <Grid item key={skill}>
                <Chip label={skill} color="primary" variant="outlined" />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* SKILLS - PROGRAMMING */}
      <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" mb={2} fontWeight={700} display="flex" alignItems="center" >
            <CodeIcon sx={{ mr: 1 }} /> Programming Languages
          </Typography>

          <Chip label="Python" color="success" variant="filled" />
          <Chip label="JavaScript" color="success" variant="filled" />
          <Chip label="C++" color="success" variant="filled" />
          <Chip label="HTML" color="success" variant="filled" />
          <Chip label="CSS" color="success" variant="filled" />
          <Chip label="RStudio" color="success" variant="filled" />
        </CardContent>
      </Card>

      {/* Frameworks */}
      <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <WorkIcon color="primary" />
            <Typography variant="h5" fontWeight={700}>Frameworks</Typography>
          </Box>
          <Grid container spacing={1}>
            {["FastAPI", "Flask", "LangChain"].map((f) => (
              <Grid item key={f}>
                <Chip label={f} color="secondary" />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Tools & DB */}
      <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <WorkIcon color="primary" />
            <Typography variant="h5" fontWeight={700}>Tools & Databases</Typography>
          </Box>
          <Grid container spacing={1}>
            {["Docker", "PostgreSQL", "MongoDB"].map((t) => (
              <Grid item key={t}>
                <Chip label={t} color="success" variant="outlined" />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Education */}
      <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <SchoolIcon color="primary" />
            <Typography variant="h5" fontWeight={700}>Education</Typography>
          </Box>
          <Typography variant="body1" fontWeight={600}>
            University of Auckland – BSc in Computer Science (Honours)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            GPA: 9/9
          </Typography>
            <Typography variant="body1" fontWeight={600}>
            Ho Chi Minh University of Technology – BSc in Computer Science (2023-2025)
          </Typography>
        </CardContent>
      </Card>

      {/* PROJECTS */}
      <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight={700}>
            <AutoAwesomeIcon sx={{ mr: 1 }} /> Projects
          </Typography>

          <ul style={{ paddingLeft: "20px" }}>
            <li>RAG System with LangChain</li>
            <li>AI Chatbot using LLM API</li>
            <li>LLM-based API Gateway</li>
            <li>AI-driven Web Application</li>
            <li>Vector Database</li>
            <li>Machine Learning Classification & Regression models</li>
            <li>Facebook Clone (MERN Stack) — full-stack social media application</li>
          </ul>
        </CardContent>
      </Card>
      {/* Contact Section */}
      <Box mt={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>Contact</Typography>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography>Email: <a href="mailto:nguyenhienminh0508@gmail.com" className="text-blue-600">nguyenhienminh0508@gmail.com</a></Typography>
        <Typography>GitHub: <a href="https://github.com/HienMinh58" target="_blank" className="text-blue-600">github.com/HienMinh58</a></Typography>
        <Typography>LinkedIn: <a href="https://www.linkedin.com/in/hi%E1%BB%81n-minh-nguy%E1%BB%85n-22654b285/" target="_blank" className="text-blue-600">LinkedIn Profile</a></Typography>
        </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
