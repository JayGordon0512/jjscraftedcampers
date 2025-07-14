import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[#F5F3EF] text-[#2D2E2E] font-sans">
      <Head>
        <title>JJ's Crafted Campers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-[#5C6F68] text-white py-6 flex flex-col items-center">
  <img src="/logo.png" alt="JJ's Logo" className="h-16 mb-4" />

  <nav className="space-x-6 text-lg font-medium">
    <a href="#about" className="hover:underline">About</a>
    <a href="#builds" className="hover:underline">Builds</a>
    <a href="#process" className="hover:underline">Process</a>
    <a href="#contact" className="hover:underline">Contact</a>
  </nav>
</header>

     <section
  className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/van-hero.jpg')" }}
>
  <div className="bg-black bg-opacity-40 p-8 rounded-xl text-center max-w-2xl mx-auto">
    <h2 className="text-5xl font-bold text-white mb-4">Crafted Comfort, Wherever You Roam</h2>
    <p className="text-xl text-white mb-6">
      Boutique camper van conversions tailored for modern explorers and weekend wanderers.
    </p>
    <div className="space-x-4">
      <button className="bg-[#5C6F68] text-white px-6 py-3 rounded">Explore Our Builds</button>
      <button className="bg-white text-[#5C6F68] px-6 py-3 rounded border border-[#5C6F68]">Book a Free Consultation</button>
    </div>
  </div>
</section>

      <section id="about" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p className="max-w-2xl mx-auto text-lg">
          At JJ's Crafted Campers, we believe every van should feel like home. We specialize in bespoke conversions with natural materials, clever storage, and timeless design.
        </p>
      </section>

      <section id="process" className="bg-[#D9CBB5] py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-8">Our Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div>
            <div className="text-4xl mb-2">💬</div>
            <h4 className="text-xl font-bold mb-1">Consultation</h4>
            <p>We learn your lifestyle needs and vision.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">✏️</div>
            <h4 className="text-xl font-bold mb-1">Design</h4>
            <p>Custom layout and materials tailored to you.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🛠️</div>
            <h4 className="text-xl font-bold mb-1">Build</h4>
            <p>Handcrafted with care and precision.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🛻</div>
            <h4 className="text-xl font-bold mb-1">Handover</h4>
            <p>Ready for your next great adventure.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" />
          <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded h-32" />
          <button className="bg-[#5C6F68] text-white px-6 py-3 rounded">Send Message</button>
        </form>
      </section>

      <footer className="bg-[#2D2E2E] text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} JJ's Crafted Campers – Based in Scotland</p>
      </footer>
    </div>
  );
}
