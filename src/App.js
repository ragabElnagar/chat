import './App.css';
import AppRoot from './app-root/AppRoot';
import Auth from './auth/Auth';
import LoginWithGoogle from './auth/LoginWithGoogle';
import ChatApp from './chat-app/ChatApp';
import CRUD from './crud/CRUD';
import UploadImage from './uploadImage/UploadImage';

function App() {
  return (
    <div className="App">
     {/* <CRUD/> */}
     {/* <Auth/> */}
     {/* <LoginWithGoogle/> */}
     {/* <AppRoot/> */}
     {/* <UploadImage/> */}
     <ChatApp/>
    </div>
  );
}

export default App;
