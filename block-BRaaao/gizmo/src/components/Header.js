function Header(props) {
    return (
        <header>
             <div className="container flex header">
                 <a href="/" className="logo"> Articles</a>
       <nav>    
           <ul className="flex"> 
               <li> <a href="/"> Home</a></li>
               <li> <a href="/">About</a></li>
               <li> <a href="/"> Contact</a></li>
           </ul>
       </nav>
       </div>
        </header>
    );
}

export default Header;