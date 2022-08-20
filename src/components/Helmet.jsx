//This componet helps keep track of the document title
const Helmet = ({ children , title}) => {

  document.title = "🐔City-" + title;

  return children
}

export default Helmet