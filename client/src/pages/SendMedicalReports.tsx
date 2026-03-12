import { useState, useRef } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";

const ACCEPTED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/tiff",
  "application/dicom",
  ".dcm",
];
const ACCEPTED_ATTR = ".pdf,.jpg,.jpeg,.png,.tiff,.tif,.dcm";
const MAX_FILE_SIZE_MB = 16;
const MAX_FILES = 10;

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Strip the data URL prefix: "data:<mime>;base64,"
      resolve(result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function SendMedicalReports() {
  const [patientName, setPatientName] = useState("");
  const [country, setCountry] = useState("");
  const [medicalCondition, setMedicalCondition] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const submitMutation = trpc.medicalReports.submit.useMutation({
    onSuccess: (data) => {
      setReferenceId(data.referenceId);
      setSubmitted(true);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const selected = Array.from(e.target.files ?? []);
    if (files.length + selected.length > MAX_FILES) {
      setFileError(`A maximum of ${MAX_FILES} files may be submitted per case.`);
      return;
    }
    const oversized = selected.filter(f => f.size > MAX_FILE_SIZE_MB * 1024 * 1024);
    if (oversized.length > 0) {
      setFileError(`Each file must not exceed ${MAX_FILE_SIZE_MB} MB. Please reduce file size before submitting.`);
      return;
    }
    setFiles(prev => [...prev, ...selected]);
    // Reset input so the same file can be re-added after removal
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitMutation.isPending) return;

    const encodedFiles = await Promise.all(
      files.map(async (f) => ({
        name: f.name,
        mimeType: f.type || "application/octet-stream",
        base64: await fileToBase64(f),
      }))
    );

    submitMutation.mutate({
      patientName,
      country,
      medicalCondition,
      files: encodedFiles,
    });
  };

  const inputClass =
    "w-full px-4 py-3 border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-500 transition-colors placeholder-slate-400";
  const labelClass = "block text-xs font-medium text-slate-600 uppercase tracking-wide mb-1.5";

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Top Contact Bar */}
      <div className="w-full bg-slate-900 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-sm">
          <a href="mailto:info@medicalcaregermany.com" className="hover:text-slate-300 transition-colors">
            info@medicalcaregermany.com
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full py-3 px-8 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm">
        <div className="flex flex-col">
          <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
            Medical Care Germany
          </Link>
          <span className="text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">
            Institutional Clinical Coordination Authority
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
            ← Return to Home
          </Link>
          <span className="text-slate-300 text-xs hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs text-slate-900 font-medium">EN</span>
            <span className="text-slate-300 text-xs">|</span>
            <a href="/ar" className="text-xs text-slate-400 hover:text-slate-700 transition-colors">AR</a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">

        {!submitted ? (
          <>
            {/* Page Header */}
            <div className="mb-12">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">
                Medical Documentation Submission
              </p>
              <h1 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 leading-tight mb-5">
                Send Medical Reports for Specialist Review in Germany
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                Patients may submit their medical reports for review by a medical coordinator in Berlin.
                Complex cases can be directed to the appropriate specialist or university hospital.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 mb-10" />

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Name */}
              <div>
                <label htmlFor="patientName" className={labelClass}>
                  Full Name <span className="text-slate-400 normal-case tracking-normal font-normal">*</span>
                </label>
                <input
                  id="patientName"
                  type="text"
                  required
                  value={patientName}
                  onChange={e => setPatientName(e.target.value)}
                  placeholder="Patient full name"
                  className={inputClass}
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className={labelClass}>
                  Country <span className="text-slate-400 normal-case tracking-normal font-normal">*</span>
                </label>
                <input
                  id="country"
                  type="text"
                  required
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  placeholder="Country of residence"
                  className={inputClass}
                />
              </div>

              {/* Medical Condition */}
              <div>
                <label htmlFor="medicalCondition" className={labelClass}>
                  Medical Condition <span className="text-slate-400 normal-case tracking-normal font-normal">*</span>
                </label>
                <textarea
                  id="medicalCondition"
                  required
                  rows={4}
                  value={medicalCondition}
                  onChange={e => setMedicalCondition(e.target.value)}
                  placeholder="Brief description of the medical condition and current clinical situation"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* File Upload */}
              <div>
                <label className={labelClass}>
                  Upload Medical Reports
                  <span className="text-slate-400 normal-case tracking-normal font-normal ml-1">
                    (PDF, DICOM, Images — max {MAX_FILE_SIZE_MB} MB each, up to {MAX_FILES} files)
                  </span>
                </label>

                {/* Drop zone */}
                <div
                  className="border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center cursor-pointer hover:border-slate-500 hover:bg-slate-100 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={e => e.key === "Enter" && fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  aria-label="Select files to upload"
                >
                  <p className="text-sm text-slate-500">
                    Click to select files
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Accepted: PDF, DICOM (.dcm), JPEG, PNG, TIFF
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept={ACCEPTED_ATTR}
                  onChange={handleFileChange}
                  className="hidden"
                  aria-label="Upload medical reports"
                />

                {/* File error */}
                {fileError && (
                  <p className="mt-2 text-xs text-red-600">{fileError}</p>
                )}

                {/* Selected files list */}
                {files.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {files.map((f, i) => (
                      <li key={i} className="flex items-center justify-between text-sm text-slate-700 border border-slate-100 px-3 py-2 bg-white">
                        <span className="truncate max-w-[80%]">{f.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="text-slate-400 hover:text-slate-700 ml-3 flex-shrink-0 text-xs"
                          aria-label={`Remove ${f.name}`}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Confidentiality notice */}
              <p className="text-xs text-slate-400 leading-relaxed">
                All submitted documentation is handled in accordance with German data protection regulations.
                Case reviews are conducted in alignment with German clinical governance practices.
              </p>

              {/* Submit error */}
              {submitMutation.isError && (
                <p className="text-xs text-red-600">
                  An error occurred during submission. Please try again or contact us directly at info@medicalcaregermany.com.
                </p>
              )}

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full bg-slate-900 text-white py-4 text-sm font-medium tracking-wide hover:bg-slate-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitMutation.isPending ? "Submitting…" : "Submit Medical Reports"}
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Confirmation state */
          <div className="py-12">
            <div className="mb-8">
              <div className="h-px bg-slate-200 mb-8" />
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">
                Submission Received
              </p>
              <h1 className="text-2xl md:text-3xl font-serif font-medium text-slate-900 leading-tight mb-5">
                Your medical case will be reviewed within 24–48 hours.
              </h1>
              <div className="h-px bg-slate-100 my-6" />
              {referenceId && (
                <p className="text-sm text-slate-600 mb-4">
                  Reference number:{" "}
                  <span className="font-mono font-medium text-slate-900">{referenceId}</span>
                </p>
              )}
              <p className="text-sm text-slate-500 leading-relaxed">
                The submitted documentation is under preliminary review within our clinical coordination framework.
                No further action is required at this stage.
                If additional information is needed, you will be contacted at the details provided.
              </p>
              <div className="h-px bg-slate-100 my-8" />
              <p className="text-xs text-slate-400">
                Operating within established clinical coordination frameworks.
              </p>
            </div>
            <Link
              href="/"
              className="inline-block text-sm text-slate-500 hover:text-slate-900 transition-colors border-b border-slate-200 pb-0.5"
            >
              Return to Home
            </Link>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400">
          Operating within established clinical coordination frameworks.
        </p>
        <p className="text-xs text-slate-300 mt-1">
          Medical Care Germany · Berlin, Germany
        </p>
      </footer>
    </div>
  );
}
