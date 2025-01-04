

// import React from 'react';
// import farmer from '../../src/img/A farmer.jpeg'; // Corrected path
// import hero18 from '../../src/img/hero18.jpeg'; // Corrected path
// import hero10 from '../../src/img/hero10.jpeg'; // Corrected path
// import gardenerImage from '../../src/img/farmer.jpeg'; // Corrected path
// import { FaSeedling, FaShippingFast, FaLightbulb, FaVideo } from "react-icons/fa";

// const App = () => {
//   return (
//     <div style={{ maxWidth: '1400px', margin: 'auto', padding: '60px', fontFamily: 'Arial, sans-serif' }}>
      
//       {/* Main Content */}
//       <div style={{ display: 'flex', gap: '200px' , paddingTop:'90px'}}>
        
//         {/* Image Grid */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(2, 1fr)',
//           gap: '10px',
//           width: '120%'
//         }}>
//           <div><img src={farmer} alt="img1" style={{ width: '100%', borderRadius: '10px' }} /></div>
//           <div><img src={hero18} alt="img2" style={{ width: '100%', borderRadius: '10px' }} /></div>
//           <div><img src={hero10} alt="img3" style={{ width: '100%', borderRadius: '10px' }} /></div>
//           <div><img src={gardenerImage} alt="img4" style={{ width: '100%', borderRadius: '10px' }} /></div>
//         </div>

//         {/* Benefits Section */}
// <div style={{ width: '80%', padding: '1px' }}>
//   <h3 style={{
//     fontSize: '3rem', color: '#388E3C', marginBottom: '40px',
//     fontFamily: '"Titan One", sans-serif',
//   }}>
//     Benefits of Shopping with Orga
//   </h3>

//   <div style={{
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '20px'
//   }}>
//     <FaSeedling style={{ fontSize: '3rem', color: '#4CAF50', marginRight: '15px' }} />
//     <div>
//       <h4 style={{ margin: 0, fontSize: '1.8rem', color: '#000', fontFamily: 'var(--bs-body-font-family)',   }}>Organic Fertilizers</h4>
//       <p style={{ margin: '5px 0 0 0', color: '#777', fontSize: '1.5rem' , }}>
//         High-quality organic fertilizers sourced from trusted suppliers.
//       </p>
//     </div>
//   </div>

//   <div style={{
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '20px'
//   }}>
//     <FaShippingFast style={{ fontSize: '3rem', color: '#4CAF50', marginRight: '15px' }} />
//     <div>
//       <h4 style={{ margin: 0, fontSize: '1.8rem', color: '#000',fontFamily: 'var(--bs-body-font-family)',  }}>Fast Delivery</h4>
//       <p style={{ margin: '5px 0 0 0', color: '#777', fontSize: '1.5rem',  }}>
//         Get your products delivered to your doorstep quickly and safely.
//       </p>
//     </div>
//   </div>

//   <div style={{
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '20px'
//   }}>
//     <FaLightbulb style={{ fontSize: '3rem', color: '#4CAF50', marginRight: '15px' }} />
//     <div>
//       <h4 style={{ margin: 0, fontSize: '1.8rem', color: '#000',fontFamily: 'var(--bs-body-font-family)',  }}>Expert Advice</h4>
//       <p style={{ margin: '5px 0 0 0', color: '#777', fontSize: '1.5rem',  }}>
//         Access guidance from agricultural experts on organic farming.
//       </p>
//     </div>
//   </div>

//   <div style={{
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '20px'
//   }}>
//     <FaVideo style={{ fontSize: '3rem', color: '#4CAF50', marginRight: '15px' }} />
//     <div>
//       <h4 style={{ margin: 0, fontSize: '1.8rem', color: '#000',fontFamily: 'var(--bs-body-font-family)',  }}>1.5k+ Video Resources</h4>
//       <p style={{ margin: '5px 0 0 0', color: '#777', fontSize: '1.5rem',  }}>
//         Explore a vast library of educational content on organic farming.
//       </p>
//     </div>
//   </div>

          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import farmer from '../../src/img/A farmer.jpeg';
// import hero18 from '../../src/img/hero18.jpeg';
// import hero10 from '../../src/img/hero10.jpeg';
// import gardenerImage from '../../src/img/farmer.jpeg';
// import { FaSeedling, FaShippingFast, FaLightbulb, FaVideo } from "react-icons/fa";
// import "../css/Product.css"; // Corrected import

