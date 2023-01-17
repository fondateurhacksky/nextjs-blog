import Link from 'next/link';

function Pagination() {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
        <li className="page-item">
          <Link href="#" className="page-link">1</Link>
        </li>
        <li className="page-item active" aria-current="page">
          <span className="page-link">2</span>
        </li>
        <li className="page-item">
          <Link href="#" className="page-link">3</Link>
        </li>
        <li className="page-item">
          <Link href="#" className="page-link">Next</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
