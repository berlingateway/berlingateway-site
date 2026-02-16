export default function ContactBar() {
  return (
    <div className="w-full bg-slate-900 text-white py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 text-sm">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <a href="mailto:info@medicalcaregermany.com" className="hover:text-slate-300 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@medicalcaregermany.com
          </a>
          <a href="tel:+493025730875" className="hover:text-slate-300 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +49 30 25730875
          </a>
        </div>
        <div className="text-xs md:text-sm text-slate-300 text-center md:text-right">
          Send your medical reports for professional evaluation
        </div>
      </div>
    </div>
  );
}
