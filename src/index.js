import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Feedback } from './components/Feedback';
import Statistics from 'components/Statistics';

const App = () => <Feedback></Feedback>;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
