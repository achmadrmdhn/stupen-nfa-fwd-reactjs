import { NavLink } from "react-router-dom";

export default function Team() {
  return (
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
                Mengatur operasional harian dan memastikan pengalaman belanja nyaman dari awal hingga akhir.
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
              <p className="text-primary fw-semibold mb-2">Editor & Kurator</p>
              <p className="text-body-secondary">
                Mengkurasi rekomendasi bacaan dan memilih judul-judul yang relevan untuk berbagai minat.
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
              <p className="text-primary fw-semibold mb-2">Customer Success</p>
              <p className="text-body-secondary">
                Membantu pelanggan menemukan buku yang tepat dan menangani setiap pertanyaan dengan cepat.
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
          Kami terbuka untuk event literasi, bedah buku, dan program kampus. Hubungi kami untuk info kemitraan.
        </p>
        <NavLink to="/contact" className="btn btn-primary">Hubungi Tim</NavLink>
      </div>
    </section>
  );
}
