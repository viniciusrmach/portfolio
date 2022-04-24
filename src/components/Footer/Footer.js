import './Footer.module.scss';

function Footer() {
  return (
    <footer>
      <p>
        {new Date().getFullYear()} • Vinicius Machado - todos os direitos
        reservados
      </p>
    </footer>
  );
}

export default Footer;
