import './banner-message.css'

export const BannerMassage = () => {
    
  return (
    <div style={{ position: 'relative', marginTop: '100px', marginBottom: '100px'  }}>
        <img src="./panoramic1.jpg" className="d-block w-100" style={{width: "100%", height: "50vh"}}/>
        <div className="overlay" style={{textAlign: 'center', width: '100%'}}>
        <h1 className="overlay-text">Experiencia de relajación y rejuvenecimiento incomparable</h1>
      </div>
    </div>
  )
}