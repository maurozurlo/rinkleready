import React from 'react';
import { Shirt, Wand2, Sparkles, Package, Download, Settings2, Star, Users, Briefcase, Camera, Heart, Wrench } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-neutral-200 to-zinc-300">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <Shirt className="w-12 h-12 text-indigo-600 animate-pulse" />
            <h1 className="text-5xl font-bold text-zinc-800">RinkleReady™</h1>
          </div>
          <h2 className="text-2xl font-light text-zinc-700 mb-8">The Art of Imperfection</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mb-12">
            Get the perfect 'I woke up like this' look—effortlessly. The first-ever clothing wrinkler designed for people who want to add a touch of casual charm to their outfits.
          </p>
          <div className="flex gap-6">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
              <Package className="w-5 h-5" />
              Order Now
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full font-semibold transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/80 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-zinc-800 mb-16">Revolutionary Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Package className="w-8 h-8 text-indigo-600" />}
              title="Automatic Crumple"
              description="Our signature mode that crumples, squeezes, and folds your garments into perfect random patterns."
            />
            <FeatureCard
              icon={<Wand2 className="w-8 h-8 text-indigo-600" />}
              title="Manual Wrinkle Wand"
              description="The handheld device for artisanal creases—perfect for collars, cuffs, or strategic crumples."
            />
            <FeatureCard
              icon={<Settings2 className="w-8 h-8 text-indigo-600" />}
              title="Custom Wrinkle Levels"
              description="From 'Subtle Chill' to 'Laundry Day Disaster'—you control the casualness."
            />
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-zinc-800 mb-16">Perfect For Every Style</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <UseCase
              icon={<Briefcase className="w-8 h-8 text-indigo-600" />}
              title="Freelance Chic"
              description="Look coolly disorganized in client meetings. Perfect for creatives who need to maintain their artistic credibility."
              image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
            />
            <UseCase
              icon={<Camera className="w-8 h-8 text-indigo-600" />}
              title="Artist Aesthetic"
              description="Achieve that perfect 'too busy creating to iron' look that every artist needs in their portfolio shots."
              image="https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&w=800&q=80"
            />
            <UseCase
              icon={<Users className="w-8 h-8 text-indigo-600" />}
              title="Travel Vibes"
              description="Get that 'just backpacked through Europe' look without leaving your apartment."
              image="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </div>

      {/* Premium Features */}
      <div className="py-24 bg-white/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-zinc-800 mb-16">Premium Styles</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PremiumFeature
              icon={<Sparkles className="w-10 h-10 text-indigo-600" />}
              title="Style Presets"
              description="From 'Boho Chic' to 'Grunge Artist'—our curated presets give you the perfect wrinkle patterns."
              price="$29.99"
            />
            <PremiumFeature
              icon={<Wrench className="w-10 h-10 text-indigo-600" />}
              title="Pro Wrinkle Kit"
              description="Includes our signature Wrinkle Wand and Strategic Stain Kit for the ultimate casual look."
              price="$49.99"
            />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-zinc-800 mb-16">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Review
              avatar="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
              name="Alex Rivera"
              role="Freelance Designer"
              rating={5}
              text="Finally, I can achieve that perfect 'I'm too creative to iron' look without the week-long wait!"
            />
            <Review
              avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              name="Maya Chen"
              role="Art Gallery Owner"
              rating={5}
              text="The Manual Wrinkle Wand is a game-changer. My clothes now match my gallery's avant-garde aesthetic."
            />
            <Review
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
              name="Tom Barrett"
              role="Travel Photographer"
              rating={4}
              text="The 'just traveled 30 hours' preset is perfect for my Instagram travel content!"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/80 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat number="50K+" label="Wrinkled Garments" icon={<Shirt className="w-6 h-6 text-indigo-600" />} />
            <Stat number="4.9" label="App Store Rating" icon={<Star className="w-6 h-6 text-indigo-600" />} />
            <Stat number="20K+" label="Daily Users" icon={<Users className="w-6 h-6 text-indigo-600" />} />
            <Stat number="30K+" label="Happy Customers" icon={<Heart className="w-6 h-6 text-indigo-600" />} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-400">
          <p>© 2024 RinkleReady™. Perfect imperfection.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center hover:transform hover:-translate-y-1 transition-all shadow-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-zinc-800 mb-3">{title}</h3>
      <p className="text-zinc-600">{description}</p>
    </div>
  );
}

function UseCase({ icon, title, description, image }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition-all shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <h3 className="text-xl font-semibold text-zinc-800">{title}</h3>
        </div>
        <p className="text-zinc-600">{description}</p>
      </div>
    </div>
  );
}

function PremiumFeature({ icon, title, description, price }) {
  return (
    <div className="bg-white rounded-xl p-8 border-2 border-indigo-100 shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <div>
          <h3 className="text-xl font-semibold text-zinc-800">{title}</h3>
          <p className="text-indigo-600 font-semibold">{price}</p>
        </div>
      </div>
      <p className="text-zinc-600">{description}</p>
    </div>
  );
}

function Review({ avatar, name, role, rating, text }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h3 className="text-lg font-semibold text-zinc-800">{name}</h3>
          <p className="text-zinc-500 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-zinc-600">{text}</p>
    </div>
  );
}

function Stat({ number, label, icon }) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-3xl font-bold text-zinc-800 mt-2">{number}</p>
      <p className="text-zinc-600">{label}</p>
    </div>
  );
}

export default App;