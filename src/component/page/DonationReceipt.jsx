import React, { useState , useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import logo from "../page/image/ngo-removebg-preview.png"; // Your Sai Nisha Foundation logo

const DonationReceipt = () => {
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [showReceipt, setShowReceipt] = useState(false);
const receiptRef = useRef(null);

const downloadPDF = async () => {
  const element = receiptRef.current;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = 210;
  const pageHeight = 322;

  pdf.addImage(
    imgData,
    "PNG",
    0,
    0,
    pageWidth,
    pageHeight
  );

  pdf.save(
    `Donation_Receipt_${formData.receiptNo}.pdf`
  );
};
const downloadExcel = () => {
  const data = [
    {
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
    },
  ];

  const worksheet =
    XLSX.utils.json_to_sheet(data);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Receipt"
  );

  const excelBuffer = XLSX.write(
    workbook,
    {
      bookType: "xlsx",
      type: "array",
    }
  );

  const fileData = new Blob(
    [excelBuffer],
    {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }
  );

  saveAs(
    fileData,
    `Donation_Receipt_${formData.receiptNo}.xlsx`
  );
};

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Form Section */}
<div
  className="max-w-5xl mx-auto p-8"
  style={{
    background:
      "linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 50%, #fff8e1 100%)",
    border: "4px solid #38bdf8",
    borderRadius: "30px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
    position: "relative",
    overflow: "hidden",
    width: "750px",
    marginLeft: "230px",
  }}
