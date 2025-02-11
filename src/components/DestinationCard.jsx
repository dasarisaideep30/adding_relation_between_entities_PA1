import React from 'react';

function DestinationCard(props) {
    const name = props.name;
    const location = props.location;
    const image = props.image;
    const description = props.description; // Corrected typo here
    const price = props.price;

    return (
      <div style={{
          display: 'flex',
          gap: '16px',          // Adds space between cards
          flexWrap: 'wrap',     // Allows cards to wrap on smaller screens
          justifyContent: 'center' // Centers the cards horizontally
      }}>
          {/* Card 1 */}
          <div style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '16px',
              maxWidth: '300px',
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif'
          }}>
              <img 
                  src={image} 
                  alt={name} 
                  style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px'
                  }} 
              />
              <h2 style={{
                  fontSize: '1.5rem',
                  margin: '12px 0 8px',
                  color: '#333'
              }}>{name}</h2>
              <p style={{
                  color: '#777',
                  fontSize: '0.9rem',
                  margin: '4px 0'
              }}>Location: {location}</p>
              <p style={{
                  color: '#555',
                  fontSize: '1rem',
                  margin: '4px 0'
              }}>{description}</p>
              <p style={{
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  marginTop: '8px'
              }}>Price: {price}</p>
          </div>

    {/* Add more cards here in the same format */}
</div>

    
    );
}

export default DestinationCard;
