import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoTrashBinSharp } from "react-icons/io5";
import { useState } from "react";

function Temp2({ formData, setFormData }) {
  const navigate = useNavigate();
  const greenformgo = () => {
    navigate("/green-form");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <div className="pt-[5rem] pb-5 bg-gradient-to-tr from-white to-green-400">
      <div className="bg-white flex flex-col  w-[1340px] p-2 border-2 mx-auto">
        <h2 className="text-3xl font-bold text-green-500 text-center  p-5">
          E-WAYBILL ENTRY FORM
        </h2>
        <div className="">
          <div className="flex flex-col justify-center bg-gray-200 pb-2">
            <h4 className="text-1xl font-bold text-white w-full bg-green-500 p-2">
              Transaction Details
            </h4>
            <div className="p-2">
              <div className="flex flex-col mb-2 mt-2 gap-2 justify-centre">
                <div className="pl-2 mb-2 ">
                  <label
                    htmlFor="supplyType"
                    className="mr-3 font-bold"
                    required
                  >
                    Supply Type
                  </label>
                  <input
                    type="radio"
                    name="supplyType"
                    value="Outward"
                    className="mr-2 text-gray-400"
                    defaultChecked
                    disabled
                  />
                  OutWard
                  <input
                    type="radio"
                    name="supplyType"
                    value="Inward"
                    className="ml-2 mr-2 text-gray-400"
                    disabled
                  />
                  InWard
                </div>
                <div className="pr-4 mb-2">
                  <label
                    htmlFor="subType"
                    className="ml-2 mr-3 font-bold"
                    required
                  >
                    Sub Type
                  </label>
                  <input
                    type="radio"
                    name="subType"
                    value="Supply"
                    className="mr-2 text-gray-400"
                    disabled
                  />
                  Supply
                  <input
                    type="radio"
                    name="subType"
                    value="Export"
                    className="ml-2 mr-2 text-gray-400"
                    disabled
                  />
                  Export
                  <input
                    type="radio"
                    name="subType"
                    value="JobWork"
                    className="ml-2 mr-2 text-gray-400"
                    defaultChecked
                    disabled
                  />
                  Job Work
                  <input
                    type="radio"
                    name="subType"
                    value="SKD"
                    className="ml-2 mr-2 text-gray-400"
                    disabled
                  />
                  SKD/CKD/Lots
                  <input
                    type="radio"
                    name="subType"
                    value="RecipentNotKnown text-gray-400"
                    className="ml-2 mr-2"
                    disabled
                  />
                  Recipent Not Known
                  <input
                    type="radio"
                    name="subType"
                    value="ForOwnUse"
                    className="ml-2 mr-2 text-gray-400"
                    disabled
                  />
                  For Own Use
                  <input
                    type="radio"
                    name="subType"
                    value="Exhibition"
                    className="ml-2 mr-2"
                    disabled
                  />
                  Exhibition or Fairs
                  <input
                    type="radio"
                    name="subType"
                    value="LineSales"
                    className="ml-2 mr-2"
                    disabled
                  />
                  Line Sales
                  <input
                    type="radio"
                    name="subType"
                    value="Others"
                    className="ml-2 mr-2"
                    disabled
                  />
                  Others
                </div>
              </div>

              <div className="pl-2 mb-2 mt-2 flex gap-10">
                <div className="docType">
                  <label htmlFor="docType" className="mr-3 font-bold">
                    Document Type
                  </label>
                  <select
                    name="docType"
                    className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                    required
                    disabled
                  >
                    <option value="TaxInvoice" disabled>
                      Tax Invoice1
                    </option>
                    <option value="TaxInvoice" disabled>
                      Tax Invoice2
                    </option>
                    <option value="TaxInvoice" disabled>
                      Tax Invoice3
                    </option>
                    <option value="TaxInvoice" disabled>
                      Tax Invoice4
                    </option>
                    <option value="TaxInvoice" selected>
                      XXXXX
                    </option>
                  </select>
                </div>
                <div className="docNum">
                  <label htmlFor="docNum" className="mr-3 font-bold">
                    Document No.
                  </label>
                  <input
                    type="number"
                    name="docNum"
                    className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                    disabled
                    placeholder="XXXXX"
                  />
                </div>
                <div className="docdate">
                  <label htmlFor="docDate" className="mr-3 font-bold">
                    Document Date.
                  </label>
                  <input
                    type="text"
                    name="docDate"
                    className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                    placeholder="XX/XX/XXXX"
                    disabled
                  />
                </div>
                <div className="pr-4">
                  <label htmlFor="TransactionType" className="mr-3 font-bold">
                    Transaction Type
                  </label>
                  <select
                    name="TransactionType"
                    className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                    required
                    disabled
                  >
                    <option value="Regular">XXXX</option>
                    <option value="Regular">Regular</option>
                    <option value="Regular">Regular</option>
                    <option value="Regular">Regular</option>
                    <option value="Regular">Regular</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Bill dipatch section */}
          <div className="flex justify-between  pb-2 mt-2">
            <div className="BillFrom mr-2 bg-gray-200 w-1/2 ">
              <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">
                Bill From
              </h2>
              <div className="p-2">
                <tr className="NameContainer">
                  <td className="p-2 font-bold">Name</td>
                  <td>
                    <input
                      type="text"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="BillFromName"
                      value="XXXX"
                      disabled
                    />
                  </td>
                </tr>
                <tr className="GSTContainer">
                  <td className="p-2 font-bold">GSTIN</td>
                  <td>
                    <input
                      type="text"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="BillFromGst"
                      value="XXXX"
                      disabled
                    />
                  </td>
                </tr>
                <tr className="stateContainer">
                  <td className="p-2 font-bold">State</td>
                  <td>
                    <select
                      name="BillFromState"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      required
                      disabled
                    >
                      <option value="State">XXXXX</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                    </select>
                  </td>
                </tr>
              </div>
            </div>
            <div className="DispatchFrom  bg-gray-200 w-1/2">
              <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2 ">
                Dispatch From
              </h2>
              <div className="p-2">
                <tr className="AddressContainer pb-5">
                  <td className="p-2 font-bold">Address</td>
                  <td>
                    <input
                      type="text"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 mr-4 bg-yellow-100 text-gray-400"
                      name="DispatchFromAddressA"
                      value="XXXX"
                      disabled
                    />
                    <input
                      type="text"
                      className="AddressB border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="DispatchFromAddressB"
                      value="XXXX"
                      disabled
                    />
                  </td>
                </tr>
                <tr className="PlaceContainer">
                  <td className="p-2 font-bold">Place</td>
                  <td>
                    <input
                      type="text"
                      className="Place border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="DispatchFromPlace"
                      value="XXXX"
                      disabled
                    />
                  </td>
                </tr>
                <tr className="PincodeContainer">
                  <td className="p-2 font-bold">Pincode</td>
                  <td>
                    <input
                      type="number"
                      className="Pincode border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 mr-4 bg-yellow-100 text-gray-400"
                      name="DispatchFromPincodeNum"
                      placeholder="XXXX"
                      disabled
                    />
                    <select
                      name="DispatchFromPincodeDd"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      required
                      disabled
                    >
                      <option value="State">XXXXXX</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                    </select>
                  </td>
                </tr>
              </div>
            </div>
          </div>
          {/* bill ship section  */}
          <div className="flex justify-between  pb-2 mt-2">
            <div className=" mr-2 bg-gray-200 w-1/2">
              <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">
                Bill To
              </h2>
              <div className="p-2">
                <tr className="NameContainer">
                  <td className="p-2 font-bold">Name</td>
                  <td>
                    <input
                      type="text"
                      className="Name border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="BillToName"
                      value="XXXX"
                      disabled
                    />
                  </td>
                </tr>
                <tr className="GSTContainer">
                  <td className="p-2 font-bold">GSTIN</td>
                  <td className="pr-4">
                    <input
                      type="text"
                      className="GSTField border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="BillToGst"
                      value="XXXX"
                      disabled
                    />
                  </td>
                </tr>
                <tr className="stateContainer">
                  <td className="p-2 font-bold">State</td>
                  <td className="pr-4">
                    <select
                      name="BillToState"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      required
                      disabled
                    >
                      <option value="State">XXXXX</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                    </select>
                  </td>
                </tr>
              </div>
            </div>
            <div className=" mr-2 bg-gray-200 w-1/2">
              <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">
                Ship To
              </h2>
              <div className="p-2">
                <tr className="AddressContainer">
                  <td className="p-2 font-bold">Address</td>
                  <td className="mr-4">
                    <input
                      type="text"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 mr-4 bg-yellow-100 text-gray-400"
                      name="ShipToAddressA"
                      value="XXXX"
                      disabled
                    />
                    <input
                      type="text"
                      className="AddressB border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="ShipToAddressB"
                      value="XXXX"
                      disabled
                    />
                  </td>
                </tr>
                <tr className="PlaceContainer">
                  <td className="p-2 font-bold">Place</td>
                  <td>
                    <input
                      type="text"
                      className="Place border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="ShipToPlace"
                      value="XXXX"
                      disabled
                    />
                  </td>
                </tr>
                <tr className="PincodeContainer">
                  <td className="p-2 font-bold">Pincode</td>
                  <td>
                    <input
                      type="number"
                      className="mr-4 border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="ShipToPincodeNum"
                      placeholder="XXXX"
                      disabled
                    />
                    <select
                      name="ShipToPincodeDd"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      required
                      disabled
                    >
                      <option value="State">XXXXXX</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                      <option value="State">State</option>
                    </select>
                  </td>
                </tr>
              </div>
            </div>
          </div>
          {/* Item  */}
          <div className="mr-2 bg-gray-200 ">
            <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">
              Item Details
            </h2>
            <div className="p-2">
              <table className="flex flex-col justify-evenly w-full">
                <tr className="flex gap-x-48  items-center mb-4 ml-2">
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>HSN</th>
                  <th>Quantity</th>
                  <th className="mr-10">Unit</th>
                  {/* <th><IoMdAddCircleOutline className="text-3xl text-green-500"/></th> */}
                </tr>
                <tr className="flex gap-x-14  items-center mb-4">
                  <td>
                    <input
                      type="text"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="ProductName"
                      placeholder="XXXXXX"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="ProductDescription"
                      placeholder="XXXXXX"
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="ProductHSN"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      placeholder="XXXXX"
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="ProductQuantity"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      placeholder="XXXXXX"
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="ProductUnit"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 mr-12 bg-yellow-100 text-gray-400"
                      placeholder="XXXXX"
                      disabled
                    />
                  </td>
                  {/* <td><IoTrashBinSharp className="text-3xl text-red-800 ml-2" /></td> */}
                </tr>
                <tr className="flex gap-x-28  items-center mb-4 ml-2">
                  <th>Valuable/Taxable Value(Rs.)</th>
                  <th>CGST+SGST Rate(%)</th>
                  <th>IGST Rate(%)</th>
                  <th>CESS Advol Rate(%)</th>
                  <th className="mr-1">CESS non Advol Rate</th>
                  {/* <th><IoMdAddCircleOutline className="text-3xl text-green-500"/></th> */}
                </tr>
                <tr className="flex gap-x-28 items-center mb-4">
                  <td>
                    <input
                      type="text"
                      name="ProductTaxableValue"
                      className="border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      placeholder="XXXXX"
                    />
                  </td>
                  <td>
                    <select
                      name="ProductCGST"
                      className="border-gray-300 border-2 rounded-lg outline-none px-8 py-0.5 bg-yellow-100 text-gray-400"
                      required
                      disabled
                    >
                      <option value="CGST">XXX.XX</option>
                      <option value="CGST">CGST</option>
                      <option value="CGST">CGST</option>
                      <option value="CGST">CGST</option>
                      <option value="CGST">CGST</option>
                    </select>
                  </td>
                  <td>
                    <select
                      name="ProductIGST"
                      className="border-gray-300 border-2 rounded-lg outline-none px-8 py-0.5 bg-yellow-100 text-gray-400"
                      required
                      disabled
                    >
                      <option value="IGST">XXX.XX</option>
                      <option value="IGST">IGST</option>
                      <option value="IGST">IGST</option>
                      <option value="IGST">IGST</option>
                      <option value="IGST">IGST</option>
                    </select>
                  </td>
                  <td>
                    <select
                      name="ProductCESSAdvol"
                      className="border-gray-300 border-2 rounded-lg outline-none px-8 py-0.5 bg-yellow-100 text-gray-400"
                      required
                      disabled
                    >
                      <option value="CESS">XXX</option>
                      <option value="CESS">CESS</option>
                      <option value="CESS">CESS</option>
                      <option value="CESS">CESS</option>
                      <option value="CESS">CESS</option>
                    </select>
                  </td>
                  <td>
                    <select
                      name="ProductCESSNonAdvol"
                      className="border-gray-300 border-2 rounded-lg outline-none px-8 py-0.5 bg-yellow-100 text-gray-400"
                      required
                      disabled
                    >
                      <option value="CESSNonAdvol">XXXXX</option>
                      <option value="CESSNonAdvol">CESS Non Advol</option>
                      <option value="CESSNonAdvol">CESS Non Advol</option>
                      <option value="CESSNonAdvol">CESS Non Advol</option>
                      <option value="CESSNonAdvol">CESS Non Advol</option>
                    </select>
                  </td>
                  {/* <td><IoTrashBinSharp className="text-3xl text-red-800"/></td> */}
                </tr>
              </table>
            </div>
            <div className="p-2">
              <table className="flex flex-col justify-evenly w-full">
                <tr className="flex gap-x-60  items-center mb-4 ml-2">
                  <th>Total Taxable Amount</th>
                  <th>CGST Amount</th>
                  <th>SGST Amount</th>
                  <th>IGST Amount</th>
                </tr>
                <tr className="flex gap-x-40 items-center mb-4">
                  <td>
                    <input
                      type="number"
                      className="TotalTaxableAmount border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-gray-300 text-gray-400 cursor-not-allowed"
                      name="TotalTaxableAmount"
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="CGSTAmount border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400 "
                      placeholder="XXXX"
                      name="CGSTAmount"
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="SGST Amount border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="SGST Amount"
                      placeholder="XXXX"
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="IGSTAmount border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="IGSTAmount"
                      placeholder="XXXX"
                      disabled
                    />
                  </td>
                </tr>
                <tr className="flex gap-x-48  items-center mb-4 ml-2">
                  <th>CESS Advol Amount</th>
                  <th>CESS Non Advol Amount</th>
                  <th>Other Amount (+/-)</th>
                  <th>Total Inv. Amount</th>
                </tr>
                <tr className="flex gap-x-40 items-center mb-4">
                  <td>
                    <input
                      type="number"
                      className="CESSAdvolAmount border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="CESSAdvolAmount"
                      placeholder="XXXX"
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="CESSNonAdvolAmount border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="CESSNonAdvolAmount"
                      placeholder="XXXX"
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="OtherAmount border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="OtherAmount"
                      placeholder="XXXX"
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="TotalInvAmount border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                      name="TotalInvAmount"
                      placeholder="XXXX"
                      disabled
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          {/* transportation container */}
          <div className="mt-2 bg-gray-200 ">
            <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">
              Transportation Details
            </h2>
            <div className="p-4 flex gap-80">
              <div>
                <label htmlFor="TransporterID" className="font-bold mr-4">
                  Transporter ID
                </label>
                <input
                  type="text"
                  className="TransporterId border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                  name="TransporterID"
                  placeholder="XXXXXXXXX"
                  disabled
                />
              </div>
              <div>
                <label htmlFor="TransporterName" className="font-bold mr-4">
                  Transporter Name
                </label>
                <input
                  type="text"
                  className="TransporterName border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                  name="TransporterName"
                  placeholder="XXXXXXX"
                  disabled
                />
              </div>
            </div>
            <div className="p-4 flex gap-40">
              <div>
                <label htmlFor="PinToPin" className="font-bold mr-4">
                  Auto Calculated PIN to PIN (in KM)
                </label>
                <input
                  type="text"
                  className="PinToPin border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                  name="PinToPin"
                  placeholder="XXXX"
                  disabled
                />
              </div>
              <div>
                <label htmlFor="ApproxDist" className="font-bold mr-4">
                  Approximate Distance (in KM)
                </label>
                <input
                  type="text"
                  className="ApproxDist border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 bg-yellow-100 text-gray-400"
                  name="ApproxDist"
                  placeholder="XXXXXXXX"
                  disabled
                />
              </div>
            </div>
          </div>
          {/* Part B */}
          <div className="mt-2 bg-gray-200 ">
            <h2 className="text-1xl font-bold text-white w-full bg-green-500 p-2">
              PART-B
            </h2>
            <table className="flex flex-col justify-center w-full pb-5">
              <tr className="w-full flex gap-48 p-4">
                <td className="">
                  <label
                    htmlFor="Mode"
                    className="font-bold ml-4 mr-4"
                    required
                  >
                    Mode
                  </label>
                  <input
                    type="radio"
                    name="Mode"
                    value="Road"
                    className="mr-2 text-gray-400"
                    defaultChecked
                  />
                  Road
                  <input
                    type="radio"
                    name="Mode"
                    value="Rail"
                    className="mr-2 ml-2 text-gray-400"
                  />
                  Rail
                  <input
                    type="radio"
                    name="Mode"
                    value="Air"
                    className="mr-2 ml-2 text-gray-400"
                  />
                  Air
                  <input
                    type="radio"
                    name="Mode"
                    value="Ship"
                    className="mr-2 ml-2 text-gray-400"
                  />
                  Ship or Ship Cum Road/Rail
                </td>
                <td>
                  <label
                    htmlFor="VehicleType"
                    className="font-bold mr-4"
                    required
                  >
                    Vehicle Type
                  </label>
                  <input
                    type="radio"
                    name="VehicleType"
                    value="Regular"
                    className="mr-2 text-gray-400"
                  />
                  Regular
                  <input
                    type="radio"
                    name="VehicleType"
                    value="Over Dimensional Cargo"
                    defaultChecked
                    className="mr-2 ml-2 text-gray-400"
                  />
                  Over Dimensional Cargo
                </td>
              </tr>
              <tr className="flex gap-x-16     ">
                <td className="p-2">
                  <label
                    htmlFor="VehicleNum"
                    className="pr-2 pl-5 font-bold mr-2"
                    required
                  >
                    Vehicle No.
                  </label>
                  <input
                    type="text"
                    className="VehicleNum border-gray-600 border-2 rounded-lg outline-none px-2 py-0.5 bg-gray-200 text-black "
                    name="VehicleNum"
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className={`border-2 rounded-full px-10 py-1 inline-block font-semibold ml-2 ${
                      formData.VehicleNum
                        ? "border-green-500 bg-green-500 text-white hover:bg-white hover:text-green-500"
                        : "border-green-300 bg-green-300 text-white cursor-not-allowed"
                    }`}
                    onClick={greenformgo}
                    disabled={!formData.VehicleNum} // Button is disabled if inputValue is empty
                  >
                    Green Logistics
                  </button>
                </td>
                <td className="ml-2">
                  <label
                    htmlFor="TransporterDoc"
                    className="font-bold mr-4"
                    required
                  >
                    Transporter Doc. No. & Date
                  </label>
                  <input
                    type="number"
                    className="TransporterDoc opacity-50 border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 mr-4 bg-gray-400 cursor-not-allowed"
                    name="TransporterDoc"
                    disabled
                  />
                  <input
                    type="date"
                    className="TransporterDate border-gray-300 border-2 rounded-lg outline-none px-2 py-0.5 opacity-50 bg-gray-400 text-gray-300 cursor-not-allowed"
                    name="TransporterDate"
                    disabled
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="flex justify-center m-1 pt-2 bg-white">
            <button
              type="button"
              className="border-2 border-green-300 bg-green-300 text-white rounded-full px-12 py-2 inline-block font-semibold  ml-2 cursor-not-allowed"
              disabled
              onClick={greenformgo}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temp2;
