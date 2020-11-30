import React, { Fragment } from 'react';

import Banner from '../Components/Banner/Banner';
import Covid from '../Components/Covid/Covid';
import LiveAnyWhere from '../Components/LiveAnyWhere/LiveAnyWhere';
import Places from '../Components/Places/Places';

import Experiences from '../Components/Experiences/Experiences';
import Gift from '../Components/Gift/Gift';
import JionUs from '../Components/JionUs/JionUs';

const Home = () => {
	return (
		<Fragment>
			<Covid />
			<Banner />
			<Places />
			<LiveAnyWhere />
			<Experiences />
			<Gift />
			<JionUs />
		</Fragment>
	);
};

export default Home;
