import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProfilePage from './profile/ProfilePage';
import HomePage from './home/HomePage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />}/>
					<Route path='/profile/*' element={<ProfilePage />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
