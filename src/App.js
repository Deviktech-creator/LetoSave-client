//src/App.js

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import RegistrationPage from "./Pages/auth/RegistrationPage";
import CreatingPasswordPage from "./Pages/auth/CreatingPasswordPage";
import WellComeBackPage from "./Pages/auth/WellComeBackPage";
import DashboardHome from "./Pages/DashboardHome";
import ForgotPasswordPage from "./Pages/auth/ForgotPasswordPage";
import PataintMana from "./Pages/PataintMana";
import DepossiiitPage from "./Pages/DepossiiitPage";
import SerVicessssPage from "./Pages/SerVicessssPage";
import ReportNewPage from "./Pages/ReportNewPage";
import AddNew from "./Pages/AddNew";
import PatientNew from "./Pages/PatientNew";
import NotificationNewPage from "./Pages/NotificationNewPage";
import TransactionReportNewPage from "./Pages/TransactionReportNewPage";
import RevenueReportNewPage from "./Pages/RevenueReportNewPage";
import ProfileNewPage from "./Pages/ProfileNewPage";
import AddBankAccountNewPage from "./Pages/AddBankAccountNewPage";
import SupportAndChatNewPage from "./Pages/SupportAndChatNewPage";
import SinglePatientDetail from "./Components/SinglePatientDetail";
import SinglePageDetailPagessss from "./Pages/SinglePageDetailPagessss";
import PublicRoutes from "./contexts/PublicRoutes";
import PrivateRoutes from "./contexts/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="" element={<RegistrationPage />} />
          <Route path="login" element={<WellComeBackPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="create-password" element={<CreatingPasswordPage />} />
          <Route
            path="create-password/:id"
            element={<CreatingPasswordPage />}
          />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Route>
        <Route path="/user" element={<PrivateRoutes />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="patient-Management" element={<PataintMana />} />
          <Route path="Deposite-Management" element={<DepossiiitPage />} />
          <Route path="service-Management" element={<SerVicessssPage />} />
          <Route path="hospital-service" element={<AddNew />} />
          <Route path="hospital-service/:serviceId" element={<AddNew />} />
          <Route
            path="Support/Chart-Management"
            element={<SupportAndChatNewPage />}
          />
          <Route path="Reports-Management" element={<ReportNewPage />} />
          <Route path="Patient-report" element={<PatientNew />} />
          <Route path="Notification" element={<NotificationNewPage />} />
          <Route
            path="Transaction-report"
            element={<TransactionReportNewPage />}
          />
          <Route path="Revenue-report" element={<RevenueReportNewPage />} />
          <Route path="Profile" element={<ProfileNewPage />} />
          <Route path="Add-Bank-Account" element={<AddBankAccountNewPage />} />
          <Route
            path="Single-patient-detail"
            element={<SinglePageDetailPagessss />}
          />
          <Route path="OtP" element={<SinglePatientDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;

