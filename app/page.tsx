import type { JSX } from "react";
import Image from "next/image";

type MenuItem = {
  icon: string;
  name: string;
  description: string;
  price: string;
};

const menuItems: MenuItem[] = [
  {
    icon: "🥥",
    name: "Es Kopi Kelapa",
    description:
      "Espresso segar berpadu dengan air kelapa muda asli dan sedikit gula aren.",
    price: "Rp 22.000",
  },
  {
    icon: "🍯",
    name: "Kopi Susu Gula Aren",
    description:
      "Perpaduan klasik kopi robusta lokal, susu segar, dan gula aren asli.",
    price: "Rp 20.000",
  },
  {
    icon: "☕",
    name: "Americano",
    description:
      "Espresso murni dengan air panas, cocok untuk penikmat kopi hitam.",
    price: "Rp 18.000",
  },
  {
    icon: "🍫",
    name: "Cappuccino",
    description: "Espresso dengan foam susu lembut dan taburan bubuk cokelat.",
    price: "Rp 24.000",
  },
];

export default function Home(): JSX.Element {
  return (
    <>
      {/* ============ HEADER / NAVIGASI ============ */}
      <header className="site-header">
        <div className="container navbar">
          <a href="#beranda" className="logo">
            <span className="logo-icon">☕</span>
            <span className="logo-text">
              Kopi <span className="logo-accent">Nusantara</span>
            </span>
          </a>

          <nav className="nav-menu">
            <ul>
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#kontak">Kontak</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* ============ IDENTITAS MAHASISWA (Tugas Pertemuan 9) ============ */}
        <section className="student-section">
          <div className="container">
            <h1>Adrian Rizki Bintang</h1>
            <p>NIM: 535250060</p>
            <p className="student-note">Kopi Nusantara — Dibangun dengan Next.js</p>
          </div>
        </section>

        {/* ============ HERO / BANNER ============ */}
        <section className="hero" id="beranda">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="eyebrow">
                Sejak 2019 - Diracik di Rumah, Disajikan dengan Hati
              </p>
              <h2>Secangkir Kehangatan Khas Nusantara</h2>
              <p className="hero-desc">
                Kopi Nusantara menghadirkan biji kopi pilihan dari pelosok
                Indonesia, diseduh langsung setiap hari tanpa bahan pengawet.
                Nikmati dari layar HP, tablet, atau laptop Anda - tampilan kami
                menyesuaikan di mana pun Anda membuka halaman ini.
              </p>
              <div className="hero-buttons">
                <a href="#menu" className="btn btn-primary">Lihat Menu</a>
                <a href="#kontak" className="btn btn-outline">Pesan Sekarang</a>
              </div>
            </div>

            <div className="hero-image">
              <Image
                src="/images/cangkir-kopi.jpeg"
                alt="Ilustrasi cangkir Kopi Nusantara"
                width={1289}
                height={1220}
                priority
              />
            </div>
          </div>
        </section>

        {/* ============ KONTEN UTAMA: KARTU MENU (CSS Grid) ============ */}
        <section className="menu-section" id="menu">
          <div className="container">
            <h2 className="section-title">Menu Favorit Kami</h2>
            <p className="section-subtitle">
              Empat pilihan yang paling sering dipesan pelanggan kami.
            </p>

            <div className="menu-grid">
              {menuItems.map((item) => (
                <article className="menu-card" key={item.name}>
                  <div className="menu-icon">{item.icon}</div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TENTANG KAMI (Flexbox: gambar + teks) ============ */}
        <section className="about-section" id="tentang">
          <div className="container about-inner">
            <div className="about-image">
              <Image
                src="/images/biji-kopi.jpeg"
                alt="Ilustrasi biji kopi Nusantara"
                width={261}
                height={312}
              />
            </div>

            <div className="about-text">
              <h2 className="section-title align-left">Tentang Kopi Nusantara</h2>
              <p>
                Berawal dari dapur rumahan di tahun 2019, Kopi Nusantara tumbuh
                dari kecintaan terhadap biji kopi lokal Indonesia - dari Gayo,
                Toraja, hingga Kintamani. Kami percaya secangkir kopi terbaik
                lahir dari proses yang jujur dan bahan yang berkualitas.
              </p>
              <ul className="about-list">
                <li><span className="about-icon">🌱</span> Biji kopi pilihan langsung dari petani lokal</li>
                <li><span className="about-icon">🏠</span> Diseduh segar setiap hari di dapur rumahan kami</li>
                <li><span className="about-icon">📱</span> Bisa dipesan kapan saja lewat WhatsApp</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ KONTAK (Flexbox: info + formulir) ============ */}
        <section className="contact-section" id="kontak">
          <div className="container contact-inner">
            <div className="contact-info">
              <h2 className="section-title align-left">Hubungi &amp; Pesan</h2>
              <p>Isi formulir berikut, tim kami akan segera menghubungi Anda kembali.</p>
              <p><strong>Alamat:</strong> Jl. Melati No. 12, Bandung</p>
              <p><strong>WhatsApp:</strong> 0812-3456-7890</p>
              <p><strong>Jam Buka:</strong> Setiap hari, 08.00 - 21.00</p>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <input type="text" id="nama" name="nama" placeholder="Nama lengkap Anda" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="nama@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="pesan">Pesan</label>
                <textarea id="pesan" name="pesan" rows={4} placeholder="Tuliskan pesanan atau pertanyaan Anda" required />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Kirim Pesan</button>
            </form>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2026 Kopi Nusantara. Seluruh hak cipta dilindungi.</p>
          <p className="footer-note">
            Tugas Studi Kasus - Instalasi Next.js, Pertemuan 9 (Front-End Programming).
          </p>
        </div>
      </footer>
    </>
  );
}
