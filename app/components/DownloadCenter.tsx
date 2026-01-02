import { FileText, Download, FileSpreadsheet } from "lucide-react";

export const DownloadCenter = () => {
  const files = [
    { title: "বার্ষিক ছুটির তালিকা ২০২৬", type: "PDF", size: "1.2 MB" },
    { title: "ভর্তি ফরম ও প্রসপেক্টাস", type: "PDF", size: "3.5 MB" },
    { title: "১ম সাময়িক পরীক্ষার সিলেবাস", type: "PDF", size: "850 KB" },
    { title: "স্কুল ড্রেসের নিয়মাবলী", type: "Image", size: "2.1 MB" },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 border-l-8 border-yellow-500 pl-4">
          ডাউনলোড সেন্টার
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{file.title}</h4>
                  <p className="text-xs text-gray-500">
                    {file.type} • {file.size}
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition font-medium text-sm">
                <Download size={16} /> ডাউনলোড
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
