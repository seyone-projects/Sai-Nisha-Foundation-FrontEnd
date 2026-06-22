import React, { useState } from "react";

const DonationReceipt = () => {
  const [formData, setFormData] = useState({
    receiptNo: "1640977867",
    date: "01 January 2022",
    donorName: "NEERAJ RAUSHAN KANTH",
    address1: "FLAT NO 13, SF3, SUPERVISORS FLAT, BARADWARI",
    address2: "SAKCHI",
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
      ["address2", "Address Line 2"],
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
  <div className="flex justify-center gap-5 mt-12" style={{textAlign: "center"}}>
    <button
      type="button"
      style={{
        padding: "14px 35px",
        borderRadius: "50px",
        border: "none",
        background:
          "linear-gradient(to right, #2563eb, #10b981)",
        color: "#fff",
        fontWeight: "700",
        fontSize: "15px",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(37,99,235,0.35)",
        marginTop: "50px",
        marginRight: "30px",
      }}
    >
      Generate Receipt
    </button>

    <button
      type="reset"
      style={{
        padding: "14px 35px",
        borderRadius: "50px",
        border: "2px solid #38bdf8",
        background: "#fff",
        color: "#0f172a",
        fontWeight: "700",
        fontSize: "15px",
        cursor: "pointer",
      }}
    >
      Clear Form
    </button>
  </div>

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

      {/* Receipt */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg p-10 text-gray-800">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">80G Certificate</h1>
        </div>

        <div className="flex justify-between items-start mb-8">
          <div className="text-sm leading-7">
            <p>
              <strong>Receipt No:</strong> {formData.receiptNo}
            </p>

            <p>{formData.date}</p>

            <p className="font-semibold">{formData.donorName}</p>

            <p>{formData.address1}</p>
            <p>{formData.address2}</p>

            <p>
              {formData.city} - {formData.pincode}
            </p>

            <p>
              <strong>PAN No :</strong> {formData.pan}
            </p>
          </div>

          {/* Logo Area */}
          <div className="text-right">
            <div className="w-48 h-24 border rounded-lg flex items-center justify-center bg-green-50">
              <span className="text-2xl font-bold text-green-700">
                NGO LOGO
              </span>
            </div>
          </div>
        </div>

        {/* Letter Content */}
        <div className="mb-8 leading-8">
          <p>Dear {formData.donorName}</p>

          <p className="mt-4">
            Thank you for making a contribution of{" "}
            <strong>Rs {formData.donationAmount}</strong>. Please keep this
            written acknowledgement of your donation for your tax records.
          </p>

          <p className="mt-6">For Foundation</p>

          <div className="mt-8 mb-2">
            <div className="w-48 border-b border-black"></div>
          </div>

          <p>({formData.signatory})</p>
        </div>

        <hr className="my-8" />

        {/* Donation Receipt */}
        <div>
          <h2 className="text-center font-bold text-xl mb-6">
            DONATION RECEIPT
          </h2>

          <p className="mb-5">
            We confirm the receipt of donation from{" "}
            <strong>{formData.donorName}</strong> as per details below:
          </p>

          <table className="w-full border border-gray-400 mb-6">
            <tbody>
              <tr>
                <td className="border p-2 font-medium">
                  Donation Date
                </td>
                <td className="border p-2">{formData.date}</td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">
                  Transaction Reference Number
                </td>
                <td className="border p-2">
                  {formData.transactionId}
                </td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">
                  Payment Mode
                </td>
                <td className="border p-2">
                  {formData.paymentMode}
                </td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">
                  Total Contribution Received (Numbers)
                </td>
                <td className="border p-2">
                  Rs {formData.donationAmount}
                </td>
              </tr>

              <tr>
                <td className="border p-2 font-medium">
                  Total Contribution Received (Words)
                </td>
                <td className="border p-2">
                  {formData.words}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="space-y-4 text-sm leading-7">
            <p>
              Donations qualify for deduction under Section 80G of
              Income Tax Act subject to applicable rules and
              regulations.
            </p>

            <p>
              This is an acknowledgement for the receipt of donation.
              Tax deduction can be claimed as per Income Tax rules.
            </p>

            <p>
              This is a computer-generated receipt and does not
              require a physical signature.
            </p>
          </div>
        </div>

        <hr className="my-8" />

        {/* Footer */}
        <div className="text-sm">
          <strong>Registered Office Address:</strong>
          <span className="ml-2">
           No. 10, Thiruvallur Street Shanthi Nagar Irumbuliyur, East Tambaram Chennai – 600059
          </span>
        </div>
      </div>
    </div>
  );
};

export default DonationReceipt;