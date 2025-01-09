import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProfilePage from './profile/ProfilePage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/profile/*' element={<ProfilePage />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
