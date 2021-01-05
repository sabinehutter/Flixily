function SwipingCard () {
  // const FlippyStyle = {
  //   width: '50%',
  //   height: '85%',
  //   textAlign: 'center',
  //   color: '#FFF',
  //   fontFamily: 'sans-serif',
  //   fontSize: '30px',
  //   justifyContent: 'center',
  //   display: 'inline-block'
  // }
  
  
  // const DefaultCardContents = ({ children }) => (
  //   <React.Fragment>
  //     <FrontSide
  //       style={{
  //         backgroundColor: '#41669d',
  //         display: 'flex',
  //         alignItems: 'center',
  //         flexDirection: 'column', 
  //         top : '10px'
  //       }}
  //     >
  //       <img
  //         src={Rick}
  //         style={{ maxWidth: '100%', maxHeight: '100%', paddingTop: "40px" }}
  //       />
  //       Godfather
  //       <span 
  //         style={{
  //           fontSize:'12px',
  //           position: 'absolute',
  //           bottom: '10px',
  //           width: '100%',
  //           top: "10px"
  //         }}>
  //         {children}<br />
  //         (FRONT SIDE)
  //       </span>
  //     </FrontSide>
  //     <BackSide
  //       style={{
  //         backgroundColor: '#175852',
  //         display: 'flex',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         flexDirection: 'column'
  //       }}>
  //       ROCKS
  //       <span 
  //         style={{
  //           fontSize:'12px',
  //           position: 'absolute',
  //           bottom: '10px',
  //           width: '100%'
  //         }}>
  //         {children}<br />
  //         (BACK SIDE)
  //       </span>
  //     </BackSide>
  //   </React.Fragment>);
  
  // class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isFlipped: false
  //     };
  
  //     function handleClick(e){
  //       e.preventDefault();
  //       console.log('The link was clicked.');
  //     }
  
  //     setInterval(() => {
  //       this.setState({
  //         isFlipped: !this.state.isFlipped
  //       });
  //     }, 3000);
  //   }
  
    
      return (
        <div>
          "Swiping card here"
        </div>
        // <div className="App">
        //     <div style = {{display: "inline-block"}}>
        //       {/* <a onClick={ handleClick}> */}
        //     <img src={Like} style = {{width: "150px", height: "150px", display: "inline-block", paddingBottom: "200px", marginRight: "40px"}} alt="Logo" />
        //     {/* </a> */}
        //     </div>
        //       <Flippy
        //         ref={(r) => this.flippyHorizontal = r}
        //         flipOnClick={false}
        //         style={FlippyStyle}
        //       >
        //       <DefaultCardContents>
        //         I flip horizontally with an event<br />
        //         <button type="button" onClick={() => this.flippyHorizontal.toggle()}>See Movie Info!</button>
        //       </DefaultCardContents>
        //     </Flippy>
        //     <div style = {{display: "inline-block"}}>
        //       {/* <a onClick={handleClick}> */}
        //     <img src={Dislike} style = {{width: "150px", height: "150px", display: "inline-block", paddingBottom: "200px", marginLeft: "40px"}} alt="Logo" />
        //     {/* </a> */}
        //     </div>
        //   </div>
      );
    };

export default SwipingCard;