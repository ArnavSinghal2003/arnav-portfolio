const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-2">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center gap-x-6 gap-y-2 text-[10px] tracking-widest text-muted-foreground">
        <span>© {currentYear} ARNAV SINGHAL · ALL RIGHTS RESERVED</span>
        <span className="hidden md:inline">SESSION: PUBLIC · DATA DELAYED 0 MIN</span>
        <span className="sm:ml-auto">
          NOT INVESTMENT ADVICE — <span className="text-up">HIRING ADVICE ONLY</span>
        </span>
        <span className="hidden lg:inline">BUILT WITH REACT · VITE · TAILWIND</span>
      </div>
    </footer>
  );
};

export default Footer;
