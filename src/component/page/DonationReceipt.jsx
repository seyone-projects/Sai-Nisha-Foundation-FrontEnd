import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import logo from "../page/image/ngo-removebg-preview.png";
import Footer from "./Footer";

const VALID_USERNAME = "sainisha";
const VALID_PASSWORD = "employee@2026";

const LockIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#08275d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

// ── Login Page ────────────────────────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      onLogin();
    } else {
      setError("Invalid username or password. Please try again.");
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Poppins, sans-serif",
    }}>
      {/* Main login area */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 50%, #fff8e1 100%)",
        padding: "40px 20px",
      }}>
        {/* Background blobs */}
        <div style={{ position: "fixed", top: "-100px", right: "-100px", width: "350px", height: "350px", background: "rgba(59,130,246,0.12)", borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "fixed", bottom: "-100px", left: "-100px", width: "350px", height: "350px", background: "rgba(16,185,129,0.12)", borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />

        <div style={{
          width: "420px",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(16px)",
          borderRadius: "28px",
          padding: "48px 40px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.14)",
          border: "1.5px solid rgba(56,189,248,0.35)",
          animation: shaking ? "shake 0.6s ease" : "none",
          position: "relative",
          zIndex: 1,
        }}>
          <style>{`
            @keyframes shake {
              0%,100%{transform:translateX(0)}
              20%{transform:translateX(-10px)}
              40%{transform:translateX(10px)}
              60%{transform:translateX(-8px)}
              80%{transform:translateX(8px)}
            }
            input:-webkit-autofill {
              -webkit-box-shadow: 0 0 0 1000px rgba(255,255,255,0.7) inset !important;
            }
          `}</style>

          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <img src={logo} alt="Sai Nisha Foundation" style={{ width: "200px", objectFit: "contain" }} />
          </div>

          {/* Lock icon */}
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg,#e0f2fe,#dcfce7)", boxShadow: "0 4px 16px rgba(8,39,93,0.1)" }}>
              <LockIcon />
            </div>
          </div>

          <h2 style={{ textAlign: "center", color: "#08275d", fontSize: "26px", fontWeight: "800", marginBottom: "6px", letterSpacing: "0.5px" }}>
            Employee Login
          </h2>
          <p style={{ textAlign: "center", color: "#64748b", fontSize: "14px", marginBottom: "32px" }}>
            Sign in to access the Portal
          </p>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", color: "#0f172a", fontWeight: "700", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px" }}>USERNAME</label>
              <input
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(""); }}
                placeholder="Enter your username"
                required
                style={{ width: "100%", padding: "13px 16px", borderRadius: "12px", border: error ? "2px solid #ef4444" : "2px solid #e2e8f0", background: "rgba(255,255,255,0.7)", fontSize: "15px", color: "#1e293b", fontWeight: "600", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                onFocus={(e) => { if (!error) e.target.style.borderColor = "#38bdf8"; }}
                onBlur={(e) => { if (!error) e.target.style.borderColor = "#e2e8f0"; }}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", color: "#0f172a", fontWeight: "700", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px" }}>PASSWORD</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  placeholder="Enter your password"
                  required
                  style={{ width: "100%", padding: "13px 48px 13px 16px", borderRadius: "12px", border: error ? "2px solid #ef4444" : "2px solid #e2e8f0", background: "rgba(255,255,255,0.7)", fontSize: "15px", color: "#1e293b", fontWeight: "600", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                  onFocus={(e) => { if (!error) e.target.style.borderColor = "#38bdf8"; }}
                  onBlur={(e) => { if (!error) e.target.style.borderColor = "#e2e8f0"; }}
                />
                <button type="button" onClick={() => setShowPassword(p => !p)}
                  style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {error && (
              <div style={{ background: "#fef2f2", border: "1.5px solid #fecaca", color: "#dc2626", padding: "12px 16px", borderRadius: "10px", fontSize: "13px", fontWeight: "600", marginBottom: "20px", textAlign: "center" }}>
                ⚠ {error}
              </div>
            )}

            <button
              type="submit"
              style={{ width: "100%", padding: "14px", borderRadius: "50px", border: "none", background: "linear-gradient(to right, #08275d, #10b981)", color: "#fff", fontWeight: "800", fontSize: "16px", cursor: "pointer", letterSpacing: "0.5px", boxShadow: "0 6px 20px rgba(8,39,93,0.25)", transition: "opacity 0.2s, transform 0.2s" }}
              onMouseEnter={(e) => { e.target.style.opacity = "0.9"; e.target.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; }}
            >
              Sign In →
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "24px", color: "#94a3b8", fontSize: "12px" }}>
            Only for Sai Nisha Foundation Employee
          </p>
        </div>
      </div>

      {/* Footer on login page */}
      <Footer />
    </div>
  );
}

