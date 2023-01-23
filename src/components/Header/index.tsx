function Header({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl sm:text-4xl font-bold text-black">{children}</h1>;
}

export default Header;
