import React from 'react'
import { Head } from '../components/Head';
import { Second } from '../components/Second';
import Third from '../components/Third';
import ReadMore from '../components/ReadMore';
import { PlayMoment } from '../components/PlayMoment';
import RepeatWorks from '../components/RepeatWorks';
import { CustomerMoment } from '../components/CustomerMoment';

export const Home = () => {
  return (
    <div>
          <Head/>
          <Second/>
          <Third/>
          <PlayMoment/>
          <RepeatWorks/>
          <ReadMore/>
          <CustomerMoment/>
    </div>
  )
}
