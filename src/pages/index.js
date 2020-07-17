import React from 'react'

import Global from './style/global'
import Banner from './components/Banner'
import Navigator from './components/navigator'
import Sociais from './components/sociais'

function App() {
	return (
		<React.Fragment>
			<Global />			
			<Navigator/>
			<Banner />
			<Sociais />
		</React.Fragment>
	)
}

export default App;
