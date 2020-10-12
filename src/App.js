import React, {Component} from 'react';
import TreeView from 'react-simple-jstree';
import {Row,Col,Form,Button} from 'react-bootstrap';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DeleteIcon from '@material-ui/icons/Delete';
import StopIcon from '@material-ui/icons/Stop';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';






 
class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      data: {
        core: {
          data: [
            {
              text: 'Root node', children: [
              {text: 'Child node 1'},
              {text: 'Child node 2'}
              ]
            }
          ]
        }
      },
      currentnode:'',
      selected: [],
      childname: '',
      users: [],
      
    };
  }


  handleClick() {
    const newData = this.state.data.core.data[0].children.slice();
    newData.push({text: this.state.childname});
    
    this.setState({ currentnode: newData }) 
    
    this.setState({ childname: '' })
    
    this.setState({
      users: [...this.state.users, <Row>
	<Col lg="2">
	<OpenWithIcon />
	<ArrowBackIcon />
	<ArrowForwardIcon />
	<DeleteIcon />

	</Col>
		

	<Col lg="2">

		<StopIcon fontSize="large" />
	</Col>

	<Col lg="8">

		    <form>
        <input
          type="text"
          value={this.state.childname}
          onChange={(e) => this.handleChange1(e)}
        />
      </form>


	</Col>

	</Row>
]
    })

    this.setState({
      data: {
        core: {
          data: [
            {
              text: 'Root node', children: newData
            }
          ]
        }
      }
    });
  }



  handleClick2() {
    const newData1 = this.state.data.core.data[0].children.slice();
    newData1.push({text: this.state.childname});
    

    this.setState({
      data: {
        core: {
          data: [
            {
              text: this.state.currentnode, children: newData1
            }
          ]
        }
      }
    });
  }


 
  handleChange(e, data) {
    this.setState({
      selected: data.selected,
    })
  }

 handleChange1(event) {
    this.setState({ childname: event.target.value })
  }
 
  render() {
    const data = this.state.data;
  


 
    return (
      <div style={{Width:"80%",marginLeft:"10%",marginTop:"5%"}}>
      
	<div>
	<h3>MATHEMATICS</h3>
	<hr></hr>
	
	<Row>
	<Col lg="2">
		<p>Actions <br></br>
		Move,ident <br></br>
		outdent, delete </p>
	</Col>
		

	<Col lg="8">

		<p>Standard <br></br>
		
		The text of the standard </p>
	</Col>

	</Row>
	<hr></hr>

		{this.state.users}

	<Row>
	<Col lg="2">
	<OpenWithIcon />
	<ArrowBackIcon />
	<ArrowForwardIcon onClick={() => this.handleClick2()} />
	<DeleteIcon />
	

	</Col>
	<Col lg="1">
			<StopIcon fontSize="large" />

	
	</Col>
		


	<Col lg="8">

		    <form>
        <input
          type="text"
	  size="50"
          value={this.state.childname}
          onChange={(e) => this.handleChange1(e)}
        />
      </form>


	</Col>

	</Row>

  		


	</div>
	<br></br>

	        <Button Style={{ Width:"100%",Display:"block"}} onClick={() => this.handleClick()}> <AddCircleOutlineIcon /> Add Standard</Button>



      </div>
    );
  }
}

export default App;
