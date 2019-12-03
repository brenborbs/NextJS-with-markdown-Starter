import Link from "next/link";

export default function Header(props) {
  return (
    <header className="">
      <nav className="pa3 pa4-ns">
        <Link href="/">
          <a
            className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
            title="Home"
          >
            {props.siteTitle}
          </a>
        </Link>
        <div className="tc pb3">
          <Link href="/">
            <a className="link dim gray f6 f5-ns dib mr3" title="Home">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="link dim gray f6 f5-ns dib mr3" title="About">
              About
            </a>
          </Link>
          <Link href="/store">
            <a className="link dim gray f6 f5-ns dib mr3" title="Store">
              Store
            </a>
          </Link>
          <Link href="/">
            <a className="link dim gray f6 f5-ns dib" title="Contact">
              Contact
            </a>
          </Link>
        </div>
      </nav>

      <style jsx>{`
        .db {
          display: block;
        }

        .dib {
          display: inline-block;
        }

        .b {
          font-weight: bold;
        }

        .link {
          text-decoration: none;
          transition: color 0.15s ease-in;
        }

        .link:link,
        .link:visited {
          transition: color 0.15s ease-in;
        }

        .link:hover {
          transition: color 0.15s ease-in;
        }

        .link:active {
          transition: color 0.15s ease-in;
        }

        .link:focus {
          transition: color 0.15s ease-in;
          outline: 1px dotted currentColor;
        }

        .black {
          color: #000;
        }

        .gray {
          color: #777;
        }

        .pa3 {
          padding: 1rem;
        }

        .pb3 {
          padding-bottom: 1rem;
        }

        .mr3 {
          margin-right: 1rem;
        }

        .mb3 {
          margin-bottom: 1rem;
        }

        .tc {
          text-align: center;
        }

        .f1 {
          font-size: 3rem;
        }

        .f6 {
          font-size: 0.875rem;
        }

        .dim {
          opacity: 1;
          transition: opacity 0.15s ease-in;
        }

        .dim:hover,
        .dim:focus {
          opacity: 0.5;
          transition: opacity 0.15s ease-in;
        }

        .dim:active {
          opacity: 0.8;
          transition: opacity 0.15s ease-out;
        }

        @media screen and (min-width: 30em) {
          .pa4-ns {
            padding: 2rem;
          }

          .mb4-ns {
            margin-bottom: 2rem;
          }

          .f-headline-ns {
            font-size: 6rem;
          }

          .f5-ns {
            font-size: 1rem;
          }
        }
      `}</style>
    </header>
  );
}
