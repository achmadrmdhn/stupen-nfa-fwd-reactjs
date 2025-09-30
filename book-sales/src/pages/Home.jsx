import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookList from "../components/BookList";

export default function Home() {
  const location = useLocation();

//   Smooth Scroll
  useEffect(() => {
    if (location.hash === "#book") {
      const el = document.getElementById("book");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  const scrollToBook = (e) => {
    e.preventDefault();
    const el = document.getElementById("book");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
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
              Jelajahi ribuan judul—dari fiksi, nonfiksi, hingga pengembangan diri.
              Harga bersahabat, kurasi berkualitas, dan promo menarik setiap minggu.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a href="#book" onClick={scrollToBook} className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Belanja Sekarang
              </a>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
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
              Pilihan pembaca paling diminati—cocok untuk mulai membangun koleksi atau dijadikan hadiah untuk sahabat.
            </p>
            <p>
              <a href="#book" onClick={scrollToBook} className="btn btn-primary my-2 m-2">Lihat Semua</a>
              <a href="#book" onClick={scrollToBook} className="btn btn-secondary my-2">Rekomendasi Untukmu</a>
            </p>
          </div>
        </div>
      </section>

      {/* BOOK (Katalog) */}
      <div id="book"></div>
      <BookList />
    </>
  );
}
