import React, { useState } from 'react';
import Head from 'next/head';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Toggler from "../components/toggler";



export default function Art_Showcase() {
  const titleStyle = {
    fontSize: '2rem',
    margin: '1rem auto',
    color: '#FFFFFF',
    textAlign: 'center',
  };
  const [toggledElements, setToggledElements] = useState({ element1: false });

  const handleToggle = (element) => {
    setToggledElements({ ...toggledElements, [element]: !toggledElements[element] });
  };

  const fgcuImages = [
    '00192-498937530.png',
    '00202-3724312188.png',
    '00209-198626321.png',
    '00215-198626327.png',
    '00224-198626336.png',
    '00228-198626340.png',
    '00243-59794364.png',
    '00245-59794366.png',
    '00247-59794368.png',
    '00249-59794370.png',
    '00260-1190224729.png',
  ].map(image => `/fgcu/${image}`);
  
  const [openFgcu, setOpenFgcu] = React.useState(false);
  
  const onOpenFgcuModal = () => setOpenFgcu(true);
  const onCloseFgcuModal = () => setOpenFgcu(false);
  
  const images = [
    '00208-1299650397.png',
    '00097-2885711723.png',
    '00098-2885711724.png',
    '00099-2885711725.png',
    '00100-2885711726.png',
    '00139-3268074944.png',
    '00144-3268074949.png',
    '00225-338075830.png',
    '00256-980215910.png',
    '00314-2621995700.png',
    '00337-2348191070.png',
    '00338-2348191071.png',
    '00358-2348191091.png',
    '00400-2348191133.png',
    '00421-2348191154.png',
    '00544-2348191277.png',
    '00792-2348191525.png',
    '00815-2348191548.png',
  ].map(image => `/washu_ai_pixelart/${image}`);

  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Head>
        <title>Art Showcase</title>
      </Head>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#000',
          paddingTop: '2rem',
        }}
      >
        <h1 style={titleStyle}>Art Showcase</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10rem' }}>
  <a className="button" href="#" data-toggle="audio" onClick={onOpenModal}>WashU Pixel Art</a>
  <a className="button" href="#" data-toggle="audio" onClick={onOpenFgcuModal}>FGCU Pixel Art</a>
</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="https://s11.gifyu.com/images/SgVhM.gif" alt="Artwork of St. Louis" style={{width: '200px', marginTop: '2rem'}} />
          <img src="/00276-3611803204.png" alt="Artwork from public folder" style={{width: '200px', marginTop: '2rem'}} />
        </div>
        <div style={{ 
          color: '#FFFFFF', 
          fontSize: '16px', 
          marginBottom: '20px',
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          AI art generated Spring 2023 via Stable Diffusion
        </div>
        <Modal open={open} onClose={onCloseModal} center styles={{ modal: { maxWidth: '30%', maxHeight: '70%' } }}>
  <Carousel>
    {images.filter(src => src.includes('00')).map((src, index) => (
      <div key={index}>
        <img src={src} alt={`Artwork ${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
    ))}
  </Carousel>
</Modal>
<Modal open={open} onClose={onCloseModal} center styles={{ modal: { maxWidth: '30%', maxHeight: '70%' } }}>
  <Carousel>
    {images.filter(src => src.includes('00')).map((src, index) => (
      <div key={index}>
        <img src={src} alt={`Artwork ${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
    ))}
  </Carousel>
</Modal>

<Modal open={openFgcu} onClose={onCloseFgcuModal} center styles={{ modal: { maxWidth: '30%', maxHeight: '70%' } }}>
  <Carousel>
    {fgcuImages.map((src, index) => (
      <div key={index}>
        <img src={src} alt={`Artwork ${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
    ))}
  </Carousel>
</Modal>

<a href="/" style={titleStyle}>Back to Home</a>

      </div>
    </div>
  );}