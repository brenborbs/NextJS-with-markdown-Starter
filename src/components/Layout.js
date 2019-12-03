import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

export default function Layout(props) {
  return (
    <section className="layout">
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Header siteTitle={props.siteTitle} />
      <div className="content">{props.children}</div>
      <Footer />
      <style jsx>{``}</style>
    </section>
  );
}
