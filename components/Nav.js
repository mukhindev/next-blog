import Link from 'next/link';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link href="/">
            <a
              className="nav__link"
            >
              Главная
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          .nav {
            margin: 16px 0 0;
          }

          @media screen and (min-width: 678px) {
            .nav {
              margin: 0;
            }
          }

          .nav__list {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .nav__item {
            margin: 0 16px 0 0;
          }

          .nav__item:last-of-type {
            margin: 0;
          }

          .nav__link {
            color: var(--color-text);
            text-decoration: none;
            transition: 0.15s;
          }

          .nav__link:hover {
            color: var(--color-text);
            text-decoration: underline;
            text-underline-offset: 4px;
            text-decoration-thickness: 2px;
            text-decoration-color: var(--color-text-a);
          }

          .nav__link_is-active {
            font-weight: bold;
            text-decoration: underline;
            text-underline-offset: 4px;
            text-decoration-thickness: 2px;
          }
        `}
      </style>
    </nav>
  );
}

export default Nav;
