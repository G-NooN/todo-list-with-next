import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/report">Report</Link>
      <Link href="/todolist/csr">TodoList(CSR)</Link>
      <Link href="/todolist/ssr">TodoList(SSR)</Link>
    </nav>
  );
};

export default Navbar;
