import Link from "next/link";

export default function Index(){
    return(
        <div>
            <header>
                <img src="" className="logo" />
                <ul className="link-list">
                    <li><Link href="/"><a>Catalog</a></Link></li>
                    <li><a href="#" >Featured</a></li>
                    <li><a href="#" >Articles</a></li>
                    <li><a href="#" >About</a></li>
                    
                </ul>
            </header>
            {/* To Do: Navbar component */}
            <main>
                {/* To Do: Card Component */}
            </main>
            <footer>
                <p> Coded by ohirichi | 2020 | Chingu Solo Project </p>
            </footer>
            <style jsx>
            `{

            }`
            </style>
        </div>
    )
}