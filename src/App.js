import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
function App() {

  if (!localStorage.getItem('username')) return <LoginForm />;

  return (

    <ChatEngine 
      height="100vh"
      projectID="4de500a0-dde6-4f17-8575-315b0fb81671"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    >
    
    </ChatEngine>
  );
}

export default App;
