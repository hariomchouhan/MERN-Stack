import { Header } from './Header';
import { Navbar } from './Navbar';
import { RegistrationForm } from './RegistrationForm';
import { ScoreBoard } from './ScoreBoard';
import { SignupForm } from './SignupForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
      {/* <SignupForm></SignupForm> */}
      <RegistrationForm></RegistrationForm>
      </header>
    </div>
  );
}

export default App;
