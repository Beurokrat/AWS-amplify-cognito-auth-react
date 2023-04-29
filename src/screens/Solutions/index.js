import { useState, useRef, useEffect } from 'react';
import { Design, Development, Marketing } from '../../components/Solutions';

import { Component, Tabs, Button, Line } from './style';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

const Solutions = () => {
  const [tab, setTab] = useState('design');
  const buttonRef = useRef([]);
  const activeNavRef = useRef(null);
  const componentRef = useRef(null);
  const headingRef = useRef(null);
  const tabsRef = useRef(null);
  gsap.registerPlugin(Flip);

  const animate = (el) => {
    gsap.to(buttonRef.current, { color: '#252525' });
    gsap.to(el.currentTarget, { color: 'green' });

    const state = Flip.getState(activeNavRef.current);
    el.currentTarget.appendChild(activeNavRef.current);
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
      ease: 'elastic.out(2,1)',
    });
  };

  useEffect(() => {
    gsap.from(headingRef.current, {
      duration: 0.2,
      autoAlpha: 0,
      ease: 'linear',
    });
    gsap.from(tabsRef.current, {
      duration: 0.2,
      autoAlpha: 0,
      ease: 'linear',
      delay: 0.2,
    });
  }, []);

  useEffect(() => {
    gsap.from(componentRef.current, {
      duration: 0.5,
      autoAlpha: 0,
      ease: 'linear',
      delay: 0.4,
    });
  }, [tab]);

  const animateComponent = (e, activeState) => {
    animate(e);
    gsap.to(componentRef.current, {
      duration: 0.4,
      autoAlpha: 0,
      ease: 'none',
    });
    setTimeout(() => {
      setTab(activeState);
    }, 400);
  };
  return (
    <div className='wrapper'>
      <div ref={headingRef} className='title'>
        <h1>Solutions</h1>
      </div>
      <Tabs ref={tabsRef}>
        <Button
          ref={(el) => (buttonRef.current[0] = el)}
          active={tab === 'design'}
          onClick={(e) => animateComponent(e, 'design')}
        >
          Design
          <Line ref={activeNavRef} />
        </Button>
        <Button
          ref={(el) => (buttonRef.current[1] = el)}
          active={tab === 'development'}
          onClick={(e) => animateComponent(e, 'development')}
        >
          Development
        </Button>
        <Button
          ref={(el) => (buttonRef.current[2] = el)}
          active={tab === 'marketing'}
          onClick={(e) => animateComponent(e, 'marketing')}
        >
          Marketing
        </Button>
      </Tabs>
      {tab === 'design' && (
        <Component ref={componentRef}>
          <Design />
        </Component>
      )}
      {tab === 'development' && (
        <Component ref={componentRef}>
          <Development />
        </Component>
      )}
      {tab === 'marketing' && (
        <Component ref={componentRef}>
          <Marketing />
        </Component>
      )}
    </div>
  );
};

export default Solutions;
