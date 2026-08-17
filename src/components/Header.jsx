import globe from '../assets/globe.png'
export default function Header(){
    return(
        <>
            <header>
                <img src= {globe} alt="globe logo" />
                <h1>My Travel Journal</h1>
            </header>
        </>
    )
}