import { Quote, Star, User, MessageSquareHeart } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "আব্দুল্লাহ আল মামুন",
      role: "অভিভাবক, ৩য় শ্রেণি",
      comment:
        "এই স্কুলের শিক্ষার পরিবেশ এবং শিক্ষকদের ব্যবহার সত্যিই প্রশংসনীয়। আমার ছেলে খুব দ্রুত নিজেকে মানিয়ে নিয়েছে এবং তার আত্মবিশ্বাস বেড়েছে।",
      rating: 5,
    },
    {
      name: "রাবেয়া আক্তার",
      role: "অভিভাবক, ৫ম শ্রেণি",
      comment:
        "কেরাণীগঞ্জের মধ্যে এরকম আধুনিক কারিকুলাম এবং নিরাপদ ডিজিটাল ক্যাম্পাস আগে দেখিনি। তাদের নিরাপত্তা ব্যবস্থা নিয়ে আমি অত্যন্ত সন্তুষ্ট।",
      rating: 5,
    },
  ];

  return (
    <section className='py-24 bg-slate-50 relative overflow-hidden'>
      {/* Background Decorations */}
      <div className='absolute top-20 left-0 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-60 -translate-x-1/2 pointer-events-none'></div>
      <div className='absolute bottom-20 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-[100px] opacity-60 translate-x-1/2 pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm'>
            <MessageSquareHeart size={14} />
            ফীডব্যাক
          </div>
          <h2 className='text-3xl md:text-4xl font-black text-slate-900'>
            অভিভাবকদের{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>
              মতামত
            </span>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {testimonials.map((item, i) => (
            <div
              key={i}
              className='group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
            >
              {/* Quote Icon Blob */}
              <div className='absolute top-8 right-8 text-blue-100 transform rotate-12 group-hover:rotate-0 transition-transform duration-500'>
                <div className='w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center'>
                  <Quote
                    size={32}
                    className='text-blue-500 fill-current opacity-50'
                  />
                </div>
              </div>

              {/* Content */}
              <div className='relative z-10'>
                {/* Stars */}
                <div className='flex gap-1 mb-6'>
                  {[...Array(item.rating)].map((_, starI) => (
                    <Star
                      key={starI}
                      size={18}
                      className='text-yellow-400 fill-current'
                    />
                  ))}
                </div>

                {/* Comment */}
                <blockquote className='text-slate-600 text-lg italic leading-relaxed mb-8'>
                  "{item.comment}"
                </blockquote>

                {/* Author Profile */}
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-600 border-2 border-white shadow-md'>
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className='font-bold text-slate-900 text-lg leading-none'>
                      {item.name}
                    </h4>
                    <p className='text-slate-500 text-sm mt-1 font-medium'>
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
