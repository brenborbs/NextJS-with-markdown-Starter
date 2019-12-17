import React, { Component } from "react";
import Layout from "../components/Layout";

export default class Store extends Component {
  static async getInitialProps() {
    const siteConfig = await import(`../data/config.json`);
    return { ...siteConfig };
  }

 
  render() {
    const { title, description } = this.props;
    return (
      <Layout pathname="contact" siteTitle={title} siteDescription={description}>
        <article className="ba mw5 mw6-ns center pt2">
  <div className="aspect-ratio aspect-ratio--6x4 mb4">
  <article className="pa4 black-80">
    <h2>Contact</h2>
  <form>
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <div className="mt3">
        <label className="db fw4 lh-copy f6">Email address</label>
        <input className="pa2 input-reset ba b--black-20 w-100 measure" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mt3" >
    <label className="f6 b db mb2">Comments</label>
    <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"></textarea>
  </div>
    </fieldset>
    <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Submit"/></div>
  </form>
</article>
  </div>
</article>
      </Layout>
    );
  }
}
