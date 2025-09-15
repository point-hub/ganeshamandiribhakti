<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth', // smooth animation
      block: 'start'
    })
  }
}
</script>

<template>
  <div class="font-sans text-gray-900 bg-white">
    <nav class="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm">
      <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div class="font-extrabold text-amber-800 text-xl flex items-center gap-4">
          <img src="/img/logo.png" class="h-10" alt="Ganesha Mandiri Bhakti">
          <span>Ganesha Mandiri Bhakti</span>
        </div>
        <ul class="flex gap-8 text-gray-700 font-medium list-none">
          <li><a href="javascript:void(0)" class="hover:text-amber-700 transition" @click="scrollTo('about')">About</a></li>
          <li><a href="javascript:void(0)" class="hover:text-amber-700 transition" @click="scrollTo('product')">Product</a></li>
          <li><a href="javascript:void(0)" class="hover:text-amber-700 transition" @click="scrollTo('contact')">Contact</a></li>
        </ul>
      </div>
    </nav>

    <section
      id="hero"
      class="h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center mt-18"
      style="background-image: url('/img/bg.png');"
    >
      <div class="p-10 rounded-2xl text-white">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6">
          Ganesha Mandiri Bhakti
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto mb-8 uppercase">
          Indonesian Finest Coffee Exporter.
        </p>
        <button class="px-8 py-4 rounded-full bg-amber-700 text-white font-semibold hover:scale-105 transition transform shadow-lg" @click="scrollTo('product')">
          View Products
        </button>
      </div>
    </section>

    <section id="about" class="py-24 px-6 max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: Image -->
        <div>
          <img
            src="/img/logo.jpg" 
            alt="Farmers harvesting coffee" 
            class="rounded-2xl shadow-lg object-cover w-full h-96">
        </div>

        <!-- Right: Text -->
        <div class="text-left">
          <h2 class="text-4xl font-bold text-amber-900 mb-6">About Us</h2>
          <p class="text-gray-700 leading-relaxed mb-6">
            <span class="font-semibold text-amber-800">Ganesha Mandiri Bhakti</span> is more than a coffee exporter —
            we are Indonesian green coffee bean specialists with deep roots in the farming communities we work with.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li>🌱 Sustainable farming practices with respect for nature</li>
            <li>🤝 Direct partnerships with trusted local farmers</li>
            <li>☕ Carefully curated beans that reflect Indonesia’s rich heritage</li>
          </ul>
          <div class="mt-8">
            <button 
              class="px-6 py-3 rounded-full bg-amber-700 text-white font-medium shadow-md hover:scale-105 transition"
              @click="scrollTo('product')">
              Explore Our Coffee
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="product" class="py-24 px-6 bg-slate-800">
      <h2 class="text-4xl font-bold text-center mb-16 text-amber-100">Our Products</h2>
      <div class="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        <div class="p-6 border rounded-2xl shadow-md hover:shadow-xl transition text-center bg-white">
          <h3 class="text-2xl font-semibold mb-3">Robusta Temanggung</h3>
          <img src="/img/robusta-temanggung.jpeg" class="w-full h-56 object-cover rounded-xl mb-6">
          <table class="table-auto border-collapse border border-gray-300 w-full text-left text-gray-700">
            <tbody>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Origin</th>
                <td class="border border-gray-300 px-3 py-2">Temanggung, Central Java, Indonesia</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Grown at</th>
                <td class="border border-gray-300 px-3 py-2">300-800 masl</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Growing area temperature</th>
                <td class="border border-gray-300 px-3 py-2">21° C - 24° C</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Grade</th>
                <td class="border border-gray-300 px-3 py-2">1-5 / Grade AB, A</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Body</th>
                <td class="border border-gray-300 px-3 py-2">medium to bold, bitter, strong</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Acidity level</th>
                <td class="border border-gray-300 px-3 py-2">low, smooth, soft</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Color</th>
                <td class="border border-gray-300 px-3 py-2">dark black</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Aroma</th>
                <td class="border border-gray-300 px-3 py-2">earthy and nutty</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">General taste profile</th>
                <td class="border border-gray-300 px-3 py-2">spicy sensation, chocolate, tobacco, creamy</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Processing method</th>
                <td class="border border-gray-300 px-3 py-2">natural or semi-washed</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Variety</th>
                <td class="border border-gray-300 px-3 py-2">Klon BP-288, Klon BP-42, Klon BP-358</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div class="p-6 border rounded-2xl shadow-md hover:shadow-xl transition text-center bg-white">
          <h3 class="text-2xl font-semibold mb-3">Robusta Lampung</h3>
          <img src="/img/robusta-lampung.jpeg" class="w-full h-56 object-cover rounded-xl mb-6">
          <table class="table-auto border-collapse border border-gray-300 w-full text-left text-gray-700">
            <tbody>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Origin</th>
                <td class="border border-gray-300 px-3 py-2">West Lampung, Tanggamus, and North Lampung</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Grown at</th>
                <td class="border border-gray-300 px-3 py-2">100-800 masl</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Growing area temperature</th>
                <td class="border border-gray-300 px-3 py-2">24° C - 30° C</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Grade</th>
                <td class="border border-gray-300 px-3 py-2">1-5 / Grade AB, A</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Body</th>
                <td class="border border-gray-300 px-3 py-2">bold, bitter</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Acidity level</th>
                <td class="border border-gray-300 px-3 py-2">low to medium, soft, smooth</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Color</th>
                <td class="border border-gray-300 px-3 py-2">black</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Aroma</th>
                <td class="border border-gray-300 px-3 py-2">earthy, spices</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">General taste profile</th>
                <td class="border border-gray-300 px-3 py-2">chocolate, spices</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Processing method</th>
                <td class="border border-gray-300 px-3 py-2">natural</td>
              </tr>
              <tr>
                <th class="border border-gray-300 px-3 py-2 font-semibold text-gray-900">Variety</th>
                <td class="border border-gray-300 px-3 py-2">Robusta Tanggamus, Robusta Way Kanan</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </section>

    <section id="contact" class="py-24 px-6 max-w-5xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-amber-900 mb-8">Contact Us</h2>
      <p class="text-gray-700 mb-6">
        Looking for partnerships, wholesale orders, or export opportunities? We’re ready to serve you globally.
      </p>

      <div class="flex gap-4 justify-center">
        <a href="https://wa.me/+6281357747377">
          <button class="px-6 py-3 mb-8 flex items-center gap-2 rounded-full bg-green-600 text-white hover:bg-amber-800 transition shadow-md">
            <Icon name="uil-whatsapp" size="24" /> +6281357747377
          </button>
        </a>
        <a href="mailto:info@ganeshabhakti.com">
          <button class="px-6 py-3 mb-8 flex items-center gap-2 rounded-full bg-amber-700 text-white hover:bg-amber-800 transition shadow-md">
            <Icon name="uil-envelope" size="24" /> info@ganeshabhakti.com
          </button>
        </a>
      </div>

      <div class="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          class="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.122053065688!2d112.732423!3d-7.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbeb3c3ac31d%3A0xad129b26097bed7e!2sJl.%20Musi%20No.21%2C%20DR.%20Soetomo%2C%20Kec.%20Tegalsari%2C%20Surabaya%2C%20Jawa%20Timur%2060264!5e0!3m2!1sen!2sid!4v1694490000000!5m2!1sen!2sid"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        
      </div>
    </section>

    <footer class="py-8 text-center bg-amber-50 text-gray-600">
      <div class="flex flex-col items-center gap-4">
        <div class="flex items-center gap-6">
          <a
            href="https://www.instagram.com/gmbindocoffee"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-amber-700 transition flex items-center gap-2"
          >
            <Icon name="uil-instagram" size="28" /> @gmbindocoffee
          </a>
        </div>
        <p>© 2025 Ganesha Mandiri Bhakti - All Rights Reserved</p>
      </div>
    </footer>

  </div>
</template>