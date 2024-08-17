
import './App.css';
import Player from './component/Player';
function App() {
  return (
    <div className="App">
      <div className="playerDiv">
        <img src='./images/virat kohli.webp' alt=''></img>
        <h2>name:ViratKohli</h2>
        <h3>team:RCB</h3>
        <h3>role:Batter</h3>
      </div>
      <div className="playerDiv">
        <img src='./images/dhoni.webp' alt=''></img>
        <h2>name:MS Dhoni</h2>
        <h3>team:CSK</h3>
        <h3>role:wk-Batter</h3>
      </div>
   <Player name="RohitSharma" team="RCB" role="Batsman" pic="./images/rohit.webp"></Player>
   <Player name="bumrah" team="MI" role="Bowler" pic="./images/bumrah.webp" ></Player>
   <Player name="duplessis" team="RCB" role="Batsman" pic="./images/duplesis.webp"></Player>
   <Player name="jaddu" team="CSK" role="AllRounder" pic="./images/jaddu.webp"></Player>
   <Player name="Rahul" team="LSG" role="Batsman" pic="./images/rahul.webp"></Player>
   <Player name="Stoinis" team="LSG" role="Batsman" pic="./images/stoinis.webp"></Player>
   <Player name="PatCummins" team="SRH" role="Bowler" pic="./images/pat cummins.webp"></Player>
    </div>
  );
}

export default App;
