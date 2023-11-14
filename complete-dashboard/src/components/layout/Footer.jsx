function Footer() {
  const currentYear = new Date().getFullYear().toString();

  return (
    <div className="hidden font-light text-sm md:block md:self-center md:m-auto md:text-center md:p-2 ">
      <p>This is an example  {currentYear} </p>
    </div>
  );
}

export default Footer;
