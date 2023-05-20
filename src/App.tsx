import './App.css';
import Navbars from './components/Navbar/Navbar';
import UrlShortner from './components/UrlShortner/UrlShortner';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navbars />}>
						<Route index />
						<Route path="/url-shortner" element={<UrlShortner />} />
						<Route path="contact" />
						<Route path="*" />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
