// // frontend/src/pages/PracticeSession.js
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const PracticeSession = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { fromLang, toLang } = location.state || {}; // get languages from previous page

//   const [userInput, setUserInput] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const handleSend = () => {
//     if (!userInput.trim()) return;

//     // Add user's message to chat
//     setChatHistory((prev) => [...prev, { sender: 'user', text: userInput }]);

//     // Simulate AI response (for now)
//     const aiResponse = `(${toLang}) You said: ${userInput}`;
//     setChatHistory((prev) => [...prev, { sender: 'user', text: userInput }, { sender: 'ai', text: aiResponse }]);

//     setUserInput('');
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '30px' }}>
//       <h2>Practice Session</h2>
//       <p>From: <b>{fromLang}</b> → To: <b>{toLang}</b></p>

//       <div 
//         style={{ 
//           border: '1px solid #ccc', 
//           width: '60%', 
//           margin: '20px auto', 
//           padding: '10px', 
//           minHeight: '300px', 
//           textAlign: 'left', 
//           overflowY: 'scroll' 
//         }}
//       >
//         {chatHistory.map((chat, index) => (
//           <div key={index} style={{ margin: '10px 0', color: chat.sender === 'ai' ? 'green' : 'blue' }}>
//             <b>{chat.sender === 'ai' ? 'AI' : 'You'}:</b> {chat.text}
//           </div>
//         ))}
//       </div>

//       <input
//         type="text"
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//         placeholder={`Type in ${fromLang}...`}
//         style={{ width: '50%', padding: '10px' }}
//       />
//       <button 
//         onClick={handleSend} 
//         style={{ padding: '10px 20px', marginLeft: '10px', cursor: 'pointer' }}
//       >
//         Send
//       </button>

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={() => navigate('/dashboard')} style={{ padding: '10px 20px', cursor: 'pointer' }}>
//           Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PracticeSession;
// import React, { useState, useRef } from "react";

// const PracticeSession = () => {
//   const [userInput, setUserInput] = useState("");
//   const [translationVisible, setTranslationVisible] = useState(false);
//   const [attachment, setAttachment] = useState(null);
//   const [recording, setRecording] = useState(false);
//   const [audioURL, setAudioURL] = useState(null);
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   const sentence = "Hello! How are you today?";

//   // Text-to-Speech
//   const speakText = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
//   };

//   // Start recording
//   const startRecording = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorderRef.current = new MediaRecorder(stream);
//     audioChunksRef.current = [];

//     mediaRecorderRef.current.ondataavailable = (e) => {
//       audioChunksRef.current.push(e.data);
//     };

//     mediaRecorderRef.current.onstop = () => {
//       const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
//       setAudioURL(URL.createObjectURL(blob));
//     };

//     mediaRecorderRef.current.start();
//     setRecording(true);
//   };

//   // Stop recording
//   const stopRecording = () => {
//     mediaRecorderRef.current.stop();
//     setRecording(false);
//   };

//   // Dummy translation
//   const translateText = (text) => text.split("").reverse().join("");

//   return (
//     <div style={{ maxWidth: "500px", margin: "0 auto", fontFamily: "Arial" }}>
//       {/* AI Sentence */}
//       <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "10px", marginBottom: "10px" }}>
//         {sentence}
//       </div>

//       {/* Controls */}
//       <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
//         <button onClick={() => speakText(sentence)}>🔊 Speak</button>
//         <button onClick={() => setTranslationVisible(!translationVisible)}>🌐 Translate</button>
//         <input type="file" onChange={(e) => setAttachment(e.target.files[0])} />
//       </div>

//       {/* Translation */}
//       {translationVisible && (
//         <div style={{ padding: "10px", border: "1px dashed #666", borderRadius: "10px", marginBottom: "10px" }}>
//           {translateText(sentence)}
//         </div>
//       )}

//       {/* Text Input */}
//       <input
//         type="text"
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//         placeholder="Type your answer..."
//         style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//       />

//       {/* Recording */}
//       <div style={{ marginBottom: "10px" }}>
//         <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
//           <button onClick={startRecording} disabled={recording}>🎤 Start Recording</button>
//           <button onClick={stopRecording} disabled={!recording}>⏹ Stop Recording</button>
//         </div>
//         {audioURL && <audio src={audioURL} controls />}
//       </div>

//       {/* Submit Button */}
//       <button
//         onClick={() => alert(`You submitted: ${userInput}${attachment ? ` with file: ${attachment.name}` : ""}`)}
//         style={{ width: "100%", padding: "10px", borderRadius: "5px", backgroundColor: "#4CAF50", color: "white", border: "none" }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default PracticeSession;
// import React, { useState, useRef } from "react";

// const PracticeSession = () => {
//   const [userInput, setUserInput] = useState("");
//   const [translationVisible, setTranslationVisible] = useState(false);
//   const [translatedText, setTranslatedText] = useState("");
//   const [attachment, setAttachment] = useState(null);
//   const [recording, setRecording] = useState(false);
//   const [audioURL, setAudioURL] = useState(null);
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   const sentence = "Hello! How are you today?";

