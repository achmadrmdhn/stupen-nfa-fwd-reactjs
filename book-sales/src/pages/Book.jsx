import { useState } from "react";
import { initialBooks } from "../utils/Books";
import BooksGrid from "../components/BooksGrid";

export default function Book() {
  const [books, setBooks] = useState(initialBooks);

  const addDummy = () => {
    const n = books.length + 1;
    const newBook = {
      id: `bk-${String(Date.now()).slice(-5)}`,
      title: `Buku Baru ${n}`,
      author: "Anonim",
      price: 99000,
      img: "https://mediadakwah.id/wp-content/uploads/2021/08/buku-perpus.jpeg",
      inStock: true,
      description:
            "Sebuah buku tambahan yang berisi konten fiksi umum, ditambahkan sebagai contoh koleksi baru dalam daftar katalog.",
    };
    setBooks((prev) => [newBook, ...prev]);
  };

  return (
    <section className="container py-5">
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
        <div>
          <h2 className="fw-bold mb-0">Semua Buku</h2>
          <p className="text-body-secondary mb-0">Koleksi lengkap tersedia di sini.</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={addDummy}>
            <i className="fa-solid fa-plus me-2"></i>Tambah Buku
          </button>
        </div>
      </div>

      <BooksGrid items={books} />
    </section>
  );
}
