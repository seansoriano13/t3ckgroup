import { useEffect, useState } from "react"
import { useCartStore } from "../../store/useStore"
import Grainient from "../../components/filters/Grainient"
import PrimaryButton from "../../components/PrimaryButton"
import { Link } from "react-router"
import { Trash2 } from "lucide-react"

const focusStyle = "focus:outline-none focus:border-b-gray-10"
const inputStyle = `h-12 placeholder:text-description placeholder:text-xs border-b border-gray-a6 ${focusStyle}`

function ProcurementSummary() {
  const { cartItems, removeFromCart, updateQuantity } = useCartStore()

  const [formData, setFormData] = useState({
    organization: "",
    department: "",
    officer: "",
    designation: "",
    comms: "",
    vector: "",
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitting procurement request for:", cartItems, formData)
  }

  const branchName = cartItems.length > 0 ? cartItems[0].company : "N/A"

  // Format total units
  const totalUnits = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      <div className="relative h-full py-40 z-10 print:p-0 print:m-0">
        <div className="absolute inset-0 print:hidden">
          <Grainient
            color1="#030508"
            color2="#516179"
            color3="#641210"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        <div className="wrapper relative grid gap-16">
          <div className="grid gap-3">
            <p className="text-description">01 TG</p>
            <hr className="border-gray-a6" />
          </div>

          <h1 className="px-10 absolute top-12 -translate-x-1/2 left-1/2 w-full text-center text-[100px] leading-none text-gray-a3">
            PROCUREMENT SUMMARY
          </h1>

          {/* MAIN CONTENT STACKED LAYOUT */}
          <div className="grid gap-12 mt-12 px-8 max-w-5xl mx-auto w-full">
            {/* TOP: FORM AND CART LIST */}
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* LEFT: CART ITEMS */}
              <div className="bg-gray-a1 border border-gray-a6 p-8 backdrop-blur-xs flex flex-col h-[520px]">
                <h2 className="text-2xl mb-2 font-tactic text-white">
                  SELECTED ASSETS
                </h2>
                <p className="text-xs text-description mb-8">
                  Review the assets you want to include in this quotation.
                </p>

                <div className="flex-1 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                  {cartItems.length === 0 ? (
                    <div className="py-10 text-center text-gray-8">
                      <p>No products selected.</p>
                      <Link
                        to="/main"
                        className="text-red-9 hover:underline mt-4 inline-block"
                      >
                        Browse Products
                      </Link>
                    </div>
                  ) : (
                    <div className="grid gap-6">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 border-b border-gray-6 pb-4 relative"
                        >
                          <div className="w-20 h-20 bg-gray-4 shrink-0 flex-center">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-[10px] text-gray-8">
                                Image
                              </span>
                            )}
                          </div>

                          <div className="grid gap-1 flex-1">
                            <p className="text-[10px] text-gray-8">
                              {item.company} | {item.category}
                            </p>
                            <h3 className="text-md text-white font-bold">
                              {item.name}
                            </h3>
                            <p className="text-[10px] text-gray-6">
                              SKU: {item.sku}
                            </p>

                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs text-gray-10">QTY:</span>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(
                                    item.id,
                                    parseInt(e.target.value) || 1,
                                  )
                                }
                                className="bg-gray-1 border border-gray-6 text-white text-xs px-2 py-1 w-16 outline-none"
                              />
                            </div>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="absolute top-0 right-0 text-red-9 hover:text-red-10 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT: INPUT FORM */}
              <div className="bg-gray-a1 border border-gray-a6 p-8 backdrop-blur-xs h-[520px] flex flex-col">
                <h2 className="text-2xl mb-2 font-tactic text-white">
                  REQUESTER INTEL
                </h2>
                <p className="text-xs text-description mb-8">
                  Fill out your intel to populate the preliminary manifest.
                </p>

                <div className="grid gap-4">
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Requesting Organization *"
                    required
                    className={`${inputStyle}`}
                  />
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    placeholder="Department / Unit *"
                    required
                    className={`${inputStyle}`}
                  />
                  <input
                    type="text"
                    name="officer"
                    value={formData.officer}
                    onChange={handleInputChange}
                    placeholder="Authorized Officer *"
                    required
                    className={`${inputStyle}`}
                  />
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    placeholder="Officer Designation *"
                    required
                    className={`${inputStyle}`}
                  />
                  <input
                    type="text"
                    name="comms"
                    value={formData.comms}
                    onChange={handleInputChange}
                    placeholder="Contact Comms (Email/Phone) *"
                    required
                    className={`${inputStyle}`}
                  />
                  <input
                    type="text"
                    name="vector"
                    value={formData.vector}
                    onChange={handleInputChange}
                    placeholder="Deployment Vector (Address) *"
                    required
                    className={`${inputStyle}`}
                  />
                </div>
              </div>
            </div>

            {/* BOTTOM: SUBMISSION FORM / PREVIEW PAPER */}
            <div className="mt-12 flex flex-col gap-4 print:mt-0 print:gap-0">
              <div className="flex justify-between items-end">
                <p className="text-xs text-gray-11 font-tactic tracking-widest uppercase">
                  Document Preview
                </p>
              </div>

              <div
                id="manifest-paper"
                className="bg-[url('/overlay/25-full.jpg')] text-black p-8 md:p-12 drop-shadow-xl relative font-sans pointer-events-none overflow-hidden print:shadow-none print:m-0 print:p-8 print:bg-white print:text-black print:static print:pointer-events-auto"
              >
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/white-paper.png')] print:hidden"></div>

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                  <div className="w-40">
                    {/* Using T3CKGROUP Logo Placeholder */}
                    <img
                      src="/main-logo-black-text.svg"
                      alt="T3CKGROUP"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="text-center flex-1">
                    <h2 className="text-3xl font-tactic font-black tracking-widest text-black">
                      PRELIMINARY MANIFEST
                    </h2>
                    <p className="text-sm font-bold tracking-widest mt-1">
                      OFFICIAL QUOTATION REQUEST
                    </p>
                  </div>
                  <div className="text-xs font-bold text-right tracking-wider">
                    <p>DOC ID: OQR-SH47D</p>
                  </div>
                </div>

                {/* Requester Intel Table */}
                <div className="mb-8 ">
                  <h3 className="font-tactic text-xl font-black mb-3">
                    REQUESTER INTEL
                  </h3>
                  <div className="border-2 border-black divide-y-2 divide-black">
                    <div className="flex divide-x-2 divide-black">
                      <div className="w-1/3 bg-black/5 p-3 font-bold text-xs md:text-sm">
                        REQUESTING ORGANIZATION
                      </div>
                      <div className="w-2/3 p-3 font-bold text-xs md:text-sm">
                        {formData.organization || "—"}
                      </div>
                    </div>
                    <div className="flex divide-x-2 divide-black">
                      <div className="w-1/3 bg-black/5 p-3 font-bold text-xs md:text-sm">
                        DEPARTMENT/UNIT
                      </div>
                      <div className="w-2/3 p-3 font-bold text-xs md:text-sm">
                        {formData.department || "—"}
                      </div>
                    </div>
                    <div className="flex divide-x-2 divide-black">
                      <div className="w-1/3 bg-black/5 p-3 font-bold text-xs md:text-sm">
                        AUTHORIZED OFFICER
                      </div>
                      <div className="w-2/3 p-3 font-bold text-xs md:text-sm">
                        {formData.officer || "—"}
                      </div>
                    </div>
                    <div className="flex divide-x-2 divide-black">
                      <div className="w-1/3 bg-black/5 p-3 font-bold text-xs md:text-sm">
                        OFFICER DESIGNATION
                      </div>
                      <div className="w-2/3 p-3 font-bold text-xs md:text-sm">
                        {formData.designation || "—"}
                      </div>
                    </div>
                    <div className="flex divide-x-2 divide-black">
                      <div className="w-1/3 bg-black/5 p-3 font-bold text-xs md:text-sm">
                        CONTACT COMMS
                      </div>
                      <div className="w-2/3 p-3 font-bold text-xs md:text-sm">
                        {formData.comms || "—"}
                      </div>
                    </div>
                    <div className="flex divide-x-2 divide-black">
                      <div className="w-1/3 bg-black/5 p-3 font-bold text-xs md:text-sm">
                        DEPLOYMENT VECTOR
                      </div>
                      <div className="w-2/3 p-3 font-bold text-xs md:text-sm">
                        {formData.vector || "—"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Asset Requisition Table */}
                <div className="mb-8">
                  <h3 className="font-tactic text-xl font-black mb-3">
                    ASSET REQUISITION TABLE
                  </h3>
                  <div className="border-2 border-black">
                    {/* Table Header */}
                    <div className="flex bg-black/5 border-b-2 border-black divide-x-2 divide-black text-center font-bold text-xs md:text-sm">
                      <div className="w-1/5 p-3">QUANTITY</div>
                      <div className="w-1/4 p-3">SKU</div>
                      <div className="w-[55%] p-3">ASSET DESCRIPTION</div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y-2 divide-black">
                      {cartItems.length === 0 ? (
                        <div className="p-4 text-center text-sm font-bold text-black/50">
                          NO ASSETS SELECTED
                        </div>
                      ) : (
                        cartItems.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex divide-x-2 divide-black text-center font-bold text-xs md:text-sm"
                          >
                            <div className="w-1/5 p-3 flex-center">
                              {String(item.quantity).padStart(2, "0")}
                            </div>
                            <div className="w-1/4 p-3 flex-center uppercase">
                              {item.sku}
                            </div>
                            <div className="w-[55%] p-3 text-left uppercase">
                              {item.name} - {item.category}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Totals & Status Section */}
                <div className="mb-12">
                  <h3 className="font-tactic text-xl font-black mb-3">
                    TOTALS AND STATUS SECTION
                  </h3>
                  <div className="border-2 border-black">
                    {/* Table Header */}
                    <div className="flex bg-black/5 border-b-2 border-black divide-x-2 divide-black text-center font-bold text-xs md:text-sm">
                      <div className="w-1/4 p-3 flex-center">
                        TOTAL ASSET COUNT
                      </div>
                      <div className="w-1/4 p-3 flex-center">
                        ESTIMATED TOTAL COST
                      </div>
                      <div className="w-1/2 p-3 flex-center">SYSTEM STATUS</div>
                    </div>
                    {/* Table Body */}
                    <div className="flex divide-x-2 divide-black text-center font-bold text-xs md:text-sm bg-black/5">
                      <div className="w-1/4 p-4 flex-center">
                        {String(totalUnits).padStart(2, "0")} UNITS
                      </div>
                      <div className="w-1/4 p-4 flex-center">
                        PENDING SALES CALCULATION
                      </div>
                      <div className="w-1/2 p-4 flex-center">
                        READY FOR SECURE TRANSMISSION
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Signatures */}
                <div className="mt-16 pt-8 relative">
                  <div className="w-64 border-t-2 border-black pt-2">
                    <p className="font-bold text-sm">REQUESTER SIGNATURE</p>
                  </div>

                  <div className="mt-12 text-center">
                    <p className="text-[10px] md:text-xs italic text-black/70 font-bold">
                      This document is a preliminary draft for quotation
                      purposes only. Not valid as a final purchase order or
                      invoice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="flex justify-end mb-20">
              <form onSubmit={handleSubmit}>
                <PrimaryButton
                  label="TRANSMIT OFFICIAL QUOTATION REQUEST"
                  disabled={cartItems.length === 0}
                  className={
                    cartItems.length === 0
                      ? "opacity-50 cursor-not-allowed py-4 px-8 text-lg"
                      : "py-4 px-8 text-lg"
                  }
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProcurementSummary
