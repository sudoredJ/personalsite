import React from 'react';
import Link from 'next/link';
import Stars from '../components/Stars';
import { Hero } from '../components/Hero';
import CustomCursor from "../components/CustomCursor";
import Toggler from "../components/toggler";
import AnimatedLink from '../components/AnimatedLink';

export default function BucketList() {
  const titleStyle = {
    fontSize: '2rem',
    margin: '1rem auto',
    color: '#FFFFFF',
    textAlign: 'center',
  };

  const bucketListItems = [
    "Go to Space (preferably moon)",
    "Balkans",
    <a href="https://www.google.com/maps/place/Tacos+Goku/@17.0794584,-96.7037999,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPitgV85tPuGC1umlhQFFC7gUSEIckbkAsSJoyR!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPitgV85tPuGC1umlhQFFC7gUSEIckbkAsSJoyR%3Dw224-h298-k-no!7i3024!8i4032!4m13!1m2!2m1!1stacos+goku!3m9!1s0x85c7222be838aae7:0x112cd2e51a7ed16c!8m2!3d17.0794584!4d-96.7037999!10e5!14m1!1BCgIYIQ!15sCgp0YWNvcyBnb2t1WgwiCnRhY29zIGdva3WSAQ90YWNvX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11cnb6y20j?entry=ttu" target="_blank">Taqueria Goku</a>,
    "Japan (Hokkaido, Skiing in Niseko, Tokyo)",
    "Busan",
    "Kowloon Walled City Museum",
    "Patagonia",
    "Bhutan",
    "Northern Lights",
    "Ski Alaskan Backcountry",
    "Horseback riding in Kyrgyzstan",
    "Caldera of Mount Erebus & work at McMurdo Station for a season",
    "Craters of the Moon, Idaho",
    "Iceland",
    "Chichen Itza",
    "Cruz's Mexican Grill in Barrow, AK",
    "Victoria Falls",
    "Summit Denali",
    "Skydive",
    "Midway Atoll",
    "Bailong Elevator"
  ];

  return (
    <div className="page-wrapper">
      <Stars />
      <CustomCursor />
  
      <header className="pt-2 lg:pt-2">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between font-medium">
            {/* Empty Navigation */}
          </nav>
        </div>
      </header>
  
      <div className="container">
        <div className="hero-wrapper" style={{ marginTop: '100px' }}>
          <Hero title="My Bucket List" index className="bouncy">
            <div class="box-wrap" style={{ width: '40%', margin: '0 auto' }}>
              <div class="hinge left"></div>
              <div id="audio" class="box open-left">
                <div class="screw right" style={{ border: 'none', outline: 'none' }}></div>
                <ul>
                  {bucketListItems.map((item, index) => (
                    <li key={index} style={{ color: '#FFFFFF', textAlign: 'center' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>

  <Link href="/">
    <p style={{ color: '#FFFFFF', fontSize: '2rem', textAlign: 'center' }}>Go back home</p>
  </Link>
</div>  
     </Hero>
        </div>
      </div>
    </div>
  );
}