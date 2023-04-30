import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import {
  Listing,
  Summary,
  SummarySection,
  DataSection,
  Card,
  Addlisting,
  AddListingButton,
  ListingContainer,
  ListingFilter,
} from './style';
import './animations';

const ManagerDashboard = () => {
  const headingRef = useRef(null);
  const desRef = useRef(null);
  const devRef = useRef(null);
  const marRef = useRef(null);
  useEffect(() => {
    gsap
      .timeline()
      .from(headingRef.current, {
        duration: 0.5,
        autoAlpha: 0,
        ease: 'linear',
      })
      .from(desRef.current, {
        duration: 0.5,
        autoAlpha: 0,
        ease: 'linear',
      })
      .from(devRef.current, {
        duration: 0.5,
        autoAlpha: 0,
        ease: 'linear',
      })
      .from(marRef.current, {
        duration: 0.5,
        autoAlpha: 0,
        ease: 'linear',
      });
  }, []);
  return (
    <div className='dashboard-wrapper'>
      <SummarySection>
        <Summary ref={desRef}>
          <Card>
            <h1>136</h1>
            <span>Applications Reviwed.</span>
          </Card>
          <Card>
            <h1>96</h1>
            <span>Reviews pending.</span>
          </Card>
        </Summary>
        <ListingFilter>
          <h3>Filter</h3>
        </ListingFilter>
      </SummarySection>
      <DataSection>
        <div ref={headingRef} className='title'>
          <h3>Good Morning Don!</h3>
        </div>
        <Addlisting>
          <h5>View : </h5>
          <select>
            <option>Job Listings</option>
            <option>Applications</option>
          </select>
          <AddListingButton ref={devRef}>+ Add Listing</AddListingButton>
        </Addlisting>
        <ListingContainer>
          <Listing ref={devRef}>
            <b>SL-1029 : </b>
            Sales Executive | Jason Derulo -- Experience 2 years 9 months
          </Listing>
          <Listing ref={devRef}>
            <b>SL-1029 : </b>
            Sales Executive | Jason Derulo -- Experience 2 years 9 months
          </Listing>
          <Listing ref={devRef}>
            <b>SL-1029 : </b>
            Sales Executive | Jason Derulo -- Experience 2 years 9 months
          </Listing>
          <Listing ref={devRef}>
            <b>SL-1029 : </b>
            Sales Executive | Jason Derulo -- Experience 2 years 9 months
          </Listing>
        </ListingContainer>
      </DataSection>
    </div>
  );
};

export default ManagerDashboard;
