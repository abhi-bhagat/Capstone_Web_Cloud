import React from 'react'
// import $ from  'jquery'
import Carousel from 'react-bootstrap/Carousel'

const Testimony = () => (

  <div className="testimony-container" >
  <h2 class="testimony-heading">
  what our <span className="awesome">awesome users </span>say
</h2>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'images/slider-2.png'}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Param</h3>
      {/* <p>This app is great</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'images/slider-1.png'}
      alt="second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'images/slider-1.png'}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3> */}
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>





//
//   <div className="testimonial-container">
//   <div className="dk-container">
//     <div className="cd-testimonials-wrapper cd-container">
//       <h2>Testimonials</h2>
//       <ul className="cd-testimonials">
//         <li>
//           <div className="testimonial-content">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
//             <div className="cd-author">
//             <img className="card-img-top"
//                 src={'images/test.png'}
//                 alt="headerimage"
//             />
//               <ul className="cd-author-info">
//                 <li>Lorem<strong>Ipsum</strong><br /><span>@twitterhandle</span></li>
//                 <li />
//               </ul>
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="testimonial-content">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.</p>
//             <div className="cd-author">
//             <img className="card-img-top"
//                 src={'images/test.png'}
//                 alt="headerimage"
//             />
//               <ul className="cd-author-info">
//                 <li>Lorem<strong>Ipsum</strong><br /><span>@twitterhandle</span></li>
//                 <li />
//               </ul>
//             </div>
//           </div>
//         </li>
//         <li>
//           <div className="testimonial-content">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.</p>
//             <div className="cd-author">
//             <img className="card-img-top"
//                 src={'images/test.png'}
//                 alt="headerimage"
//             />
//               <ul className="cd-author-info">
//                 <li>Lorem<strong>Ipsum</strong><br /><span>@twitterhandle</span></li>
//                 <li />
//               </ul>
//             </div>
//           </div>
//         </li>
//       </ul>
//     </div>
//     {/* cd-testimonials */}
//   </div>
// </div>
)

export default Testimony
