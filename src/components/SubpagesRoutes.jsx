import mainEvent from '../Asset/dashboardImages/allEvents.svg';
import dhcpLogs from '../Asset/dashboardImages/dhcp.svg';
import dnsLogs from '../Asset/dashboardImages/dns.svg';
import ldapLogs from '../Asset/dashboardImages/ldap.svg';
import securityEvents from '../Asset/dashboardImages/security.svg';
import linuxEvents from '../Asset/dashboardImages/linux.svg';
import logSeverityEvents from '../Asset/dashboardImages/logseverity.svg';

import allEvents from '../Asset/ReportImages/allEvents.svg';
import trends from '../Asset/ReportImages/trendReport.svg';
import deviceSeverity from '../Asset/ReportImages/deviceSeverity.svg';
import systemEvents from '../Asset/ReportImages/systemEvents.svg';
import linuxSetup from '../Asset/ReportImages/linux.svg';
import manageIcon from '../Asset/ReportImages/manageReport.svg';

import Risk from '../Asset/ComplianceImages/risk.svg';
import Configuration from '../Asset/ComplianceImages/configured.svg';
import Management from '../Asset/ComplianceImages/manage.svg';
import ScheduleIcon from '../Asset/ComplianceImages/schedule.svg';

import selctView from '../Asset/AlertImages/Select.svg';
import addEmail from '../Asset/AlertImages/addEmailAlert.svg';
import exportAs from '../Asset/AlertImages/exportAs.svg';
import customAlerting from '../Asset/AlertImages/customAlert.svg';

import logSetting from '../Asset/SettingImages/lodSetting.svg';
import adminSetting from '../Asset/SettingImages/adminSetting.svg';
import systemSetting from '../Asset/SettingImages/systemSetting.svg';


export const DashboradIconsData = [
   mainEvent, dhcpLogs, dnsLogs, ldapLogs, securityEvents, linuxEvents, logSeverityEvents
];

export const ReportIconsData = [
   allEvents, trends, deviceSeverity, systemEvents, linuxSetup, manageIcon
];

export const ComplianceIconsData = [
   Risk, Configuration, Management, ScheduleIcon
];

export const AlertIconsData = [
    selctView, addEmail, exportAs, customAlerting
];


export const SettiingIconsData = [
  logSetting, adminSetting, systemSetting
];

export const SupportIconsData = [
  addEmail
];

//Dashboard page Routes
export const DashboardRoutesLink = [
      ['/', 'Main Events'],
      ['dhcpLogs', 'DHCP Logs'],
      ['dnsLogs', 'DNS Logs'],
      ['ldapLogs', 'LDAP logs'],
      ['securityEvents', 'Security Events'],
      ['linuxEvents', 'Linux Events'],
      ['logSeverityEvents', 'Log Severity Events']
    ];

//Report page Routes
export const ReportRoutesLinks = [
      ['/report/', 'All Events'],
      ['/report/trends', 'Trend Reports'],
      ['/report/deviceSeverity', 'Device Severity Report'],
      ['/report/system', 'System Events'],
      ['/report/linuxSetup', 'Linux Setup Events'],
      ['/report/ManageReport', 'Manage Reports'],
];


//Compilance page Routes
export const CompilanceRoutesLinks = [
  ['/compliance/', 'Risk Posture'],
  ['/compliance/configured', 'Configured'],
  ['/compliance/manage', 'Manage'],
  ['/compliance/schedule', 'Schedule'],
];


//Alerts Page Routes
export const AlertsRoutesLinks = [
  ['/alerts/', 'Select View'],
  ['/alerts/add-alert-email', 'Add Alert Email'],
  ['/alerts/export-as', 'Export As'],
  ['/alerts/custom-alert', 'Custom Alert'],
];


//Settings page Routes
export const SettingsRoutesLinks = [
  ['/setting/', 'Log Configuration'],
  ['/setting/admin-setting', 'Admin Setting'],
  ['/setting/system-setting', 'System Setting'],
];


//Support page Routes
export const SupportRoutesLinks = [
  ['/support/', 'No pages'],
];


//Data to set Hero Band Text in Table Component
export const setPageName = (id) => {
  return id === 'today-events-logs' 
  ? 'Today Events Logs'
  : id === 'today-dhcp-logs'
        ? 'Today DHCP Logs'
        :  id === 'today-dns-logs'
              ? 'Today DNS Logs'
              : id === 'today-ldap-logs'
                  ? 'Today LDAP Logs'
                  : id === 'logon-logs'
                      ? 'Logon Logs' 
                      : id === 'account-logon-logs'
                            ? 'Account Logon Logs'
                            : id === 'account-management-logs'
                                 ? 'Account Management Logs'
                                 : id === 'object-access-logs'
                                    ? 'Object Access Logs'
                                    : id === 'system-events-logs'
                                        ? 'System Events Logs'
                                        : id === 'policy-changes-logs'
                                            ? 'Policy changes Logs'
                                            : id === 'security-assessment-logs'
                                                ? 'Security Assesment Logs'
                                                : id === 'user-access-logs'
                                                    ? 'User Access Logs'
                                                    : id === 'success-logs'
                                                        ? 'Success'
                                                        : id === 'information-logs'
                                                            ? 'Information'
                                                            : id === 'warning-logs'
                                                                ? 'Warning'
                                                                : id === 'anamoly-logs' 
                                                                    ? 'Anomaly Logs'
                                                                    : id === 'recent-alerts'
                                                                        ? 'Recent Alert'
                                                                        : id === 'all-dhcp-logs'
                                                                        ? 'All DHCP Logs'
                                                                        : 'Test Screen';
};


//Security Events pages routes
export const securityPagesRoutes = [
  'logon-logs',
  'account-logon-logs',
  'account-management-logs',
  'object-access-logs',
  'system-events-logs',
  'policy-changes-logs',
  'security-assessment-logs',
  'user-access-logs'
];