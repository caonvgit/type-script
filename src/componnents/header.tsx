type Props = {}
const Header = (props: Props) => {
  return (
    <div>
        <div className="header">
            <div className="header-item">
                <div className="header-Summer">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
                <div>
                    <a className="header-link" href="#">ShopNow</a>
                </div>
                <div>
                    <a href="" className="header-language">English</a>
                    <img src="Vector5.png" alt="" id="vector5-png"/>
                </div>
            </div>
        
            <div className="header-menu">
                    <div className="name-logo">
                        <h1>Exclusive</h1>
                    </div>
                <div className="menu-item">
                    <ul className="menu-title">
                        <li><a href="">Home</a></li>
                        <li><a href="./detail.html">Contact</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="./lognin.html">Sign Up</a></li>
                    </ul>
                </div>
                <div className="menu-icon">
                    <input type="text" name="" id="Search1" placeholder="What are you looking for ?"/>
        
                    <img src="./asets/img/heart.svg" alt="" id="vector3-png"/>
                    <img src="./asets/img/Cart.svg" alt="" id="cart1-png"/>
                    <img src="./asets/img/user.svg" alt="" id="user-png"/>
        
                </div>
            </div>


        </div> 
    </div>

  )
}
export default Header;