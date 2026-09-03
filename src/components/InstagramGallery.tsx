import React, { useState } from 'react';
import { INSTAGRAM_GALLERY } from '../data/cakes';
import { InstagramPost } from '../types';
import { BRAND_CONFIG } from '../data/config';
import { Instagram, Heart, X, ArrowRight, ExternalLink } from 'lucide-react';
import { KamatLogo } from './KamatLogo';

export const InstagramGallery: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F5EFEB] relative overflow-hidden border-t border-[#E8DFD5]">
      {/* Subtle Background Watermark */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] text-[#120E0D] font-serif text-[160px] font-black whitespace-nowrap hidden md:block">
        @KAMATBAKERY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5 px-4 py-1.5 rounded-full bg-[#120E0D] text-[#FFD400] shadow-md border border-[#FFD400]/40">
            <Instagram className="w-4 h-4 stroke-[2.5]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
              @kamatbakery
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#120E0D] tracking-tight leading-[1.1]">
            FOLLOW THE
            <br />
            <span className="italic font-light font-editorial text-[#54403B]">KAMAT CAKE TRAIL.</span>
          </h2>

          <div className="mt-4 space-y-1">
            <p className="text-base sm:text-lg text-[#120E0D] font-medium tracking-wide">
              Fresh cakes. New creations. Real celebrations.
            </p>
            <p className="text-sm font-mono font-bold text-[#B88600]">
              @kamatbakery
            </p>
          </div>
        </div>

        {/* Masonry / Instagram Profile-Inspired Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {INSTAGRAM_GALLERY.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#120E0D]/5 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-[#E8DFD5]"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Instagram Icon Badge on top right */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#120E0D]/70 backdrop-blur-md text-[#FFD400] flex items-center justify-center shadow-md opacity-90 group-hover:opacity-0 transition-opacity duration-200">
                <Instagram className="w-4 h-4" />
              </div>

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-[#120E0D]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-5 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center">
                  <span className="text-[9.5px] sm:text-[10.5px] uppercase tracking-wider text-[#FFD400] font-mono font-bold">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-white/95 font-semibold">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/95 line-clamp-3 font-light leading-relaxed">
                  {post.caption}
                </p>

                <div className="text-[10.5px] uppercase tracking-widest text-[#FFD400] font-bold flex items-center gap-1.5">
                  <span>View Story</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Large Prominent Instagram CTA Button */}
        <div className="mt-14 sm:mt-16 text-center flex flex-col items-center">
          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 sm:py-5 rounded-full bg-[#FFD400] hover:bg-[#FFE14D] text-[#120E0D] text-xs sm:text-sm font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(255,212,0,0.35)] hover:shadow-[0_15px_45px_rgba(255,212,0,0.5)] hover:-translate-y-1 active:scale-95 group"
          >
            <Instagram className="w-5 h-5 stroke-[2.5]" />
            <span>FOLLOW @KAMATBAKERY</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5] ml-1 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
          
          <p className="text-xs text-[#54403B] mt-4 font-medium flex items-center gap-2">
            <span>Join our Dharwad celebration community on Instagram • Daily new cake drops.</span>
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPost && (
        <div
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-50 bg-[#120E0D]/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E8DFD5] relative flex flex-col md:flex-row max-h-[90vh]"
          >
            <button
              onClick={() => setSelectedPost(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#120E0D]/80 text-white flex items-center justify-center hover:bg-[#120E0D]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-1/2 aspect-square md:aspect-auto bg-black">
              <img
                src={selectedPost.image}
                alt={selectedPost.caption}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#E8DFD5]">
                  <KamatLogo size="sm" />
                  <div>
                    <h3 className="text-xs font-bold text-[#120E0D] font-mono">kamatbakery</h3>
                    <p className="text-[10px] text-[#54403B]">Kamat Bakery | Dharwad</p>
                  </div>
                </div>

                <p className="text-sm text-[#3D2E2A] leading-relaxed mb-4">
                  {selectedPost.caption}
                </p>

                <p className="text-xs text-[#B88600] font-bold mb-6 font-mono">
                  {selectedPost.tag}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#54403B]">
                  <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                  <span className="font-bold text-[#120E0D]">{selectedPost.likes} likes</span>
                </div>

                <a
                  href={BRAND_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#FFD400] text-[#120E0D] text-xs font-black uppercase tracking-wider hover:bg-[#FFE14D] transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Open Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
