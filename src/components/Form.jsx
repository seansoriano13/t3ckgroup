import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { Upload } from "lucide-react";

const focusStyle = "focus:outline-none focus:border-b-gray-10";
const inputStyle = `h-12 placeholder:text-description placeholder:text-xs border-b border-gray-a6 ${focusStyle}`;

function CustomFileInput({ field }) {
  const [file, setFile] = useState(null);

  return (
    <div className={`col-span-${field.gridSpan} flex items-center gap-2`}>
      {/* Hidden native file input */}
      <input
        type="file"
        id={field.name}
        className="hidden"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <p className="text-xs text-description">
        {field.placeholder || "Upload File"}
      </p>

      {/* Custom button */}
      <button
        type="button"
        onClick={() => document.getElementById(field.name).click()}
        className={`px-3 py-2 border rounded ${inputStyle} text-sm`}
      >
        <Upload />
      </button>

      {/* Selected file name */}
      <span className="text-xs text-gray-500">
        {file ? file.name : "No file selected"}
      </span>
    </div>
  );
}

export const Form = ({
  backgroundText = "",
  formTitle = "",
  formDescription = "",
  sections = [],
  submitLabel = "",
}) => (
  <>
    {/* HEADER TITLE */}
    <h1 className="px-10 absolute top-12 -translate-x-1/2 left-1/2 w-full text-center text-[100px] leading-none text-gray-a3">
      {backgroundText}
    </h1>

    {/* INPUTS */}
    <div className="justify-self-center grid gap-8 px-8 py-10 drop-shadow-2xl backdrop-blur-xs bg-gray-a1 w-166.25 border border-gray-a6">
      <div className="grid gap-1">
        <h2 className="text-2xl">{formTitle}</h2>
        <p className="text-xs text-description">{formDescription}</p>
      </div>

      <div className="grid gap-8">
        {sections?.map((section) => (
          <div className="grid gap-6" key={section.id}>
            <h3>{section.title}</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {section.fields.map((field) => {
                if (field.textArea) {
                  return (
                    <textarea
                      key={field.name}
                      placeholder={field.placeholder}
                      className={`h-18 col-span-${field.gridSpan} placeholder:text-xs placeholder:text-description border-b border-gray-a6 ${focusStyle}`}
                    />
                  );
                }

                if (field.type === "file") {
                  return <CustomFileInput key={field.name} field={field} />;
                }

                if (field.select) {
                  return (
                    <select
                      className={`${inputStyle} text-xs`}
                      defaultValue=""
                      name={field.name}
                    >
                      <option value="" disabled hidden>
                        Choose
                      </option>

                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  );
                }

                return (
                  <input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`col-span-${field.gridSpan} ${inputStyle}`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <PrimaryButton label={submitLabel || "SUBMIT"} />
    </div>
  </>
);
