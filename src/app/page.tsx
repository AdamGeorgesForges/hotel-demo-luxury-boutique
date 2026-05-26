import Image from "next/image";
import { Star, MapPin, Phone, Mail, Clock, Users, ChevronRight, ArrowRight, Wifi, Coffee, Dumbbell, Waves, Flower2, Sparkles, Shield, UtensilsCrossed, Car } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a18] text-[#f5f0e8]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a18]/90 backdrop-blur-md border-b border-[#c9a96e]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light">The</span>
              <span className="text-2xl tracking-wide font-light text-[#f5f0e8]">Aurelian</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
              {['Rooms', 'Dining', 'Spa', 'Experiences', 'Gallery', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[#c9a96e]/80 hover:text-[#c9a96e] transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
            <a href="#book" className="hidden md:flex items-center gap-2 bg-[#c9a96e] text-[#1a1a18] px-6 py-2.5 text-sm tracking-widest uppercase hover:bg-[#d4b87a] transition-colors duration-300">
              Book Now
            </a>
            <button className="md:hidden text-[#c9a96e]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
            alt="The Aurelian luxury hotel lobby"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a18]/60 via-[#1a1a18]/40 to-[#1a1a18]/80" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-[#c9a96e] tracking-[0.4em] uppercase text-sm mb-6">Houston's Premier Luxury Boutique Hotel</p>
          <h1 className="text-6xl md:text-8xl font-light tracking-wide mb-6 text-[#f5f0e8]">The Aurelian</h1>
          <p className="text-2xl md:text-3xl font-light text-[#c9a96e] italic mb-10">Where stillness meets splendor</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="flex items-center justify-center gap-2 bg-[#c9a96e] text-[#1a1a18] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#d4b87a] transition-colors duration-300">
              Book Your Stay <ArrowRight size={16} />
            </a>
            <a href="#rooms" className="flex items-center justify-center gap-2 border border-[#c9a96e]/50 text-[#f5f0e8] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#c9a96e]/10 transition-colors duration-300">
              Explore Rooms
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Booking Bar */}
      <section id="book" className="bg-[#252521] border-y border-[#c9a96e]/20 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#c9a96e] text-xs tracking-widest uppercase">Check In</label>
              <div className="flex items-center gap-3 bg-[#1a1a18] border border-[#c9a96e]/30 px-4 py-3">
                <Clock size={16} className="text-[#c9a96e]/60" />
                <input type="date" className="bg-transparent text-[#f5f0e8] text-sm w-full outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#c9a96e] text-xs tracking-widest uppercase">Check Out</label>
              <div className="flex items-center gap-3 bg-[#1a1a18] border border-[#c9a96e]/30 px-4 py-3">
                <Clock size={16} className="text-[#c9a96e]/60" />
                <input type="date" className="bg-transparent text-[#f5f0e8] text-sm w-full outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#c9a96e] text-xs tracking-widest uppercase">Guests</label>
              <div className="flex items-center gap-3 bg-[#1a1a18] border border-[#c9a96e]/30 px-4 py-3">
                <Users size={16} className="text-[#c9a96e]/60" />
                <select className="bg-transparent text-[#f5f0e8] text-sm w-full outline-none">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <a href="#" className="w-full flex items-center justify-center gap-2 bg-[#c9a96e] text-[#1a1a18] px-6 py-3 text-sm tracking-widest uppercase hover:bg-[#d4b87a] transition-colors duration-300 font-medium">
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Suites */}
      <section id="rooms" className="py-24 bg-[#1a1a18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c9a96e] tracking-[0.3em] uppercase text-sm mb-4">Accommodations</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">Rooms & Suites</h2>
            <p className="text-[#c9a96e]/60 max-w-xl mx-auto">Each sanctuary is crafted for profound rest, with hand-curated furnishings, bespoke amenities, and views that quiet the mind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Garden Suite',
                size: '65 m²',
                view: 'Private garden terrace',
                desc: 'Thoughtfully appointed with Italian linens, a deep soaking tub, and curated art pieces that echo the hotel\'s Galleria vicinity.',
                price: 'From $380',
                img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'
              },
              {
                name: 'Aurelian Deluxe',
                size: '48 m²',
                view: 'Houston skyline views',
                desc: 'Floor-to-ceiling windows frame the city skyline. Features a king bed with handmade mattress, rainfall shower, and Nero marble vanity.',
                price: 'From $280',
                img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80'
              },
              {
                name: 'Heritage Room',
                size: '38 m²',
                view: 'Tree-lined street',
                desc: 'Intimate and refined, the Heritage Room wraps guests in warm oak tones, custom millwork, and a writing desk inspired by private libraries.',
                price: 'From $210',
                img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'
              },
              {
                name: 'Penthouse Loft',
                size: '120 m²',
                view: 'Panoramic Houston',
                desc: 'The crown of The Aurelian. Two levels with a private staircase, wraparound terrace, butler service, and a freestanding copper soaking tub.',
                price: 'From $1,200',
                img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'
              },
              {
                name: 'Couples Retreat',
                size: '55 m²',
                view: 'Garden courtyard',
                desc: 'Designed for two. features a king bed, dual vanity marble bath, fireplace alcove, and Champagne welcome service upon arrival.',
                price: 'From $340',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
              },
              {
                name: 'Executive Studio',
                size: '42 m²',
                view: 'Urban oasis',
                desc: 'A refined workspace meets restful retreat. Features a custom built-in desk, premium connectivity, and soundproofed sleep chamber.',
                price: 'From $240',
                img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80'
              }
            ].map((room) => (
              <div key={room.name} className="group bg-[#252521] border border-[#c9a96e]/10 hover:border-[#c9a96e]/40 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image src={room.img} alt={room.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-light tracking-wide">{room.name}</h3>
                    <span className="text-[#c9a96e] text-sm">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#c9a96e]/60 text-sm mb-4">
                    <MapPin size={12} />
                    <span>{room.view}</span>
                  </div>
                  <p className="text-[#f5f0e8]/60 text-sm leading-relaxed mb-6">{room.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#c9a96e] font-light">{room.price}<span className="text-[#f5f0e8]/40 text-xs"> / night</span></span>
                    <a href="#book" className="flex items-center gap-1 text-sm text-[#c9a96e] hover:gap-2 transition-all duration-300">
                      Reserve <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-24 bg-[#252521]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c9a96e] tracking-[0.3em] uppercase text-sm mb-4">The Aurelian Experience</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">Amenities</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Flower2, name: 'Serenity Spa', desc: 'Signature treatments' },
              { icon: UtensilsCrossed, name: 'La Maison', desc: 'Fine dining restaurant' },
              { icon: Waves, name: 'Rooftop Pool', desc: 'Heated saline pool' },
              { icon: Coffee, name: 'Café Aurelian', desc: 'Artisan coffee bar' },
              { icon: Dumbbell, name: 'Fitness Studio', desc: '24-hour access' },
              { icon: Car, name: 'Valet Service', desc: '24-hour concierge' },
            ].map(({ icon: Icon, name, desc }) => (
              <div key={name} className="flex flex-col items-center text-center p-6 border border-[#c9a96e]/10 hover:border-[#c9a96e]/30 transition-all duration-300 group">
                <div className="w-12 h-12 flex items-center justify-center mb-4 text-[#c9a96e]">
                  <Icon size={24} />
                </div>
                <h3 className="text-sm font-light tracking-wide mb-1">{name}</h3>
                <p className="text-[#c9a96e]/40 text-xs">{desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="relative h-80 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" alt="Serenity Spa" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252521] to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-light mb-2">Serenity Spa</h3>
                  <p className="text-[#c9a96e]/60 text-sm">Japanese-inspired treatments, hot stone therapy, and bespoke rituals crafted by our in-house wellness team.</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="La Maison Restaurant" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252521] to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-light mb-2">La Maison</h3>
                  <p className="text-[#c9a96e]/60 text-sm">An intimate fine dining experience featuring Gulf Coast ingredients, French technique, and an sommelier-curated wine program.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Experience */}
      <section id="experiences" className="py-24 bg-[#1a1a18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c9a96e] tracking-[0.3em] uppercase text-sm mb-4">Beyond the Doors</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">Local Experiences</h2>
            <p className="text-[#c9a96e]/60 max-w-xl mx-auto">Curated discoveries in Houston's most vibrant neighborhoods, just moments from The Aurelian.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Houston Galleria", cat: "Shopping & Dining", dist: "5 min walk", img: "https://images.unsplash.com/photo-1555860742-c9b7f0b8cb34?w=600&q=80", desc: "Texas' largest upscale shopping complex with Saks Fifth Avenue, Nobu restaurant, and ice skating rink." },
              { name: "The Buffalo Soldiers National Museum", cat: "Culture & History", dist: "8 min drive", img: "https://images.unsplash.com/photo-1592321675774-3de57fa509d2?w=600&q=80", desc: "A powerful, moving museum honoring the legacy of the Buffalo Soldier regiments throughout American history." },
              { name: "Smother's BBQ", cat: "Culinary Heritage", dist: "12 min drive", img: "https://images.unsplash.com/photo-1529193876384-55e9be230b23?w=600&q=80", desc: "Fifth-generation pitmaster. No-frills brisket, ribs, and sausage that regularly tops Texas best-BBQ lists." },
              { name: "Gerald D. Hines Waterwall", cat: "Landmark", dist: "10 min drive", img: "https://images.unsplash.com/photo-1587974928442-77dc3e47abdd?w=600&q=80", desc: "A 64-foot Art Deco waterwall in Uptown Park. One of Houston's most photographed landmarks." },
              { name: 'Levy Park', cat: 'Green Space', dist: '8 min drive', img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80', desc: 'A beautifully redesigned urban park with off-leash dog area, splash pad, yoga classes, and a curated events calendar.' },
            ].map((exp) => (
              <div key={exp.name} className="group relative h-80 overflow-hidden">
                <Image src={exp.img} alt={exp.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18] via-[#1a1a18]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#c9a96e] text-xs tracking-widest uppercase">{exp.cat}</span>
                    <span className="text-[#f5f0e8]/40 text-xs">• {exp.dist}</span>
                  </div>
                  <h3 className="text-xl font-light mb-2">{exp.name}</h3>
                  <p className="text-[#f5f0e8]/50 text-sm">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-[#252521]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c9a96e] tracking-[0.3em] uppercase text-sm mb-4">Visual Journal</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide">Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80', alt: 'Hotel exterior at dusk', span: 'md:col-span-2 md:row-span-2' },
              { img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80', alt: 'Luxury bedroom', span: '' },
              { img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80', alt: 'Hotel restaurant', span: '' },
              { img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80', alt: 'Spa treatment room', span: '' },
              { img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80', alt: 'Rooftop pool view', span: 'md:col-span-2' },
              { img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80', alt: 'Hotel lobby', span: '' },
              { img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80', alt: 'Conference room', span: '' },
            ].map((item, i) => (
              <div key={i} className={`relative h-48 overflow-hidden ${item.span}`}>
                <Image src={item.img} alt={item.alt} fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1a1a18]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] tracking-[0.3em] uppercase text-sm mb-12">Guest Voices</p>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8 italic text-[#f5f0e8]/90">&ldquo;The Aurelian does not simply offer a room — it offers a state of being. From the moment the valet took our bags to the morning we found fresh pastries waiting, every detail was a quiet declaration that this place understands what luxury truly means.&rdquo;</p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#c9a96e] fill-[#c9a96e]" />)}
              </div>
              <span className="text-[#c9a96e]/60 text-sm">|</span>
              <span className="text-[#f5f0e8]/60 text-sm">Sarah & James K., Houston</span>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer CTA */}
      <section className="py-20 bg-[#252521] border-y border-[#c9a96e]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] tracking-[0.3em] uppercase text-sm mb-4">Exclusive Offer</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Direct Bookers Save 15%</h2>
          <p className="text-[#f5f0e8]/60 mb-8 max-w-lg mx-auto">Book direct and receive a complimentary room upgrade, early check-in, and a welcome amenity from La Maison. Available for stays through December 2026.</p>
          <a href="#book" className="inline-flex items-center gap-2 bg-[#c9a96e] text-[#1a1a18] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#d4b87a] transition-colors duration-300">
            Book Direct & Save <ArrowRight size={16} />
          </a>
          <p className="mt-4 text-[#c9a96e]/40 text-xs">Best rate guaranteed. No third-party fees.</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1a1a18] border-t border-[#c9a96e]/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-6">
                <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light">The</span>
                <h3 className="text-3xl font-light tracking-wide">Aurelian</h3>
              </div>
              <p className="text-[#f5f0e8]/40 text-sm leading-relaxed max-w-md mb-6">An intimate sanctuary in the heart of Houston's Galleria district. Crafted for travelers who demand both precision and poetry in their accommodations.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e] hover:bg-[#c9a96e]/10 transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 border border-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e] hover:bg-[#c9a96e]/10 transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-[#c9a96e] text-xs tracking-widest uppercase mb-6">Contact</h4>
              <div className="space-y-4 text-sm text-[#f5f0e8]/60">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="mt-0.5 text-[#c9a96e]/60 flex-shrink-0" />
                  <span>2400 Post Oak Blvd<br />Houston, TX 77056</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-[#c9a96e]/60" />
                  <a href="tel:+17135551234" className="hover:text-[#c9a96e] transition-colors">+1 (713) 555-1234</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-[#c9a96e]/60" />
                  <a href="mailto:reservations@theaurelian.com" className="hover:text-[#c9a96e] transition-colors">reservations@theaurelian.com</a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-[#c9a96e] text-xs tracking-widest uppercase mb-6">Quick Links</h4>
              <div className="space-y-3 text-sm">
                {['Rooms & Suites', 'Dining', 'Spa & Wellness', 'Meetings & Events', 'Gift Cards', 'Careers'].map((link) => (
                  <a key={link} href="#" className="block text-[#f5f0e8]/60 hover:text-[#c9a96e] transition-colors duration-300">{link}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#c9a96e]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#f5f0e8]/30 text-xs">© 2026 The Aurelian. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-[#f5f0e8]/30">
              <a href="#" className="hover:text-[#c9a96e]/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#c9a96e]/60 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#c9a96e]/60 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
