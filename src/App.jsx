import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navBar";
import DashBoard from "./pages/MainScreens/Dashboard/Dashboard";
import ReportPage from "./pages/MainScreens/Report/report";
import CompliancePage from "./pages/MainScreens/Compliance/compliance";
import AlertPage from "./pages/MainScreens/Alerts/alert";
import SettingPage from "./pages/MainScreens/Settings/setting";
import SupportPage from "./pages/MainScreens/Support/support";
import { MainEventsPage, DhcpLogsPage, DnsLogsPage, LdapLogsPage, SecurityEventsPage, LinuxEventsPage, LogSeverityEventPage } from "./pages/MainScreens/Dashboard/SubComponents";


function App() {
  return (
    <BrowserRouter>
         <NavBar/>
            <Routes>
              <Route path="/" element={<DashBoard/>}>
                  <Route path="/" element={<MainEventsPage/>}/>
                  <Route path="dhcpLogs" element={<DhcpLogsPage/>}/>
                  <Route path="dnsLogs" element={<DnsLogsPage/>}/>
                  <Route path="ldapLogs" element={<LdapLogsPage/>}/>
                  <Route path="securityEvents" element={<SecurityEventsPage/>}/>
                  <Route path="linuxEvents" element={<LinuxEventsPage/>}/>
                  <Route path="logSeverityEvents" element={<LogSeverityEventPage/>}/>
              </Route>
              <Route path="/report" element={<ReportPage/>}/>
              <Route path="/compliance" element={<CompliancePage/>}/>
              <Route path="/alerts" element={<AlertPage/>}/>
              <Route path="/setting" element={<SettingPage/>}/>
              <Route path="/support" element={<SupportPage/>}/>
            </Routes>
    </BrowserRouter>
    
  );
}

export default App;