// ── Donation Receipt ──────────────────────────────────────────────────────────
const DonationReceipt = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [formData, setFormData] = useState({
    receiptNo: "1640977867",
    date: "01 January 2022",
    donorName: "NEERAJ RAUSHAN KANTH",
    address1: "FLAT NO 13, SF3, SUPERVISORS FLAT, BARADWARI",
    city: "Jamshedpur",
    pincode: "831001",
    pan: "DDUPK5216A",
    donationAmount: "250",
    transactionId: "PBIZ-6172461cf541870782",
    paymentMode: "Digital",
    words: "Rupees Two Hundred Fifty Only",
    signatory: "Authorized Signatory",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [showReceipt, setShowReceipt] = useState(false);
  const receiptRef = useRef(null);

  const downloadPDF = async () => {
    const element = receiptRef.current;
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, 210, 322);
    pdf.save(`Donation_Receipt_${formData.receiptNo}.pdf`);
  };

  const downloadExcel = () => {
    const data = [{
      ReceiptNo: formData.receiptNo,
      Date: formData.date,
      DonorName: formData.donorName,
      PAN: formData.pan,
      Address1: formData.address1,
      City: formData.city,
      Pincode: formData.pincode,
      DonationAmount: formData.donationAmount,
      TransactionId: formData.transactionId,
      PaymentMode: formData.paymentMode,
      AmountWords: formData.words,
    }];
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Receipt");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const fileData = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(fileData, `Donation_Receipt_${formData.receiptNo}.xlsx`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowReceipt(false);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", fontFamily: "Poppins, sans-serif" }}>

      {/* ── Fixed Logout Button ── */}
      <div style={{ position: "fixed", top: "18px", right: "24px", zIndex: 9999 }}>
        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 22px",
            borderRadius: "50px",
            border: "none",
            background: "linear-gradient(to right, #ef4444, #b91c1c)",
            color: "#fff",
            fontWeight: "700",
            fontSize: "14px",
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(239,68,68,0.4)",
            letterSpacing: "0.3px",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
            <line x1="12" y1="2" x2="12" y2="12"/>
          </svg>
          Logout
        </button>
      </div>

      {/* ── Page content ── */}
      <div className="min-h-screen bg-gray-100 p-5" style={{ flex: 1, paddingTop: "70px" }}>

        {/* Form Section */}
        <div
          className="max-w-5xl mx-auto p-8"
          style={{
            background: "linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 50%, #fff8e1 100%)",
            border: "4px solid #38bdf8",
            borderRadius: "30px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            position: "relative",
            overflow: "hidden",
            width: "750px",
            marginLeft: "230px",
          }}
        >
          <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "250px", height: "250px", background: "rgba(59,130,246,0.15)", borderRadius: "50%", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "250px", height: "250px", background: "rgba(16,185,129,0.15)", borderRadius: "50%", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "180px", fontWeight: "bold", color: "rgba(16,185,129,0.05)", pointerEvents: "none", userSelect: "none" }}>♥</div>

          <div className="text-center mb-10">
            <h1 style={{ color: "#1e40af", fontSize: "42px", fontWeight: "800", letterSpacing: "1px", fontFamily: "Georgia, serif", textAlign: "center" }}>
              Donation Form
            </h1>
            <div style={{ width: "220px", height: "5px", background: "linear-gradient(to right, #3b82f6, #10b981, #f59e0b)", margin: "15px auto", borderRadius: "20px" }} />
            <p style={{ color: "#475569", fontSize: "30px", textAlign: "center" }}>Fill in the donor details below</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["receiptNo", "Receipt Number"],
              ["date", "Receipt Date"],
              ["donorName", "Donor Name"],
              ["pan", "PAN Number"],
              ["address1", "Address Line 1"],
              ["city", "City"],
              ["pincode", "Postal Code"],
              ["donationAmount", "Donation Amount"],
              ["transactionId", "Transaction ID"],
              ["paymentMode", "Payment Mode"],
              ["words", "Amount In Words"],
            ].map(([name, label]) => (
              <div key={name} style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)", borderRadius: "18px", padding: "18px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" }}>
                <label style={{ display: "block", textAlign: "center", marginBottom: "10px", color: "#0f172a", fontWeight: "700", fontSize: "15px" }}>{label}</label>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={`Enter ${label}`}
                  style={{ width: "100%", textAlign: "center", background: "transparent", border: "none", borderBottom: "3px solid #38bdf8", padding: "10px", outline: "none", fontSize: "15px", color: "#1e293b", fontWeight: "600" }}
                />
              </div>
            ))}
          </div>

          <div className="mt-10 p-6" style={{ borderRadius: "20px", backdropFilter: "blur(8px)", marginLeft: "50px" }}>
            <p className="text-center mb-5" style={{ fontWeight: "700", color: "#0f172a", fontSize: "18px" }}>Payment Method</p>
            <div className="flex flex-wrap justify-center gap-8">
              {["Cash", "Cheque", "UPI", "Master Card"].map((item) => (
                <label key={item} style={{ fontWeight: "600", color: "#334155", cursor: "pointer" }}>
                  <input type="checkbox" style={{ marginRight: "8px", transform: "scale(1.2)" }} />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowReceipt(true)}
            style={{ padding: "14px 35px", borderRadius: "50px", border: "none", background: "linear-gradient(to right,#2563eb,#10b981)", color: "#fff", fontWeight: "700", cursor: "pointer", marginTop: "20px" }}
          >
            Generate Receipt
          </button>

          <div style={{ marginTop: "50px", textAlign: "center", borderTop: "3px solid #38bdf8", paddingTop: "20px", color: "#475569", fontStyle: "italic", fontSize: "15px" }}>
            <strong style={{ color: "#1e40af" }}>Contact Address</strong><br />
            <small>No. 10, Thiruvalluvar Street, Shanthi Nagar, Irumbuliyur, East Tambaram, Chennai - 600059</small>
          </div>
        </div>

        {/* Receipt Preview */}
        {showReceipt && (
          <div ref={receiptRef} style={{ width: "1000px", margin: "30px auto", background: "#fff", padding: "30px", fontFamily: "Poppins, sans-serif", boxShadow: "0 0 20px rgba(0,0,0,0.15)", borderRadius: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "30px" }}>
              <div style={{ width: "35%", textAlign: "left" }}>
                <img src={logo} alt="Sai Nisha Foundation" style={{ width: "400px", objectFit: "contain" }} />
              </div>
              <div style={{ width: "60%", marginTop: "30px", color: "#333", lineHeight: "1.8", textAlign: "right" }}>
                <p>No. 10, Thiruvalluvar Street, Shanthi Nagar,<br />Irumbuliyur, East Tambaram, Chennai - 600059<br />Contact no: +91 9962290875</p>
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ display: "inline-block", background: "#08275d", color: "#fff", padding: "15px 70px", borderRadius: "50px", fontSize: "22px", fontWeight: "700", letterSpacing: "1px" }}>80G RECEIPT</div>
              <div style={{ width: "350px", margin: "20px auto", borderBottom: "2px solid #d4a017" }} />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <p style={{ fontSize: "18px" }}>Receipt No : {formData.receiptNo}</p>
              <p style={{ fontSize: "18px", marginLeft: "600px", marginTop: "-40px" }}>Receipt Date : {formData.date}</p>
              <h2 style={{ fontWeight: "700", marginTop: "40px" }}>{formData.donorName}</h2>
              <p>{formData.address1}</p>
              <p>{formData.city} - {formData.pincode}</p>
              <p>PAN No. - {formData.pan}</p>
            </div>

            <div style={{ marginTop: "40px", marginBottom: "50px", fontSize: "18px", lineHeight: "1.8" }}>
              <p>Dear {formData.donorName},</p>
              <p style={{ marginTop: "15px" }}>Thank you for making a contribution of Rs {formData.donationAmount}/- to Sai Nisha Foundation. Please keep this written acknowledgement of your donation for your tax records.</p>
              <br />
              <p>For Sai Nisha Foundation</p>
              <div style={{ marginTop: "20px" }}>
                <img src="/src/component/page/image/founder_sign-removebg-preview.png" alt="signature" style={{ height: "70px" }} />
                <div style={{ width: "220px", borderTop: "2px solid #555" }} />
                <p>(Founder)</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", marginTop: "40px" }}>
              <div style={{ flex: 1, borderBottom: "2px solid #d4a017" }} />
              <h2 style={{ color: "#08275d", padding: "0 20px", fontSize: "30px", fontWeight: "700" }}>DONATION RECEIPT</h2>
              <div style={{ flex: 1, borderBottom: "2px solid #d4a017" }} />
            </div>

            <p style={{ textAlign: "center", marginTop: "15px", fontSize: "18px" }}>We confirm the receipt of donation from Mr/Ms/Mrs {formData.donorName}</p>

            <table style={{ width: "100%", marginTop: "25px", borderCollapse: "collapse" }}>
              <tbody>
                {[
                  ["Donation Date", formData.date],
                  ["Transaction Reference Number", formData.transactionId],
                  ["Payment Mode", formData.paymentMode],
                  ["Total Contribution Received", `Rs ${formData.donationAmount}/-`],
                  ["Total Contribution Received (Words)", formData.words],
                ].map((row, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #d4a017", padding: "15px", fontWeight: "600", width: "45%" }}>{row[0]}</td>
                    <td style={{ border: "1px solid #d4a017", padding: "15px" }}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ border: "2px solid #d4a017", padding: "25px", borderRadius: "10px", marginTop: "30px", background: "#fffdf7", lineHeight: "1.8" }}>
              Donations to Sai Nisha Foundation qualify for reduction u/s 80G(5) of Income Tax Act 1961 vide Unique Registration Number ABLTS4033PF20251 approved on April 04, 2025 which is valid until AY2027-2028. This receipt is invalid in case of non-realization of the money instrument or reversal of the credit/debit card charge or reversal of donation amount for any reason. IT PAN: ABLTS4033P.
            </div>

            <div style={{ marginTop: "25px", lineHeight: "1.8" }}>
              <p>Please note that this is an acknowledgement for the receipt of donation. We will provide you the Form 10BE on which needed tax deduction can be claimed as per the Income-tax rules. This is a Computer Generated Receipt. In case of any discrepancy or queries please email hello@sainisha.in</p>
            </div>

            <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "150px" }}>
              <h2 style={{ color: "#08275d", padding: "0 20px", fontSize: "30px", fontWeight: "700" }}>Thank You</h2>
              <p style={{ fontSize: "20px" }}>Your contribution makes a real difference!</p>
            </div>

            <div style={{ marginTop: "30px", borderTop: "2px solid #d4a017", paddingTop: "20px" }} />

            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button onClick={downloadPDF} style={{ padding: "12px 30px", background: "#08275d", color: "#fff", border: "none", borderRadius: "8px", marginRight: "10px", cursor: "pointer" }}>Download PDF</button>
              <button onClick={downloadExcel} style={{ padding: "12px 30px", background: "#16a34a", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>Download Excel</button>
            </div>
          </div>
        )}
      </div>

      {/* ── Footer — always at the bottom of the donation page ── */}
      <Footer />
    </div>
  );
};

export default DonationReceipt;
