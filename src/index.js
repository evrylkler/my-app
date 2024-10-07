import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71jfsEP8G4L._AC_UL254_SR254,254_.jpg"
    alt="Spooky Cutie"
  />
);
const Title = () => <h2>Spooky Cutie: Coloring Book</h2>;
const Author = () => {
  return <h4>Coco Wyo</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// export default Greeting;

// function Greeting() {
//   return (
//     <>
//       <Person />
//       <Message />
//     </>
//   );
// }

// function Greeting() {
//   return React.createElement("h2", {}, "hello world");
// }

// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "Hello world")
//   );
// }
