import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function BasicExample() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Cheque", code: "NY" },
    { name: "Deposit Form", code: "RM" },
    { name: "Application Form", code: "LDN" },
    { name: "ID Proof", code: "IST" },
    { name: "Withdrawal Slip", code: "PRS" },
  ];

  const myStyle = {
    fontSize: "20px",
  };

  return (
    <div style={myStyle} className="card flex justify-content-center">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select the type of file"
        className="w-full md:w-14rem"
        checkmark={true}
        highlightOnSelect={false}
      />
    </div>
  );
}
