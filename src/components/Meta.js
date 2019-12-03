import Head from "next/head";

export default function Meta(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{props.siteTitle}</title>
        <meta name="Description" content={props.description}></meta>
      </Head>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");

          * {
            box-sizing: inherit;
          }
          html {
            box-sizing: border-box;
            
          }
          body {
            margin: 0;
            overflow-x: hidden;
                    color: #000;
                    font-size: 16px;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
          }
          a {
            text-decoration: none;
            color: inherit;
            transition: opacity 0.2s ease;
            }
            a:hover {
            transition: opacity 0.2s ease;
            opacity: 0.5;
            text-decoration-color: inherit;
            }
          }
        `}
      </style>
    </>
  );
}
