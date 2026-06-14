import { useState, useRef } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Upload, FileText, X, CheckCircle, Stethoscope } from "lucide-react";

const MAX_FILE_SIZE_MB = 16;
const MAX_FILES = 10;
const ACCEPTED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/tiff",
  "application/dicom",
  "image/dicom",
];
const ACCEPTED_EXT = ".pdf,.jpg,.jpeg,.png,.tiff,.tif,.dcm";

interface UploadedFile {
  name: string;
  mimeType: string;
  base64: string;
  sizeKB: number;
}

export default function ReferringDoctors() {
  const [doctorName, setDoctorName] = useState("");
  const [clinicOrHospital, setClinicOrHospital] = useState("");
  const [country, setCountry] = useState("");
  const [patientCondition, setPatientCondition] = useState("");
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const submitMutation = trpc.referringDoctors.submit.useMutation({
    onSuccess: (data) => {
      setReferenceId(data.referenceId);
      setSubmitted(true);
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const selected = Array.from(e.target.files ?? []);
    if (files.length + selected.length > MAX_FILES) {
      setFileError(`Maximum ${MAX_FILES} files allowed.`);
      return;
    }
    const newFiles: UploadedFile[] = [];
    for (const file of selected) {
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setFileError(`"${file.name}" exceeds ${MAX_FILE_SIZE_MB} MB limit.`);
        return;
      }
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(",")[1]);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      newFiles.push({
        name: file.name,
        mimeType: file.type || "application/octet-stream",
        base64,
        sizeKB: Math.round(file.size / 1024),
      });
    }
    setFiles(prev => [...prev, ...newFiles]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (idx: number) => {
    setFiles(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({
      doctorName,
      clinicOrHospital,
      country,
      patientCondition,
      files: files.map(f => ({ name: f.name, mimeType: f.mimeType, base64: f.base64 })),
    });
  };

  if (submitted && referenceId) {
    return (
      <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
        {/* Minimal nav */}
        <nav className="w-full py-5 px-8 flex justify-between items-center border-b border-slate-100">
          <Link href="/">
            <span className="text-lg font-serif font-bold tracking-tight text-slate-900 cursor-pointer">
              Medical Care Germany
            </span>
          </Link>
        </nav>

        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="max-w-lg w-full text-center space-y-8">
            <CheckCircle className="mx-auto text-slate-400" size={56} strokeWidth={1} />
            <div className="space-y-4">
              <h1 className="text-3xl font-serif text-slate-900">Referral Received</h1>
              <div className="w-12 h-px bg-slate-200 mx-auto" />
              <p className="text-slate-600 leading-relaxed">
                The medical case has been formally registered and will be reviewed by a clinical
                coordinator in Berlin within <strong>24–48 hours</strong>.
              </p>
              <p className="text-sm text-slate-400 font-mono tracking-wider">
                Reference: {referenceId}
              </p>
            </div>
            <Link href="/">
              <Button variant="outline" className="rounded-none border-slate-300 text-slate-700 hover:bg-slate-50 mt-4">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      {/* Minimal navigation */}
      <nav className="w-full py-5 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/">
          <span className="text-lg font-serif font-bold tracking-tight text-slate-900 cursor-pointer">
            Medical Care Germany
          </span>
        </Link>
        <Link href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="rounded-none border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Patient Submissions
          </Button>
        </Link>
      </nav>

      {/* Header */}
      <section className="py-20 px-6 text-center border-b border-slate-100 bg-slate-50">
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="flex justify-center">
            <Stethoscope className="text-slate-300" size={40} strokeWidth={1} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-tight">
            Medical Referrals
          </h1>
          <p className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
            International physicians may refer complex medical cases for specialist review in Germany.
            Cases are evaluated by a medical coordinator in Berlin and directed to the appropriate
            specialist or university hospital.
          </p>
          <div className="flex justify-center gap-8 pt-4 text-sm text-slate-400 font-light">
            <span>Physician-to-physician referral</span>
            <span className="hidden md:inline">·</span>
            <span>University hospital network</span>
            <span className="hidden md:inline">·</span>
            <span>Reviewed within 24–48 hours</span>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 flex-1">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Doctor Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 tracking-wide">
                Doctor Name <span className="text-slate-400 font-normal">(required)</span>
              </label>
              <input
                type="text"
                required
                value={doctorName}
                onChange={e => setDoctorName(e.target.value)}
                placeholder="Dr. Full Name"
                className="w-full px-4 py-3 border border-slate-200 bg-slate-50 focus:border-slate-400 focus:bg-white outline-none transition-colors text-slate-900 placeholder:text-slate-300"
              />
            </div>

            {/* Clinic or Hospital */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 tracking-wide">
                Clinic or Hospital <span className="text-slate-400 font-normal">(required)</span>
              </label>
              <input
                type="text"
                required
                value={clinicOrHospital}
                onChange={e => setClinicOrHospital(e.target.value)}
                placeholder="Institution name"
                className="w-full px-4 py-3 border border-slate-200 bg-slate-50 focus:border-slate-400 focus:bg-white outline-none transition-colors text-slate-900 placeholder:text-slate-300"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 tracking-wide">
                Country <span className="text-slate-400 font-normal">(required)</span>
              </label>
              <input
                type="text"
                required
                value={country}
                onChange={e => setCountry(e.target.value)}
                placeholder="Country of practice"
                className="w-full px-4 py-3 border border-slate-200 bg-slate-50 focus:border-slate-400 focus:bg-white outline-none transition-colors text-slate-900 placeholder:text-slate-300"
              />
            </div>

            {/* Patient Condition */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 tracking-wide">
                Patient Condition <span className="text-slate-400 font-normal">(required)</span>
              </label>
              <textarea
                required
                value={patientCondition}
                onChange={e => setPatientCondition(e.target.value)}
                placeholder="Describe the patient's diagnosis, current status, and reason for referral..."
                rows={5}
                className="w-full px-4 py-3 border border-slate-200 bg-slate-50 focus:border-slate-400 focus:bg-white outline-none transition-colors text-slate-900 placeholder:text-slate-300 resize-none"
              />
            </div>

            {/* Upload Reports */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700 tracking-wide">
                Upload Reports <span className="text-slate-400 font-normal">(optional — PDF, DICOM, images, max {MAX_FILE_SIZE_MB} MB each)</span>
              </label>

              <div
                className="border border-dashed border-slate-300 bg-slate-50 hover:bg-white hover:border-slate-400 transition-colors cursor-pointer p-8 text-center"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="mx-auto text-slate-300 mb-3" size={28} strokeWidth={1.5} />
                <p className="text-sm text-slate-500">
                  Click to select files or drag and drop
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  PDF, DICOM, JPG, PNG, TIFF — up to {MAX_FILES} files
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept={ACCEPTED_EXT}
                onChange={handleFileChange}
                className="hidden"
              />

              {fileError && (
                <p className="text-sm text-red-500">{fileError}</p>
              )}

              {files.length > 0 && (
                <ul className="space-y-2">
                  {files.map((f, idx) => (
                    <li key={idx} className="flex items-center justify-between bg-slate-50 border border-slate-200 px-4 py-2">
                      <div className="flex items-center gap-3 min-w-0">
                        <FileText className="text-slate-400 shrink-0" size={16} />
                        <span className="text-sm text-slate-700 truncate">{f.name}</span>
                        <span className="text-xs text-slate-400 shrink-0">{f.sizeKB} KB</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="text-slate-400 hover:text-slate-600 ml-3 shrink-0"
                        aria-label="Remove file"
                      >
                        <X size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Error message */}
            {submitMutation.isError && (
              <p className="text-sm text-red-500">
                An error occurred. Please try again or contact us directly.
              </p>
            )}

            {/* Submit */}
            <div className="pt-4 space-y-4">
              <Button
                type="submit"
                disabled={submitMutation.isPending}
                className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-none py-6 text-base font-light tracking-wide"
              >
                {submitMutation.isPending ? "Submitting…" : "Submit Medical Case"}
              </Button>
              <p className="text-center text-xs text-slate-400">
                All referrals are handled with strict clinical confidentiality.
                Cases are reviewed within 24–48 hours by a medical coordinator in Berlin.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm font-serif">Medical Care Germany © 2026</p>
        <p className="text-slate-300 text-xs mt-1">Institutional Clinical Coordination Authority · Berlin</p>
      </footer>
    </div>
  );
}
