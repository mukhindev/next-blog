import Logo from './Logo';
import Nav from './Nav';

function Header() {
  const test = () => {
    console.log('Ok');
  };

  return (
    <header className="header">
      <Logo />
      <button onClick={test} type="button">Тест</button>
      <Nav />
      <style jsx>
        {`
          .header {
            border-bottom: 1px solid var(--color-line);
          }

          .header__container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
          }

          @media screen and (min-width: 678px) {
            .header__container {
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            }
          }

          .header__logo {
            margin: 0;
            font-weight: bold;
            color: var(--color-text);
            text-decoration: none;
            transition: color 0.15s;
          }

          .header__logo:hover {
            color: var(--color-text-a);
          }

          .header__logo_is-home:hover {
            color: var(--color-text);
          }
        `}
      </style>
    </header>
  );
}

export default Header;
