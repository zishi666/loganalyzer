import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navBar";
import DashBoard from "./pages/MainScreens/Dashboard/Dashboard";
import ReportPage from "./pages/MainScreens/Report/Report";
import CompliancePage from "./pages/MainScreens/Compliance/Compliance";
import AlertPage from "./pages/MainScreens/Alerts/Alert";
import SettingPage from "./pages/MainScreens/Settings/Setting";
import SupportPage from "./pages/MainScreens/Support/Support";
import { MainEventsPage, DhcpLogsPage, DnsLogsPage, LdapLogsPage, SecurityEventsPage, LinuxEventsPage, LogSeverityEventPage } from "./pages/MainScreens/Dashboard/DashboardSubPages";
import { AllEventsPage, TrendReportPage, DeviceSeverityReportPage, SystemEventPage, LinuxSetupPage, ManageReportPage } from "./pages/MainScreens/Report/ReportSubPages";
import { RiskPosturePage, ConfiguredPage, ManagementPage, SchedulePage } from "./pages/MainScreens/Compliance/ComlianceSubPages";
import { SelectViewPage, AddAlertEmailPage, ExportAsPage, CustomAlertPage } from "./pages/MainScreens/Alerts/AlertSubPages";
import { LogConfigurationPage, AdminSettingsPage, SystemSettingPage } from "./pages/MainScreens/Settings/SettingSubPages";
import { SupportDummyPage } from "./pages/MainScreens/Support/SupportSubPages";
import { TestComponent } from "./components/dashboardComponents/middlComponent";
import './App.css';


function App() {

  return (
    <BrowserRouter>
         <NavBar />
            <Routes> 

              <Route path="/" element={<DashBoard/>}>
                  <Route path="/" element={<MainEventsPage/>}/>
                  <Route path="dhcpLogs" element={<DhcpLogsPage/>}/>
                  <Route path="dnsLogs" element={<DnsLogsPage/>}/>
                  <Route path="ldapLogs" element={<LdapLogsPage/>}/>
                  <Route path="securityEvents" element={<SecurityEventsPage/>}/>
                  <Route path="linuxEvents" element={<LinuxEventsPage/>}/>
                  <Route path="logSeverityEvents" element={<LogSeverityEventPage/>}/>
                  <Route path="/:id" element={<TestComponent/>}/>
              </Route>

              <Route path="/report" element={<ReportPage/>}>
                 <Route path="/report/" element={<AllEventsPage/>}/>
                 <Route path="/report/trends" element={<TrendReportPage/>}/>
                 <Route path="/report/deviceSeverity" element={<DeviceSeverityReportPage/>}/>
                 <Route path="/report/system" element={<SystemEventPage/>}/>
                 <Route path="/report/linuxSetup" element={<LinuxSetupPage/>}/>
                 <Route path="/report/ManageReport" element={<ManageReportPage/>}/>
              </Route>

              <Route path="/compliance" element={<CompliancePage/>}>
                 <Route path="/compliance/" element={<RiskPosturePage/>}/>
                 <Route path="/compliance/configured" element={<ConfiguredPage/>}/>
                 <Route path="/compliance/manage" element={<ManagementPage/>}/>
                 <Route path="/compliance/schedule" element={<SchedulePage/>}/>
              </Route>

              <Route path="/alerts" element={<AlertPage/>}>
                 <Route path="/alerts/" element={<SelectViewPage/>}/>
                 <Route path="/alerts/add-alert-email" element={<AddAlertEmailPage/>}/>
                 <Route path="/alerts/export-as" element={<ExportAsPage/>}/>
                 <Route path="/alerts/custom-alert" element={<CustomAlertPage/>}/>
              </Route>

              <Route path="/setting" element={<SettingPage/>}>
                 <Route path="/setting/" element={<LogConfigurationPage/>}/>
                 <Route path="/setting/admin-setting" element={<AdminSettingsPage/>}/>
                 <Route path="/setting/system-setting" element={<SystemSettingPage/>}/>
              </Route>
              
              <Route path="/support" element={<SupportPage/>}>
                  <Route path="/support/" element={<SupportDummyPage/>}/>
              </Route>
            
            </Routes>
    </BrowserRouter>
    
  );
}

export default App;


