import React, { Component } from "react";
import ArtistList from "../components/store/ProductList";
import Layout from "../components/Layout";

export default class Store extends Component {
  static async getInitialProps() {
    const siteConfig = await import(`../data/config.json`);
    return { ...siteConfig };
  }

  state = {
    artists: [
      {
        id: 1,
        image:
          "http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png",
        title: "Blonde",
        name: "Frank Ocean",
        link:
          "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
      },
      {
        id: 2,
        image:
          "http://is1.mzstatic.com/image/thumb/Music71/v4/c8/2d/b1/c82db1cd-9dc5-d7cb-2a34-735cf47bb809/source/400x40000bb.png",
        title: "Jeffery",
        name: "Young Thug",
        link:
          "https://geo.itunes.apple.com/us/album/jeffery/id1146718343?at=1l3vqFJ&mt=1&app=music"
      },
      {
        id: 3,
        image:
          "http://is5.mzstatic.com/image/thumb/Music49/v4/1b/36/43/1b3643c6-e6a3-41bc-7f6d-7c2b64b5d60b/source/400x40000bb.png",
        title: "Garage Days",
        name: "Kendrick Lamar",
        link:
          "https://geo.itunes.apple.com/us/album/untitled-unmastered./id1089846273?at=1l3vqFJ&mt=1&app=music"
      },
      {
        id: 4,
        image:
          "http://is3.mzstatic.com/image/thumb/Music62/v4/fa/ae/a6/faaea65f-0819-bb5d-afaa-4f5e84015204/source/400x40000bb.png",
        title: "99 Cents",
        name: "Santigold",
        link:
          "https://geo.itunes.apple.com/us/album/99-cents/id1054734475?at=1l3vqFJ&mt=1&app=music"
      },
      {
        id: 5,
        image:
          "http://is2.mzstatic.com/image/thumb/Music18/v4/34/03/34/34033451-12e2-2d0b-c100-11a390922a01/source/400x40000bb.png",
        title: "A Moon Shaped Pool",
        name: "Radiohead",
        link:
          "https://geo.itunes.apple.com/us/album/a-moon-shaped-pool/id1111577743?at=1l3vqFJ&mt=1&app=music"
      }
    ]
  };
  render() {
    const { artists } = this.state;
    const { title, description } = this.props;
    return (
      <Layout pathname="store" siteTitle={title} siteDescription={description}>
        <article>
          <h2 className="f3 fw4 pa3 mv0">Albums</h2>
          <div className="cf pa2">
            {artists.map(({ id, ...props }) => (
              <ArtistList key={id} {...props} />
            ))}
          </div>
        </article>
      </Layout>
    );
  }
}
