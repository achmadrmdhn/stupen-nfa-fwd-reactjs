export default function Contact() {
  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <h2 className="fw-bold mb-3">Hubungi Kami</h2>
          <p className="text-body-secondary">
            Ada pertanyaan tentang ketersediaan buku, status pesanan, atau butuh rekomendasi?
            Tim kami siap membantu setiap hari kerja pukul 09.00–17.00 WIB.
          </p>

          <div className="mt-4 p-4 border rounded-3">
            <div className="d-flex align-items-start mb-3">
              <i className="fa-solid fa-location-dot fa-lg text-primary me-3 mt-1"></i>
              <div>
                <strong>Alamat Toko</strong>
                <p className="mb-0 text-body-secondary">Jl. Literasi No. 12, Jakarta Selatan</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <i className="fa-solid fa-envelope fa-lg text-primary me-3 mt-1"></i>
              <div>
                <strong>Email</strong>
                <p className="mb-0 text-body-secondary">support@bookstore.id</p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <i className="fa-solid fa-phone fa-lg text-primary me-3 mt-1"></i>
              <div>
                <strong>Telepon/WhatsApp</strong>
                <p className="mb-0 text-body-secondary">+62 812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="p-4 border rounded-3 bg-white shadow-sm">
            <h5 className="fw-semibold mb-3">Kirim Pesan</h5>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nama Lengkap</label>
                <input type="text" className="form-control" id="name" placeholder="Contoh: Dimas Rafi" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Contoh: dimasrafi@mail.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subjek</label>
                <input type="text" className="form-control" id="subject" placeholder="Contoh: Cek stok ‘Atomic Habits’" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Pesan</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Tulis pertanyaan atau kebutuhanmu di sini..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                <i className="fa-regular fa-paper-plane me-2"></i>Kirim
              </button>
              <p className="text-body-secondary small mt-2 mb-0">
                Dengan mengirim pesan, kamu menyetujui kebijakan privasi kami.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
