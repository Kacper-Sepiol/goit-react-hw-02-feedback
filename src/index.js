import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Feedback } from './components/Feedback';

const App = () => <Feedback></Feedback>;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
