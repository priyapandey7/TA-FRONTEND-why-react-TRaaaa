//craete a funcrtion component to render our jsx
import Header from "./Header"
import Hero from "./Hero"
import Article from "./Article"
import Footer from "./Footer"

function App (props){
    return (
        <>
       <Header />
       < Hero />
       < Article />
       <Footer />
       
          </>
    )
}


//export 
export default App