// const App = () => {
//   return (
//     <div className="app-container">
//       {/* Main Content */}
//       <div className="main-content">
        
//         {/* Image Grid */}
//         <div className="image-grid">
//           <div><img src={farmer} alt="img1" className="image" /></div>
//           <div><img src={hero18} alt="img2" className="image" /></div>
//           <div><img src={hero10} alt="img3" className="image" /></div>
//           <div><img src={gardenerImage} alt="img4" className="image" /></div>
//         </div>

//         {/* Benefits Section */}
//         <div className="benefits">
//           <h3 className="benefits-title">Benefits of Shopping with Orga</h3>

//           <Benefit 
//             icon={<FaSeedling />} 
//             title="Organic Fertilizers" 
//             description="High-quality organic fertilizers sourced from trusted suppliers." 
//           />
//           <Benefit 
//             icon={<FaShippingFast />} 
//             title="Fast Delivery" 
//             description="Get your products delivered to your doorstep quickly and safely." 
//           />
//           <Benefit 
//             icon={<FaLightbulb />} 
//             title="Expert Advice" 
//             description="Access guidance from agricultural experts on organic farming." 
//           />
//           <Benefit 
//             icon={<FaVideo />} 
//             title="1.5k+ Video Resources" 
//             description="Explore a vast library of educational content on organic farming." 
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// // Benefit component
// const Benefit = ({ icon, title, description }) => (
//   <div className="benefit-item">
//     <div className="icon">{icon}</div>
//     <div>
//       <h4 className="benefit-title">{title}</h4>
//       <p className="benefit-description">{description}</p>
//     </div>
//   </div>
// );

// export default App;


import React from 'react';
import farmer from '../../src/img/A farmer.jpeg'; // Corrected path
import hero18 from '../../src/img/hero18.jpeg'; // Corrected path
import hero10 from '../../src/img/hero10.jpeg'; // Corrected path
import gardenerImage from '../../src/img/farmer.jpeg'; // Corrected path
import { FaSeedling, FaShippingFast, FaLightbulb, FaVideo } from "react-icons/fa";

const App = () => {
  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: 'auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Main Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column', // Stack items on mobile
          gap: '50px',
          paddingTop: '60px',
        }}
      >
        {/* Image Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // Responsive grid
            gap: '10px',
            width: '100%',
          }}
        >
          <div>
            <img
              src={farmer}
              alt="img1"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
          <div>
            <img
              src={hero18}
              alt="img2"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
          <div>
            <img
              src={hero10}
              alt="img3"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
          <div>
            <img
              src={gardenerImage}
              alt="img4"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div style={{ width: '100%', padding: '10px' }}>
          <h3
            style={{
              fontSize: '2rem',
              color: '#388E3C',
              marginBottom: '20px',
              fontFamily: '"Titan One", sans-serif',
            }}
          >
            Benefits of Shopping with Orga
          </h3>

          {/* Benefits List */}
          {[
            {
              icon: <FaSeedling style={iconStyle} />,
              title: 'Organic Fertilizers',
              description:
                'High-quality organic fertilizers sourced from trusted suppliers.',
            },
            {
              icon: <FaShippingFast style={iconStyle} />,
              title: 'Fast Delivery',
              description:
                'Get your products delivered to your doorstep quickly and safely.',
            },
            {
              icon: <FaLightbulb style={iconStyle} />,
              title: 'Expert Advice',
              description:
                'Access guidance from agricultural experts on organic farming.',
            },
            {
              icon: <FaVideo style={iconStyle} />,
              title: '1.5k+ Video Resources',
              description:
                'Explore a vast library of educational content on organic farming.',
            },
          ].map((benefit, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                flexWrap: 'wrap', // Ensure wrapping for smaller screens
              }}
            >
              {benefit.icon}
              <div>
                <h4 style={titleStyle}>{benefit.title}</h4>
                <p style={descriptionStyle}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Common styles
const iconStyle = {
  fontSize: '3rem',
  color: '#4CAF50',
  marginRight: '15px',
};

const titleStyle = {
  margin: 0,
  fontSize: '1.5rem',
  color: '#000',
  fontFamily: 'var(--bs-body-font-family)',
};

const descriptionStyle = {
  margin: '5px 0 0 0',
  color: '#777',
  fontSize: '1.2rem',
};

export default App;
