import React from "react";

import "./Homepage.scss";

import Headerbgc from "../../assets/image/headerbgc.jpg";
import wikiKoffie from "../../assets/image/wikikoffie.jpeg";

function Home() {
  return (
    <div className="homepage">
      <header>
        <img src={Headerbgc} alt="" />
        <h1>
          <em>
            Taste of Life
            <br />
            In Single Sip of Coffee <br />
            <span>-Wiki Koffie</span>
          </em>
        </h1>
      </header>
      <main>
        <div className="container-main">
          <div className="card-initial">
            <div className="img-container">
              <img src={wikiKoffie} alt="wiki koffie" />
            </div>
            <div className="card-description">
              <h1>Wiki Koffie</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, a. Dolorum eligendi nemo laudantium maxime doloribus natus recusandae temporibus ad, ut, blanditiis quia, officia nisi officiis suscipit iure asperiores est.
                Alias, facilis saepe voluptatibus hic quod repudiandae, eius, modi magni blanditiis iure dicta veritatis neque? Culpa expedita vitae, praesentium, quibusdam earum minima laboriosam repellat tempore alias quis eum, obcaecati cumque.
                Aliquid, voluptates quas enim iure molestias fugiat unde assumenda eos. Laborum fugit, pariatur architecto quidem corporis corrupti assumenda delectus nemo reiciendis exercitationem, officia dolorem explicabo ducimus aliquid voluptate, tempore a.
                Quae, similique numquam! Itaque, nihil debitis! Distinctio possimus, modi ullam totam in nisi sed odio tenetur eligendi ipsum quo tempora recusandae ab placeat repellat quos amet, dolor vero, voluptas nemo?
                Nulla error et ipsa obcaecati sit esse nam quod, ipsam atque mollitia recusandae saepe eum libero dignissimos hic facilis vitae eveniet adipisci debitis aut ducimus magni aliquid impedit harum? Dolore.
                Suscipit et necessitatibus iusto optio recusandae, nobis quos id ratione aut ipsa exercitationem at iure! Omnis quasi quas aperiam modi iusto delectus quibusdam voluptatem optio nulla, necessitatibu
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
