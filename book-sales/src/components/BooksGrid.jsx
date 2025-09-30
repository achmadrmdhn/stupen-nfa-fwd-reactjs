export default function BooksGrid() {
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
      img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4ovaa9po3t4ii8c4qlqr.png",
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
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-primary">Tambah ke Cart</button>
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
