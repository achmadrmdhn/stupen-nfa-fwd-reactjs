function App() {
  const scrollToSection =
    ((e, id) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    []);

  return (
    <>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i className="fa-solid fa-book fa-2xl text-primary"></i>
              <span className="ms-2 fs-4">Book Store</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "home")}
                className="nav-link px-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#book"
                onClick={(e) => scrollToSection(e, "book")}
                className="nav-link px-2"
              >
                Book
              </a>
            </li>
            <li>
              <a
                href="#team"
                onClick={(e) => scrollToSection(e, "team")}
                className="nav-link px-2"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="nav-link px-2"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>

        {/* HOME */}
        <div id="home"></div>

        {/* HERO */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-sm">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-5 fw-bold lh-1 text-body-emphasis">
                Temukan Buku Favoritmu, Kirim Cepat ke Rumah
              </h1>
              <p className="lead">
                Jelajahi ribuan judul—dari fiksi, nonfiksi, hingga pengembangan
                diri. Harga bersahabat, kurasi berkualitas, dan promo menarik
                setiap minggu.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a
                  href="#book"
                  onClick={(e) => scrollToSection(e, "book")}
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Belanja Sekarang
                </a>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Lihat Promo
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
              <img
                className="rounded-3 img-fluid"
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop"
                alt="Rak buku modern"
              />
            </div>
          </div>
        </div>

        {/* BEST SELLER */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold">Best Seller Minggu Ini</h1>
              <p className="lead text-body-secondary">
                Pilihan pembaca paling diminati—cocok untuk mulai membangun
                koleksi atau dijadikan hadiah untuk sahabat.
              </p>
              <p>
                <a
                  href="#book"
                  onClick={(e) => scrollToSection(e, "book")}
                  className="btn btn-primary my-2 m-2"
                >
                  Lihat Semua
                </a>
                <a
                  href="#book"
                  onClick={(e) => scrollToSection(e, "book")}
                  className="btn btn-secondary my-2"
                >
                  Rekomendasi Untukmu
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* BOOK */}
        <div id="book"></div>
        <BookList />

        {/* TEAM */}
        <div id="team"></div>
        <section className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Tim di Balik Layar</h2>
            <p className="text-body-secondary mb-0">
              Kami percaya setiap buku membawa perubahan. Inilah orang-orang
              yang memastikan koleksi bacaanmu selalu relevan dan berkualitas.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <img
                  src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38="
                  alt="Raka Pratama"
                  className="card-img-top"
                  style={{ height: 260, objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Raka Pratama</h5>
                  <p className="text-primary fw-semibold mb-2">Store Manager</p>
                  <p className="text-body-secondary">
                    Mengatur operasional harian dan memastikan pengalaman
                    belanja nyaman dari awal hingga akhir.
                  </p>
                </div>
                <div className="card-footer bg-white">
                  <a href="#" className="btn btn-outline-primary btn-sm me-2">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" className="btn btn-outline-secondary btn-sm">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <img
                  src="https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg"
                  alt="Nadia Putri"
                  className="card-img-top"
                  style={{ height: 260, objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Nadia Putri</h5>
                  <p className="text-primary fw-semibold mb-2">
                    Editor & Kurator
                  </p>
                  <p className="text-body-secondary">
                    Mengkurasi rekomendasi bacaan dan memilih judul-judul yang
                    relevan untuk berbagai minat.
                  </p>
                </div>
                <div className="card-footer bg-white">
                  <a href="#" className="btn btn-outline-primary btn-sm me-2">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" className="btn btn-outline-secondary btn-sm">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <img
                  src="https://www.shutterstock.com/image-photo/happy-handsome-young-african-american-600nw-2432719071.jpg"
                  alt="Dimas Arya"
                  className="card-img-top"
                  style={{ height: 260, objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Dimas Arya</h5>
                  <p className="text-primary fw-semibold mb-2">
                    Customer Success
                  </p>
                  <p className="text-body-secondary">
                    Membantu pelanggan menemukan buku yang tepat dan menangani
                    setiap pertanyaan dengan cepat.
                  </p>
                </div>
                <div className="card-footer bg-white">
                  <a href="#" className="btn btn-outline-primary btn-sm me-2">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" className="btn btn-outline-secondary btn-sm">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-5 p-4 p-md-5 bg-body-tertiary rounded-3 text-center">
            <h4 className="fw-bold">Ingin Berkolaborasi?</h4>
            <p className="text-body-secondary mb-3">
              Kami terbuka untuk event literasi, bedah buku, dan program kampus.
              Hubungi kami untuk info kemitraan.
            </p>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="btn btn-primary"
            >
              Hubungi Tim
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <div id="contact"></div>
        <section className="container py-5">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <h2 className="fw-bold mb-3">Hubungi Kami</h2>
              <p className="text-body-secondary">
                Ada pertanyaan tentang ketersediaan buku, status pesanan, atau
                butuh rekomendasi? Tim kami siap membantu setiap hari kerja
                pukul 09.00–17.00 WIB.
              </p>

              <div className="mt-4 p-4 border rounded-3">
                <div className="d-flex align-items-start mb-3">
                  <i className="fa-solid fa-location-dot fa-lg text-primary me-3 mt-1"></i>
                  <div>
                    <strong>Alamat Toko</strong>
                    <p className="mb-0 text-body-secondary">
                      Jl. Literasi No. 12, Jakarta Selatan
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i className="fa-solid fa-envelope fa-lg text-primary me-3 mt-1"></i>
                  <div>
                    <strong>Email</strong>
                    <p className="mb-0 text-body-secondary">
                      support@bookstore.id
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <i className="fa-solid fa-phone fa-lg text-primary me-3 mt-1"></i>
                  <div>
                    <strong>Telepon/WhatsApp</strong>
                    <p className="mb-0 text-body-secondary">
                      +62 812-3456-7890
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="p-4 border rounded-3 bg-white shadow-sm">
                <h5 className="fw-semibold mb-3">Kirim Pesan</h5>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Contoh: Dimas Rafi"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Contoh: dimasrafi@mail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subjek
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Contoh: Cek stok ‘Atomic Habits’"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Pesan
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Tulis pertanyaan atau kebutuhanmu di sini..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    <i className="fa-regular fa-paper-plane me-2"></i>Kirim
                  </button>
                  <p className="text-body-secondary small mt-2 mb-0">
                    Dengan mengirim pesan, kamu menyetujui kebijakan privasi
                    kami.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "home")}
                  className="nav-link px-2 text-body-secondary"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#book"
                  onClick={(e) => scrollToSection(e, "book")}
                  className="nav-link px-2 text-body-secondary"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#book"
                  onClick={(e) => scrollToSection(e, "book")}
                  className="nav-link px-2 text-body-secondary"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="nav-link px-2 text-body-secondary"
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#team"
                  onClick={(e) => scrollToSection(e, "team")}
                  className="nav-link px-2 text-body-secondary"
                >
                  About
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">© 2025 NF Academy</p>
          </footer>
        </div>
      </div>
    </>
  );
}

{ /* BOOK */ }
function BookList() {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Katalog Buku</h2>
        <p className="text-body-secondary">
          Telusuri kategori populer dan temukan bacaan yang kamu butuhkan—dari
          fiksi epik hingga buku referensi kuliah.
        </p>
      </div>
      <BooksGrid />
    </div>
  );
}

function BooksGrid() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: "Rp129.000",
      img: "https://jbr.id/wp-content/uploads/atomic-habits-1.jpg",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      price: "Rp199.000",
      img: "https://media.licdn.com/dms/image/v2/D5612AQFRHlnmVgy3GA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698477499084?e=2147483647&v=beta&t=m5vesHPC2jLUWT8txDtjMjCO7yc3g2Xq_Huwky7d5i4",
    },
    {
      title: "Filosofi Teras",
      author: "Henry Manampiring",
      price: "Rp95.000",
      img: "https://assets.telkomsel.com/public/2024-03/14%20%282%29.png",
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      price: "Rp149.000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsRLKa5zO__tQKKQPeWZHJR-akEMmP7leJg&s",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      price: "Rp210.000",
      img: "https://coffeebytes.dev/en/linux/uncle-bob-clean-code-and-the-clean-code-paradigms/images/clean_code.jpg",
    },
    {
      title: "Laut Bercerita",
      author: "Leila S. Chudori",
      price: "Rp88.000",
      img: "https://i0.wp.com/dimensipers.com/wp-content/uploads/2022/05/laut-bercerita-1.jpg?resize=1200%2C675&ssl=1",
    },
  ];

  return (
    <div className="album py-4 bg-body-tertiary rounded">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {books.map((b, i) => (
            <div className="col" key={i}>
              <div className="card h-100 shadow-sm">
                <img
                  src={b.img}
                  alt={b.title}
                  className="card-img-top"
                  style={{ height: 220, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-1">{b.title}</h5>
                  <p className="text-body-secondary mb-2">oleh {b.author}</p>
                  <p className="fw-semibold mb-3">{b.price}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Detail
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Tambah ke Cart
                      </button>
                    </div>
                    <small className="text-body-secondary">
                      <i className="fa-solid fa-truck-fast me-1"></i>Ready
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
