import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Components/Global/TopBar";
import Sidebar from "./Components/Global/Sidebar";
import Dashboard from "./Components/dashboard/Dashboard";
import Team from "./Components/dashboard/Team";
import Contacts from "./Components/dashboard/Contacts";
import Invoices from "./Components/dashboard/Invoices";
import ProfileForm from "./Components/dashboard/ProfileForm";
import FAQ from "./Components/dashboard/FAQ";
import Bar from "./Components/dashboard/bar";
import Pie from "./Components/dashboard/pie";
import Line from "./Components/dashboard/line";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import LandingPage from "./Components/LandingPage"; // Import your landing page component
import Login from "./Components/Login";
import Signup from "./Components/Signup";

// Reusable component to render sidebar and topbar along with content
function SidebarLayout({ children }) {
  return (
    <div className="app " style={{ display: "flex" }}>
      <Sidebar />
      <main className="content">
        <Topbar />
        {children}
      </main>
    </div>
  );
}

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{ height: "100vh" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/*" element={<DashboardWithSidebar />} />
            <Route
              path="/team"
              element={
                <SidebarLayout>
                  <Team />
                </SidebarLayout>
              }
            />
            <Route
              path="/contacts"
              element={
                <SidebarLayout>
                  <Contacts />
                </SidebarLayout>
              }
            />
            <Route
              path="/invoices"
              element={
                <SidebarLayout>
                  <Invoices />
                </SidebarLayout>
              }
            />
            <Route
              path="/form"
              element={
                <SidebarLayout>
                  <ProfileForm />
                </SidebarLayout>
              }
            />
            <Route
              path="/faq"
              element={
                <SidebarLayout>
                  <FAQ />
                </SidebarLayout>
              }
            />
            <Route
              path="/bar"
              element={
                <SidebarLayout>
                  <Bar />
                </SidebarLayout>
              }
            />
            <Route
              path="/pie"
              element={
                <SidebarLayout>
                  <Pie />
                </SidebarLayout>
              }
            />
            <Route
              path="/line"
              element={
                <SidebarLayout>
                  <Line />
                </SidebarLayout>
              }
            />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function DashboardWithSidebar() {
  return (
    <SidebarLayout>
      <Dashboard />
    </SidebarLayout>
  );
}

export default App;
