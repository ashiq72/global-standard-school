import {
  FileText,
  Download,
  Image as ImageIcon,
  FileSpreadsheet,
  Cloud,
} from "lucide-react";

export const DownloadCenter = () => {
  const files = [
    {
      title: "বার্ষিক ছুটির তালিকা ২০২৬",
      type: "PDF",
      size: "1.2 MB",
      category: "academic",
    },
    {
      title: "ভর্তি ফরম ও প্রসপেক্টাস",
      type: "PDF",
      size: "3.5 MB",
      category: "admission",
    },
    {
      title: "১ম সাময়িক পরীক্ষার সিলেবাস",
      type: "XLS",
      size: "850 KB",
      category: "exam",
    },
    {
      title: "স্কুল ড্রেসেরর কালার কোড ও নিয়ম",
      type: "JPG",
      size: "2.1 MB",
      category: "general",
    },
  ];

  // Helper to get styles based on file type
  const getFileIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return {
          icon: FileText,
          color: "text-rose-600",
          bg: "bg-rose-50",
          border: "group-hover:border-rose-200",
        };
      case "XLS":
        return {
          icon: FileSpreadsheet,
          color: "text-emerald-600",
          bg: "bg-emerald-50",
          border: "group-hover:border-emerald-200",
        };
      case "JPG":
      case "PNG":
        return {
          icon: ImageIcon,
          color: "text-sky-600",
          bg: "bg-sky-50",
          border: "group-hover:border-sky-200",
        };
      default:
        return {
          icon: FileText,
          color: "text-slate-600",
          bg: "bg-slate-50",
          border: "group-hover:border-slate-200",
        };
    }
  };

  return (
    <section className='py-24 bg-slate-50 relative overflow-hidden'>
      {/* Background Decoration */}
      <div className='absolute top-0 right-0 p-12 opacity-5 pointer-events-none'>
        <Cloud size={300} />
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6'>
          <div>
            <span className='text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block'>
              রিসোর্স জোন
            </span>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900'>
              ডাউনলোড <span className='text-blue-600'>সেন্টার</span>
            </h2>
            <p className='mt-3 text-slate-600 max-w-lg'>
              প্রয়োজনীয় ফর্ম, রুটিন এবং সিলেবাসের ডিজিটাল কপি এখান থেকে সংগ্রহ
              করুন।
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {files.map((file, index) => {
            const style = getFileIcon(file.type);
            const Icon = style.icon;

            return (
              <div
                key={index}
                className={`group relative flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${style.border}`}
              >
                <div className='flex items-center gap-5'>
                  {/* Icon Box */}
                  <div
                    className={`w-16 h-16 rounded-xl ${style.bg} ${style.color} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className='font-bold text-slate-800 text-lg mb-1 group-hover:text-blue-700 transition-colors line-clamp-1'>
                      {file.title}
                    </h4>
                    <div className='flex items-center gap-3 text-xs font-semibold text-slate-400 uppercase tracking-wide'>
                      <span
                        className={`px-2 py-0.5 rounded ${style.bg} ${style.color}`}
                      >
                        {file.type}
                      </span>
                      <span>{file.size}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className='flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md'>
                  <Download size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
