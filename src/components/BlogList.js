import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogList = props => {
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  return (
    <>
      <section className="mw7 center avenir">
        <h2 className="baskerville fw1 ph3 ph0-1">Latest Posts</h2>
        <article className="bt bb b--black-10">
          {props.allBlogs.length > 1 &&
            props.allBlogs.map(post => (
              <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
                <a className="db pv4 ph3 ph0-l no-underline black dim">
                  <div className="flex flex-column flex-row-ns">
                    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                      <img
                        src={post.document.data.hero_image}
                        className="db"
                        alt={post.document.data.hero_image}
                      />
                    </div>
                    <div className="w-100 w-60-ns pl3-ns">
                      <h1 className="f3 fw1 baskerville mt0 lh-title">
                        {post.document.data.title}
                      </h1>

                      <ReactMarkdown
                        source={truncateSummary(post.document.content)}
                        className="f6 f5-l lh-copy"
                      />

                      <p className="f6 lh-copy mv0">
                        By {post.document.data.author}
                      </p>
                      <p className="f6 lh-copy mv0">
                        {reformatDate(post.document.data.date)}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
        </article>
      </section>
      <style jsx>{``}</style>
    </>
  );
};

export default BlogList;

// <ul className="list">
//   {props.allBlogs.length > 1 &&
//     props.allBlogs.map(post => (
//       <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
//         <a>
//           <li>
//             <div className="hero_image">
//               <img
//                 src={post.document.data.hero_image}
//                 alt={post.document.data.hero_image}
//               />
//             </div>
//             <div className="blog__info">
//               <h2>{post.document.data.title}</h2>
//               <h3> {reformatDate(post.document.data.date)}</h3>
//               <div>
//                 <ReactMarkdown
//                   source={truncateSummary(post.document.content)}
//                 />
//               </div>
//             </div>
//           </li>
//         </a>
//       </Link>
//     ))}
// </ul>
