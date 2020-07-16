import React from 'react'

import Global from './style/global'
import Banner from './components/Banner'

import Navigator from './components/navigator'

function App() {
	return (
		<React.Fragment>
			<Global />			
			<Navigator/>
			<Banner />
		</React.Fragment>
	)
}

export default App;
