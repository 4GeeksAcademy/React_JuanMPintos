import React from "react";

const Card = (props) => {
    return(
<div className="card" style={{width: "18rem"}}>
  <img src="https://imgs.search.brave.com/nffXT7dPjSWaNZSMMkNkb3m0Nh8339Y-tBObCwRUpFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDcv/cm9iZXJ0LWRvd25l/eS1qci1tYXJ2ZWwt/ZG9vbS1jb21pYy1j/b24tMjAyNC5qcGc_/cXVhbGl0eT04NSZ3/PTI0MDA" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum dicta labore voluptatibus error culpa sint laudantium, aspernatur, ipsam excepturi velit vel id blanditiis atque, quis dolores asperiores vitae autem?</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>
)
};

export default Card;
