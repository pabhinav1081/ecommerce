import './header.css';
import './HomePage.css';
export default function HomePage(){
  return(
        <> <title>Home Page</title>
        <div className="header">
        <div className="left-section">
            <a href="index.html" className="header-link">
            <img className="logo"
                src="images/logo-white.png" />
            <img className="mobile-logo"
                src="images/mobile-logo-white.png" />
            </a>
        </div>

        <div className="middle-section">
            <input className="search-bar" type="text" placeholder="Search" />

            <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
            </button>
        </div>

        <div className="right-section">
            <a className="orders-link header-link" href="orders.html">

            <span className="orders-text">Orders</span>
            </a>

            <a className="cart-link header-link" href="checkout.html">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">2</div>
            <div className="cart-text">Cart</div>
            </a>
        </div>
        </div>

        <div className="home-page">
        <div className="products-grid">
            <div className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                src="images/products/athletic-cotton-socks-7-pairs.jpg" />
            </div>

            <div className="product-name limit-text-to-3-lines">
                Black and Gray Athletic Cotton Socks - 5 Pairs
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                src="images/ratings/rating-46.png" />
                <div className="product-rating-count link-primary">
                86
                </div>
            </div>

            <div className="product-price">
                $9.90
            </div>

            <div className="product-quantity-container">
                <select>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="4">5</option>
                <option value="5">6</option>
                <option value="6">7</option>
                <option value="7">8</option>
                <option value="8">9</option>
                <option value="9">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
                <img src="images/icons/checkmark.png" />
                Added
            </div>

            <button className="add-to-cart-button button-primary">
                Add to Cart
            </button>
            </div>

            <div className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                src="images/products/intermediate-composite-basketball.jpg" />
            </div>

            <div className="product-name limit-text-to-3-lines">
                Intermediate Size Basketball
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                src="images/ratings/rating-41.png" />
                <div className="product-rating-count link-primary">
                126
                </div>
            </div>

            <div className="product-price">
                $19.95
            </div>

            <div className="product-quantity-container">
                <select>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="4">5</option>
                <option value="5">6</option>
                <option value="6">7</option>
                <option value="7">8</option>
                <option value="8">9</option>
                <option value="9">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
                <img src="images/icons/checkmark.png" />
                Added
            </div>

            <button className="add-to-cart-button button-primary">
                Add to Cart
            </button>
            </div>

            <div className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                src="images/products/adults-plain-cotton-tshirt-3-pack-teal.jpg" />
            </div>

            <div className="product-name limit-text-to-3-lines">
                Adults Plain Cotton T-Shirt - 1 Pack
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                src="images/ratings/rating-46.png" />
                <div className="product-rating-count link-primary">
                55
                </div>
            </div>

            <div className="product-price">
                $6.99
            </div>

            <div className="product-quantity-container">
                <select>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="4">5</option>
                <option value="5">6</option>
                <option value="6">7</option>
                <option value="7">8</option>
                <option value="8">9</option>
                <option value="9">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
                <img src="images/icons/checkmark.png" />
                Added
            </div>

            <button className="add-to-cart-button button-primary">
                Add to Cart
            </button>
            </div>
        </div>
        </div>
        </>
)
}