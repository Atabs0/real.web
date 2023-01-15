import React from 'react'
import { Link } from 'react-router-dom'
import './PricingStyles.css'

function Pricing() {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Suite -</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>- 3 Days -</p>
                <p>- View -</p>
                <p>- Feature -</p>
                <p>- private Quaters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>- Executive -</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>- 3 Days -</p>
                <p>- View -</p>
                <p>- Feature -</p>
                <p>- private Quaters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>- Executive -</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>- 3 Days -</p>
                <p>- View -</p>
                <p>- Feature -</p>
                <p>- private Quaters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing