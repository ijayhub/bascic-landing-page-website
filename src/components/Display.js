import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg';

const Display = () => {
    return (
			<section>
				<h3 className='title'>Available in most countries</h3>
				<div className='display'>
					<div className='bg-color'>
						<img src={img1} alt='img1' className='img' />
						<h4 className="heading-title">Experience a Comfortable flying</h4>
						<p className='box-text'>
							Synergistically supply accurate ideas through revolutionary
							applications.
						</p> 
					</div>
					<div className='bg-color'>
						<img src={img2} alt='img2' className='img' />
						<h4 className="heading-title">Experience a Comfortable flying</h4>
						<p className='box-text'>
							Synergistically supply accurate ideas through revolutionary
							applications.
						</p> 
					</div>
					<div className='bg-color'>
						<img src={img3} alt='img3' className='img' />
						<h4 className="heading-title">Experience a Comfortable flying</h4>
						<p className='box-text'>
							Synergistically supply accurate ideas through revolutionary
							applications.
						</p>
					</div>
				</div>
			</section>
		);
}

export default Display
