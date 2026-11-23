'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-teal-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Manajer Toko Kue", en: "Cake Shop Manager" },
    description: { id: "Mengatur operasional harian, pelayanan pelanggan, dan koordinasi tim di toko kue.", en: "Running daily operations, customer service, and team coordination at a cake shop." },
    framework: "TOKO ABDI KUE, NOVEMBER 2020 — SEKARANG",
    techStack: ["Operasional", "Tim"],
  },
  {
    number: '02',
    title: { id: "Magang di PT Semen Tiga Roda", en: "Internship at PT Semen Tiga Roda" },
    description: { id: "Pengenalan perusahaan, alur kerja antarbagian, dan budaya kerja di industri semen.", en: "Company orientation, cross-department workflow, and work culture in the cement industry." },
    framework: "PT SEMEN TIGA RODA, PADANG, JULI 2025",
    techStack: ["Magang", "Industri"],
  },
  {
    number: '03',
    title: { id: "Pemuncak II Program Studi Manajemen", en: "Second Top Graduate, Management" },
    description: { id: "Yudisium XX Fakultas Ekonomi dan Bisnis Universitas Islam Indragiri (IPK 3.94).", en: "Yudisium XX, Faculty of Economics and Business, Universitas Islam Indragiri (GPA 3.94)." },
    framework: "UNIVERSITAS ISLAM INDRAGIRI, 2026",
    techStack: ["IPK 3.94", "Manajemen"],
  },
  {
    number: '04',
    title: { id: "Certified Professional Financial Management", en: "Certified Professional Financial Management" },
    description: { id: "Sertifikasi CPFM dari ESAS Management, 26 — 29 September 2025.", en: "CPFM certification from ESAS Management, 26 — 29 September 2025." },
    framework: "ESAS MANAGEMENT, 2025",
    techStack: ["CPFM", "Keuangan"],
  },
  {
    number: '05',
    title: { id: "Certified Legal Communication Techniques", en: "Certified Legal Communication Techniques" },
    description: { id: "Sertifikasi CLCT dari ESAS Management, 14 — 17 Desember 2025.", en: "CLCT certification from ESAS Management, 14 — 17 December 2025." },
    framework: "ESAS MANAGEMENT, 2025",
    techStack: ["CLCT", "Hukum"],
  },
  {
    number: '06',
    title: { id: "Pelatihan Wirausaha Tata Boga", en: "Culinary Entrepreneurship Training" },
    description: { id: "Pelatihan wirausaha pemula, Dinas Perindustrian, Perdagangan, Koperasi dan UKM Provinsi Riau, Juli 2024.", en: "Beginner entrepreneur training, Riau Province Office of Industry, Trade, Cooperatives, and SMEs, July 2024." },
    framework: "PROVINSI RIAU, 23 — 26 JULI 2024",
    techStack: ["Tata Boga", "UMKM"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'WORK PORTFOLIO' : 'PORTOFOLIO KERJA'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Experience, Achievements & Certificates' : 'Pengalaman, Prestasi & Sertifikat'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of work as a cake shop manager and cement industry intern, plus academic achievement, certifications, and training.'
              : 'Rekam jejak kerja sebagai manajer toko kue dan magang di industri semen, serta prestasi akademik, sertifikasi, dan pelatihan.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
