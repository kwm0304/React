import React from 'react'
import Nav from '../Nav';

function Header(props) {
const { currentTab, setCurrentTab } = props;

return(
    <div>
        <section>
            <header className='flex-row'>
                <h1>Kenan McKenzie</h1>
            <div>
                <Nav currentTab={currentTab} setCurrentTab={setCurrentTab} />
            </div>
            </header>
            <section className='backgroundImg'>
                <div className='backgroundPic'></div>
                <h2 className='welcome'></h2>
                <p>Welcome to my React portfolio. 
                    Take a look around!</p>
            </section>
        </section>
    </div>
)
}

export default Header