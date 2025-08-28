// frontend/src/pages/LanguageSelect.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageSelect = () => {
  const navigate = useNavigate();
  const [fromLang, setFromLang] = useState('');
  const [toLang, setToLang] = useState('');

  const languages = ['Tamil', 'English', 'Spanish', 'French'];

  const handleStartSession = () => {
    if (!fromLang || !toLang) {
      alert('Please select both languages');
      return;
    }
    if (fromLang === toLang) {
      alert('Choose different languages for practice');
      return;
    }
    // Navigate to the actual practice page with selected languages
    navigate('/practice-session', { state: { fromLang, toLang } });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Select Languages for Practice</h2>

      <div style={{ marginTop: '20px' }}>
        <select value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
          <option value="">From Language</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>

        <span style={{ margin: '0 10px' }}>➡</span>

        <select value={toLang} onChange={(e) => setToLang(e.target.value)}>
          <option value="">To Language</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: '30px' }}>
        <button 
          onClick={handleStartSession} 
          style={{ padding: '10px 25px', cursor: 'pointer', fontSize: '16px' }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default LanguageSelect;