//   // Text-to-Speech
//   const speakText = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
//   };

//   // Translation using LibreTranslate API
//   const translateText = async (text, targetLang = "hi") => {
//     try {
//       const res = await fetch("https://libretranslate.de/translate", {
//         method: "POST",
//         body: JSON.stringify({
//           q: text,
//           source: "en", // AI sentence language
//           target: targetLang, // User's native language, e.g., 'hi' for Hindi
//           format: "text",
//         }),
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();
//       setTranslatedText(data.translatedText);
//       setTranslationVisible(true);
//     } catch (err) {
//       console.error("Translation error:", err);
//     }
//   };

//   // Start recording
//   const startRecording = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorderRef.current = new MediaRecorder(stream);
//     audioChunksRef.current = [];

//     mediaRecorderRef.current.ondataavailable = (e) => {
//       audioChunksRef.current.push(e.data);
//     };

//     mediaRecorderRef.current.onstop = () => {
//       const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
//       setAudioURL(URL.createObjectURL(blob));
//     };

//     mediaRecorderRef.current.start();
//     setRecording(true);
//   };

//   // Stop recording
//   const stopRecording = () => {
//     mediaRecorderRef.current.stop();
//     setRecording(false);
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "0 auto", fontFamily: "Arial" }}>
//       {/* AI Sentence */}
//       <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "10px", marginBottom: "10px" }}>
//         {sentence}
//       </div>

//       {/* Controls */}
//       <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
//         <button onClick={() => speakText(sentence)}>🔊 Speak</button>
//         <button onClick={() => translateText(sentence, "hi")}>🌐 Translate</button>
//         <input type="file" onChange={(e) => setAttachment(e.target.files[0])} />
//       </div>

//       {/* Translation */}
//       {translationVisible && (
//         <div style={{ padding: "10px", border: "1px dashed #666", borderRadius: "10px", marginBottom: "10px" }}>
//           {translatedText}
//         </div>
//       )}

//       {/* Text Input */}
//       <input
//         type="text"
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//         placeholder="Type your answer..."
//         style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//       />

//       {/* Recording */}
//       <div style={{ marginBottom: "10px" }}>
//         <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
//           <button onClick={startRecording} disabled={recording}>🎤 Start Recording</button>
//           <button onClick={stopRecording} disabled={!recording}>⏹ Stop Recording</button>
//         </div>
//         {audioURL && <audio src={audioURL} controls />}
//       </div>

//       {/* Submit Button */}
//       <button
//         onClick={() => alert(`You submitted: ${userInput}${attachment ? ` with file: ${attachment.name}` : ""}`)}
//         style={{ width: "100%", padding: "10px", borderRadius: "5px", backgroundColor: "#4CAF50", color: "white", border: "none" }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default PracticeSession;


import React, { useState, useRef } from "react";

const PracticeSession = () => {
  const [translationVisible, setTranslationVisible] = useState(false);
  const [translatedText, setTranslatedText] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("hi"); // default: Hindi

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const sentence = "Hello! How are you today?"; // AI sentence

  // Text-to-Speech
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  // Translate AI sentence when Translate button is clicked
  const translateText = async (text, targetLang) => {
    try {
      const res = await fetch("http://localhost:5000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, target: targetLang }),
      });
      const data = await res.json();
      setTranslatedText(data.translatedText);
      setTranslationVisible(true); // only show translation when clicked
    } catch (err) {
      console.error("Translation error:", err);
    }
  };

  // Start recording user voice
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = (e) => {
      audioChunksRef.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      setAudioURL(URL.createObjectURL(blob));
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  // Stop recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", fontFamily: "Arial" }}>
      {/* AI Sentence */}
      <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "10px", marginBottom: "10px" }}>
        {sentence}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => speakText(sentence)}>🔊 Speak</button>
        <button onClick={() => translateText(sentence, selectedLanguage)}>🌐 Translate</button>
        <input type="file" onChange={(e) => setAttachment(e.target.files[0])} />
      </div>

      {/* Language selection */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          Select Language:{" "}
          <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="ta">Tamil</option>
          </select>
        </label>
      </div>

      {/* Translation */}
      {translationVisible && (
        <div style={{ padding: "10px", border: "1px dashed #666", borderRadius: "10px", marginBottom: "10px" }}>
          {translatedText}
        </div>
      )}

      {/* User text input */}
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your answer..."
        style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />

      {/* Voice recording */}
      <div style={{ marginBottom: "10px" }}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
          <button onClick={startRecording} disabled={recording}>🎤 Start Recording</button>
          <button onClick={stopRecording} disabled={!recording}>⏹ Stop Recording</button>
        </div>
        {audioURL && <audio src={audioURL} controls />}
      </div>

      {/* Submit Button */}
      <button
        onClick={() =>
          alert(`You submitted: ${userInput}${attachment ? ` with file: ${attachment.name}` : ""}`)
        }
        style={{ width: "100%", padding: "10px", borderRadius: "5px", backgroundColor: "#4CAF50", color: "white", border: "none" }}
      >
        Submit
      </button>
    </div>
  );
};

export default PracticeSession;
