function Demoboot() {
  return (
    <div>
      <div className="alert alert-primary" role="alert" style={{'textAlign':'center', 'fontSize':'20px'}}>Get Alert</div>
      <div className="button" style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center', 'padding':'20px', 'gap':'10px'}}>
       <button type="button" class="btn btn-info">Info</button>
       <button className="btn btn-danger">Danger</button>
       <button type="button" class="btn btn-warning">Warning</button>
       
      </div>

    </div>
  );
}

export default Demoboot;
