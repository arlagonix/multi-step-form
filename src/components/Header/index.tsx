function Header({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl font-bold text-black sm:text-4xl">{children}</h1>;
}

export default Header;
