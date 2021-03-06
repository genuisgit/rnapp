import React from 'react';
import {  View } from 'react-native';
import { List, ListItem,Text } from  'react-native-elements';

// import { StackNavigator } from 'react-navigation';



export class HomeUi extends React.Component{
constructor(props) {
    super(props);
   
   
    // this.state = { loading: true };
    // fetchSchedules({faculty:'BME',year:'II',day:'1'},(datay)=>this.setState({data:datay,loading:false}));
  }
	componentDidMount(){
  		this.props.fetch(this.props.meta);
  		// this.props.get(data);
  	}
	render(){
		let data = this.props.data;
			return(
				<View>
					<View>
						
						<Text h4 style={{textAlign:'center'}}> {this.props.meta.department} {this.props.meta.year}</Text>
					</View>
					<View>
						{this.props.loaded == true ?
							(<List>
							{ data.map(
									(l,i)=> 
									<ListItem key={i} title={l.subject} subtitle={l.from} />

								)}
							</List>) : <Text>Not Loaded!!</Text>}
						</View>
					</View>
					);
		}
}


