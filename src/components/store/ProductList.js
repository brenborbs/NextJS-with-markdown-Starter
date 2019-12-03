import Link from "next/link";

const ProductList = ({ image, title, name }) => {
  return (
    <>
      {/* artists */}

      <div className="fl w-50 w-25-m w-20-l pa2">
        <Link href="">
          <a>
            <img
              src={image}
              alt={image}
              className="w-100 db outline black-10"
            />
            <dl className="mt2 f6 lh-copy">
              <dt className="clip">Title</dt>
              <dd className="ml0 black truncate w-100">{title}</dd>
              <dt className="clip">Artist</dt>
              <dd className="ml0 gray truncate w-100">{name}</dd>
            </dl>
          </a>
        </Link>
      </div>
      {/* artists */}

      <style jsx>
        {`
          .outline {
            outline: 1px solid;
          }

          .cf:before,
          .cf:after {
            content: " ";
            display: table;
          }

          .cf:after {
            clear: both;
          }

          .cf {
            *zoom: 1;
          }

          .db {
            display: block;
          }

          .fl {
            float: left;
            _display: inline;
          }

          .fw4 {
            font-weight: 400;
          }

          .lh-copy {
            line-height: 1.5;
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

          .w-50 {
            width: 50%;
          }

          .w-100 {
            width: 100%;
          }

          .black-10 {
            color: rgba(0, 0, 0, 0.1);
          }

          .black {
            color: #000;
          }

          .gray {
            color: #777;
          }

          .pa2 {
            padding: 0.5rem;
          }

          .pa3 {
            padding: 1rem;
          }

          .ml0 {
            margin-left: 0;
          }

          .mt2 {
            margin-top: 0.5rem;
          }

          .mv0 {
            margin-top: 0;
            margin-bottom: 0;
          }

          .tc {
            text-align: center;
          }

          .ttu {
            text-transform: uppercase;
          }

          .f3 {
            font-size: 1.5rem;
          }

          .f6 {
            font-size: 0.875rem;
          }

          .truncate {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .clip {
            position: fixed !important;
            _position: absolute !important;
            clip: rect(1px 1px 1px 1px);
            clip: rect(1px, 1px, 1px, 1px);
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

          @media screen and (min-width: 30em) and (max-width: 60em) {
            .w-25-m {
              width: 25%;
            }
          }

          @media screen and (min-width: 60em) {
            .w-20-l {
              width: 20%;
            }
          }
        `}
      </style>
    </>
  );
};

export default ProductList;
