
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 fonte bg-[#f5f5f5] text-gray-800">
      <p>
        <span>{currentYear} &#169;</span> by kitaby
      </p>
    </footer>
  );
};

export default Footer;
