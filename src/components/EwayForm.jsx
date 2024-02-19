import React from 'react'
import { useState } from 'react'
function EwayForm() {
  const [tempDetail,setTempDetail]=useState({});
  const [detail,setDetail]=useState
  return (
    <div className='bg-black'>
        <h2>E-WAYBILL ENTRY FORM</h2>
        <div className="mainContainer">
            <div className="transactionContainer">
                <div className="r1">
                    <label htmlFor="supplyType" required>Supply Type</label>
                    <input type='radio' name='supplyType' value="Outward"/>OutWard
                    <input type='radio' name='supplyType' value="Inward"/>InWard 
                    <label htmlFor="subType" required>Sub Type</label>
                    <input type='radio' name='subType' value="Supply"/>Supply
                    <input type='radio' name='subType' value="Export"/>Export
                    <input type='radio' name='subType' value="JobWork"/>Job Work
                    <input type='radio' name='subType' value="SKD"/>SKD/CKD/Lots
                    <input type='radio' name='subType' value="RecipentNotKnown"/>Recipent Not Known
                    <input type='radio' name='subType' value="ForOwnUse"/>For Own Use
                    <input type='radio' name='subType' value="Exhibition"/>Exhibition or Fairs
                    <input type='radio' name='subType' value="LineSales"/>Line Sales
                    <input type='radio' name='subType' value="Others"/>Others
                </div>
                <div className="r2">
                  <label htmlFor="docType">Document Type</label>
                  <select name='docType' required>
                    <option value='TaxInvoice'>Tax Invoice</option>
                    <option value='TaxInvoice'>Tax Invoice</option>
                    <option value='TaxInvoice'>Tax Invoice</option>
                    <option value='TaxInvoice'>Tax Invoice</option>
                    <option value='TaxInvoice'>Tax Invoice</option>
                  </select>
                  <label htmlFor="docNum">Document No.</label>
                  <input type='number' name='docNum' className='DocNum'/>
                  <label htmlFor="docDate">Document No.</label>
                  <input type='date' name='docDate' className='DocDate'/>
                  <label htmlFor="TransactionType">Transaction Type</label>
                  <select name='TransactionType' required>
                    <option value='Regular'>Regular</option>
                    <option value='Regular'>Regular</option>
                    <option value='Regular'>Regular</option>
                    <option value='Regular'>Regular</option>
                    <option value='Regular'>Regular</option>
                  </select>
                </div>
            </div>
            <div className="billDispatch">
              <div className="BillFrom">
                <h2>Bill From</h2>
                <div className="tableContainer">
                <tr className="NameContainer">
                   <td>Name</td>
                   <td><input type='text' className='Name' name='BillFromName'/></td>
                </tr>
                <tr className="GSTContainer">
                   <td>GSTIN</td>
                   <td><input type='text' className='GSTField' name='BillFromGst'/></td>
                </tr>
                <tr className="stateContainer">
                  <td>State</td>
                  <td>
                     <select name='BillFromState' required>
                       <option value='State'>State</option>
                       <option value='State'>State</option>
                       <option value='State'>State</option>
                       <option value='State'>State</option>
                       <option value='State'>State</option>
                     </select>
                  </td>
                </tr>
                </div>
              </div>
              <div className="DispatchFrom">
                <h2>Dispatch From</h2>
                <div className="tableConatiner">
                <tr className="AddressContainer">
                     <td>Address</td>
                     <td>
                      <input type='text' className='AddressA' name='DispatchFromAddressA'/>
                      <input type='text' className='AddressB' name='DispatchFromAddressB'/>
                     </td>
                  </tr>
                  <tr className="PlaceContainer">
                     <td>Place</td>
                     <td><input type='text' className='Place' name='DispatchFromPlace'/></td>
                  </tr>
                  <tr className="PincodeContainer">
                    <td>Pincode</td>
                    <td>
                       <input type='number' className='Pincode' name='DispatchFromPincodeNum'/>
                       <select name='DispatchFromPincodeDd' required>
                         <option value='State'>State</option>
                         <option value='State'>State</option>
                         <option value='State'>State</option>
                         <option value='State'>State</option>
                         <option value='State'>State</option>
                       </select>
                    </td>
                  </tr>
                  </div>
              </div>
            </div>
            <div className="billShip">
              <div className="BillTo">
                <h2>Bill To</h2>
                <div className="tableContainer">
                <tr className="NameContainer">
                   <td>Name</td>
                   <td><input type='text' className='Name' name='BillToName'/></td>
                </tr>
                <tr className="GSTContainer">
                   <td>GSTIN</td>
                   <td><input type='text' className='GSTField' name='BillToGst'/></td>
                </tr>
                <tr className="stateContainer">
                  <td>State</td>
                  <td>
                     <select name='BillToState' required>
                       <option value='State'>State</option>
                       <option value='State'>State</option>
                       <option value='State'>State</option>
                       <option value='State'>State</option>
                       <option value='State'>State</option>
                     </select>
                  </td>
                </tr>
                </div>
              </div>
              <div className="ShipTo">
                <h2>Ship To</h2>
                <div className="tableConatiner">
                <tr className="AddressContainer">
                     <td>Address</td>
                     <td>
                      <input type='text' className='AddressA' name='ShipToAddressA'/>
                      <input type='text' className='AddressB' name='ShipToAddressB'/>
                     </td>
                  </tr>
                  <tr className="PlaceContainer">
                     <td>Place</td>
                     <td><input type='text' className='Place' name='ShipToPlace'/></td>
                  </tr>
                  <tr className="PincodeContainer">
                    <td>Pincode</td>
                    <td>
                       <input type='number' className='Pincode' name='ShipToPincodeNum'/>
                       <select name='ShipToPincodeDd' required>
                         <option value='State'>State</option>
                         <option value='State'>State</option>
                         <option value='State'>State</option>
                         <option value='State'>State</option>
                         <option value='State'>State</option>
                       </select>
                    </td>
                  </tr>
                  </div>
              </div>
            </div>
            <div className="itemDetailsContainer">
              <h2>Item Details</h2>
              <div className="t1">
                 <table className="ProductTable">
                  <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>HSN</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Valuable/Taxable Value(Rs.)</th>
                    <th>CGST+SGST Rate(%)</th>
                    <th>IGST Rate(%)</th>
                    <th>CESS Advol Rate(%)</th>
                    <th>CESS non Advol Rate</th>
                    <th>+</th>
                  </tr>
                  <tr>
                    <td><input type='text' className='ProductName' name='ProductName' placeholder='Name'/></td>
                    <td><input type='text' className='ProductDescription' name='ProductDescription' placeholder='Description'/></td>
                    <td><input type='text' className='ProductHSN' name='ProductHSN' placeholder='HSN'/></td>
                    <td><input type='text' className='ProductQuantity' name='ProductQuantity' placeholder='Quantity'/></td>
                    <td><input type='text' className='ProductUnit' name='ProductUnit' placeholder='Unit'/></td>
                    <td><input type='text' className='ProductTaxableValue' name='ProductTaxableValue' placeholder='Taxable Value'/></td>
                    <td>
                       <select name='ProductCGST' required>
                         <option value='CGST'>CGST</option>
                         <option value='CGST'>CGST</option>
                         <option value='CGST'>CGST</option>
                         <option value='CGST'>CGST</option>
                         <option value='CGST'>CGST</option>
                       </select>
                    </td>
                    <td>
                       <select name='ProductIGST' required>
                         <option value='IGST'>IGST</option>
                         <option value='IGST'>IGST</option>
                         <option value='IGST'>IGST</option>
                         <option value='IGST'>IGST</option>
                         <option value='IGST'>IGST</option>
                       </select>
                    </td>
                    <td>
                       <select name='ProductCESSAdvol' required>
                         <option value='CESS'>CESS</option>
                         <option value='CESS'>CESS</option>
                         <option value='CESS'>CESS</option>
                         <option value='CESS'>CESS</option>
                         <option value='CESS'>CESS</option>
                       </select>
                    </td>
                    <td>
                       <select name='ProductCESSNonAdvol' required>
                         <option value='CESSNonAdvol'>CESS Non Advol</option>
                         <option value='CESSNonAdvol'>CESS Non Advol</option>
                         <option value='CESSNonAdvol'>CESS Non Advol</option>
                         <option value='CESSNonAdvol'>CESS Non Advol</option>
                         <option value='CESSNonAdvol'>CESS Non Advol</option>
                       </select>
                    </td>
                    <td>Delete</td>
                  </tr>
                 </table>
              </div>
              <div className="t2">
                 <table className="TotalTaxTable">
                  <tr>
                    <th>Total Taxable Amount</th>
                    <th>CGST Amount</th>
                    <th>SGST Amount</th>
                    <th>IGST Amount</th>
                    <th>CESS Advol Amount</th>
                    <th>CESS Non Advol Amount</th>
                    <th>Other Amount (+/-)</th>
                    <th>Total Inv. Amount</th>
                  </tr>
                  <tr>
                    <td><input type='number' className='TotalTaxableAmount' name='TotalTaxableAmount'disabled/></td>
                    <td><input type='number' className='CGSTAmount' name='CGSTAmount'  /></td>
                    <td><input type='number' className='SGST Amount' name='SGST Amount'  /></td>
                    <td><input type='number' className='IGSTAmount' name='IGSTAmount'  /></td>
                    <td><input type='number' className='CESSAdvolAmount' name='CESSAdvolAmount'  /></td>
                    <td><input type='number' className='CESSNonAdvolAmount' name='CESSNonAdvolAmount'  /></td>
                    <td><input type='number' className='OtherAmount' name='OtherAmount'  /></td>
                    <td><input type='number' className='TotalInvAmount' name='TotalInvAmount'  /></td>
                  </tr>
                 </table>
              </div>
            </div>
            <div className="transportationContainer">
              <h2>Transportation Details</h2>
              <label htmlFor="TransporterID">Transporter ID</label>
              <input type='text' className="TransporterId" name='TransporterID'/>
              <label htmlFor="TransporterName">Transporter Name</label>
              <input type='text' className="TransporterName" name='TransporterName' placeholder='Name'/>
              <label htmlFor="PinToPin">Auto Calculated PIN to PIN (in KM)</label>
              <input type='text' className="PinToPin" name='PinToPin' placeholder='Name' value={1234} disabled/>
              <label htmlFor="ApproxDist">Approximate Distance (in KM)</label>
              <input type='text' className="ApproxDist" name='ApproxDist'/>
            </div>
            <div className="partBContainer">
              <h2>PART-B</h2>
              <table>
                <tr>
                  <td>
                    <label htmlFor="Mode" required>Mode</label>
                    <input type='radio' name='Mode' value="Road"/>Road
                    <input type='radio' name='Mode' value="Rail"/>Rail
                    <input type='radio' name='Mode' value="Air"/>Air
                    <input type='radio' name='Mode' value="Ship"/>Ship or Ship Cum Road/Rail
                    <label htmlFor="VehicleType" required>Vehicle Type</label>
                    <input type='radio' name='VehicleType' value="Regular"/>Regular
                    <input type='radio' name='VehicleType' value="Over Dimensional Cargo"/>Over Dimensional Cargo
                  </td>
                </tr>
                <tr>
                  <label htmlFor="VehicleNum" required>Vehicle No.</label>
                  <input type="number" className='VehicleNum' name='VehicleNum'/>
                  <label htmlFor="TransporterDoc" required>Transporter Doc. No. & Date</label>
                  <input type="number" className='TransporterDoc' name='TransporterDoc'/>
                  <input type='date' className='TransporterDate' name='TransporterDate'/>
                </tr>
              </table>
              <div className="btn">
                <button type='button' className='border-2 border-green-300 bg-green-300 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 cursor-not-allowed'>Preview</button>
                <button type='submit' className='border-2 border-green-300 bg-green-300 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 cursor-not-allowed'>Submit</button>
                <button type='button' className='border-2 border-green-300 bg-green-300 text-white rounded-full px-12 py-2 inline-block font-semibold  hover:bg-white hover:text-green-500 cursor-not-allowed'>Exit</button>
              </div>
            </div>

        </div>
    </div>
  )
}

export default  EwayForm;