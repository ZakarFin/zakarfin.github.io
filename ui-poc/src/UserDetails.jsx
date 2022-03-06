
function UserDetails({isLogged = false, login}) {
    if (isLogged) {
        return (<div>
            Etunimi<br />
            Sukunimi<br />
            <a href="#" onClick={() => login(false)}>Kirjaudu ulos</a><br /><br />
          </div>);
        
    }
    return (<div>
        <input placeholder="tunnus"/><br />
        <input placeholder="passu"/><br />
        <a href="#" onClick={() => login(true)}>Kirjaudu sisään</a><br /><br />
      </div>);
};

export default UserDetails;