>
  {/* Decorative Background */}
  <div
    style={{
      position: "absolute",
      top: "-80px",
      right: "-80px",
      width: "250px",
      height: "250px",
      background: "rgba(59,130,246,0.15)",
      borderRadius: "50%",
      filter: "blur(40px)",
    }}
  />

  <div
    style={{
      position: "absolute",
      bottom: "-80px",
      left: "-80px",
      width: "250px",
      height: "250px",
      background: "rgba(16,185,129,0.15)",
      borderRadius: "50%",
      filter: "blur(40px)",
    }}
  />

  {/* Watermark */}
  <div
    style={{
      position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "180px",
      fontWeight: "bold",
      color: "rgba(16,185,129,0.05)",
      pointerEvents: "none",
      userSelect: "none",
    }}
  >
    ♥
  </div>

  {/* Header */}
  <div className="text-center mb-10">
    <h1
      style={{
        color: "#1e40af",
        fontSize: "42px",
        fontWeight: "800",
        letterSpacing: "1px",
        fontFamily: "Georgia, serif",
        textAlign: "center",
      }}
    >
      Donation Form
    </h1>

    <div
      style={{
        width: "220px",
        height: "5px",
        background:
          "linear-gradient(to right, #3b82f6, #10b981, #f59e0b)",
        margin: "15px auto",
        borderRadius: "20px",
      }}
    />

    <p
      style={{
        color: "#475569",
        fontSize: "30px",
        textAlign: "center",
      }}
    >
      Fill in the donor details below
    </p>
  </div>

  {/* Form Fields */}
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
      <div
        key={name}
        style={{
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(8px)",
          borderRadius: "18px",
          padding: "18px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        }}
      >
        <label
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "10px",
            color: "#0f172a",
            fontWeight: "700",
            fontSize: "15px",
          }}
        >
          {label}
        </label>

        <input
          type="text"
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={`Enter ${label}`}
          style={{
            width: "100%",
            textAlign: "center",
            background: "transparent",
            border: "none",
            borderBottom: "3px solid #38bdf8",
            padding: "10px",
            outline: "none",
            fontSize: "15px",
            color: "#1e293b",
            fontWeight: "600",
          }}
        />
      </div>
    ))}
  </div>

  {/* Payment Methods */}
  <div
    className="mt-10 p-6"
    style={{
      // background: "rgba(255,255,255,0.6)",
      borderRadius: "20px",
      backdropFilter: "blur(8px)",
       marginLeft: "50px",
    }}
  >
    <p
      className="text-center mb-5"
      style={{
        fontWeight: "700",
        color: "#0f172a",
        fontSize: "18px",
      }}
    >
      Payment Method
    </p>

    <div className="flex flex-wrap justify-center gap-8">
      {["Cash", "Cheque", "UPI", "Master Card"].map((item) => (
        <label
          key={item}
          style={{
            fontWeight: "600",
            color: "#334155",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            style={{
              marginRight: "8px",
              transform: "scale(1.2)",
            }}
          />
          {item}
        </label>
      ))}
    </div>
  </div>

  {/* Buttons */}
<button
  type="button"
  onClick={() => setShowReceipt(true)}
  style={{
    padding: "14px 35px",
    borderRadius: "50px",
    border: "none",
    background:
      "linear-gradient(to right,#2563eb,#10b981)",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
  }}
>
  Generate Receipt
</button>

  {/* Footer */}
  <div
    style={{
      marginTop: "50px",
      textAlign: "center",
      borderTop: "3px solid #38bdf8",
      paddingTop: "20px",
      color: "#475569",
      fontStyle: "italic",
      fontSize: "15px",
    }}
  >
    <strong style={{ color: "#1e40af" }}>
      Contact Address
    </strong>
    <br />
    <small>Your address will be shown here</small>
  </div>
</div>
{showReceipt && (
  <div
    ref={receiptRef}
    style={{
      width: "1000px",
      margin: "30px auto",
      background: "#fff",
      padding: "30px",
      fontFamily: "Poppins, sans-serif",
      boxShadow: "0 0 20px rgba(0,0,0,0.15)",
      borderRadius: "10px",
    }}
  >
    {/* Certificate Header */}
{/* Header Row */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "30px",
  }}
>
  {/* Logo */}
  <div
    style={{
      width: "35%",
      textAlign: "left",
    }}
  >
    <img
      src={logo}
      alt="Sai Nisha Foundation"
      style={{
        width: "300px",
        objectFit: "contain",
      }}
    />
  </div>

  {/* Registered Office Address */}
  <div
    style={{
      width: "60%",
      color: "#333",
      lineHeight: "1.8",
      textAlign: "right",
    }}
  >

    <p>
      No. 10, thiruvalluvar Street, Shanthi Nagar, 
      <br />
     Irumbuliyur,East Tambaram,Chennai - 600059
      <br />
        Phone no: +91 9962290875
    </p>
  </div>
</div>

{/* 80G Certificate */}
<div
  style={{
    textAlign: "center",
    marginBottom: "40px",
  }}
>
  <div
    style={{
      display: "inline-block",
      background: "#08275d",
      color: "#fff",
      padding: "15px 70px",
      borderRadius: "50px",
      fontSize: "22px",
      fontWeight: "700",
      letterSpacing: "1px",
    }}
  >
    80G RECEIPT
  </div>

  <div
    style={{
      width: "350px",
      margin: "20px auto",
      borderBottom: "2px solid #d4a017",
    }}
  />
</div>

{/* Donor Details */}
<div
  style={{
    marginBottom: "30px",
  }}
>
  <p style={{ fontSize: "18px" }}>
    Receipt No : {formData.receiptNo}
  </p>

  <p
  style={{
    fontSize: "18px",
    marginLeft: "600px",
    marginTop: "-50px", 
  }}
>
     Receipt Date : {formData.date}
  </p>

  <h2
    style={{
      fontWeight: "700",
      marginTop: "20px",
    }}
  >
    {formData.donorName}
  </h2>

  <p>{formData.address1}</p>

  <p>
    {formData.city} - {formData.pincode}
  </p>

  <p>
    PAN No. - {formData.pan}
  </p>
</div>

    {/* Thank You */}
    <div
      style={{
        marginTop: "40px",
        fontSize: "18px",
        lineHeight: "1.8",
      }}
    >
      <p>Dear  {formData.  donorName}</p>

      <p>
        Thank you for making a contribution of
        Rs {formData.donationAmount} /- to Sai Nisha
        Foundation. Please keep this written
        acknowledgement of your donation for
        your tax records.
      </p>
       <br />
      <p>For Sai Nisha Foundation</p>

      <div style={{ marginTop: "50px" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Signature_of_Barack_Obama.svg/512px-Signature_of_Barack_Obama.svg.png"
          alt="signature"
          style={{
            height: "70px",
          }}
        />

        <div
          style={{
            width: "220px",
            borderTop: "2px solid #555",
          }}
        />

        <p>(Authorised Signatory)</p>
      </div>
    </div>

    {/* Donation Receipt Title */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          flex: 1,
          borderBottom: "2px solid #d4a017",
        }}
      />

      <h2
        style={{
          color: "#08275d",
          padding: "0 20px",
          fontSize: "30px",
          fontWeight: "700",
        }}
      >
        DONATION RECEIPT
      </h2>

      <div
        style={{
          flex: 1,
          borderBottom: "2px solid #d4a017",
        }}
      />
    </div>

    <p
      style={{
        textAlign: "center",
        marginTop: "15px",
        fontSize: "18px",
      }}
    >
      We confirm the receipt of donation from
      Mr/Ms/Mrs {formData.donorName}
    </p>

    {/* Table */}
    <table
      style={{
        width: "100%",
        marginTop: "25px",
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        {[
          ["Donation Date", formData.date],
          [
            "Transaction Reference Number",
            formData.transactionId,
          ],
          ["Payment Mode", formData.paymentMode],
          [
            "Total Contribution Received",
            `Rs ${formData.donationAmount} /-`,
          ],
          [
            "Total Contribution Received (Words)",
            formData.words,
          ],
        ].map((row, index) => (
          <tr key={index}>
            <td
              style={{
                border: "1px solid #d4a017",
                padding: "15px",
                fontWeight: "600",
                width: "45%",
              }}
            >
              {row[0]}
            </td>

            <td
              style={{
                border: "1px solid #d4a017",
                padding: "15px",
              }}
            >
              {row[1]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* 80G Box */}
    <div
      style={{
        border: "2px solid #d4a017",
        padding: "25px",
        borderRadius: "10px",
        marginTop: "30px",
        background: "#fffdf7",
        lineHeight: "1.8",
      }}
    >
Donations to Sai Nisha Foundation qualify for reduction u/s 80G(5) of Income Tax Act 1961 vide Unique Registration Number ABLTS4033PF20251 approved on April 04, 2025 which is valid until AY2027-2028. This receipt is invalid in case of non-realization of the money instrument or reversal of the credit/debit card charge or reversal of donation amount for any reason. IT PAN: ABLTS4033P.
    </div>

    {/* Notes */}
    <div
      style={{
        marginTop: "25px",
        lineHeight: "1.8",
      }}
    >
      <p>
      Please note that this is an acknowledgement for the receipt of donation. We will provide you the Form 10BE on which needed tax deduction can be claimed as per the Income-tax rules. This is a Computer Generated Receipt. In case of any discrepancy or queries please email hello@sainisha.in
      </p>
    </div>

    {/* Thank You */}
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <h2
        style={{
          color: "#08275d",
          fontFamily: "cursive",
          fontSize: "45px",
        }}
      >
        Thank You
      </h2>

      <p
        style={{
          fontSize: "20px",
        }}
      >
        Your contribution makes a real
        difference!
      </p>
    </div>

    {/* Footer */}
{/* Footer */}
<div
  style={{
    marginTop: "30px",
    borderTop: "2px solid #d4a017",
    paddingTop: "20px",
  }}
>
</div>

    {/* Download Buttons */}
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <button
        onClick={downloadPDF}
        style={{
          padding: "12px 30px",
          background: "#08275d",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>

      <button
        onClick={downloadExcel}
        style={{
          padding: "12px 30px",
          background: "#16a34a",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Download Excel
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default DonationReceipt;