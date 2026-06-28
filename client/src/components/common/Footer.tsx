

function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 py-6">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-base font-extrabold tracking-wider text-white">
          © {new Date().getFullYear()} Growth Aura Digital Agency
        </p>
      </div>
    </footer>
  );
}

export default Footer;