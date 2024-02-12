import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Components/Global/TopBar";
import Sidebar from "./Components/Global/Sidebar";
import Dashboard from "./Components/dashboard/Dashboard";
import Team from "./Components/dashboard/Team";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Contacts from "./Components/dashboard/Contacts";
import Invoices from "./Components/dashboard/Invoices";
import ProfileForm from "./Components/dashboard/ProfileForm";
import FAQ from "./Components/dashboard/FAQ";
import Pie from "./Components/dashboard/Graphs/Pie";
import BarChart from "./Components/dashboard/Graphs/BarChart";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<ProfileForm />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<BarChart />} />
              <Route path="/pie" element={<Pie />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
