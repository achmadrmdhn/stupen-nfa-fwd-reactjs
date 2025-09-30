import BooksGrid from "./BooksGrid";

export default function BookList() {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Katalog Buku</h2>
        <p className="text-body-secondary">
          Telusuri kategori populer dan temukan bacaan yang kamu butuhkan—dari fiksi epik hingga buku referensi kuliah.
        </p>
      </div>
      <BooksGrid />
    </div>
  );
}
