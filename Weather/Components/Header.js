import React from 'react'
import { Appbar, Text} from 'react-native-paper';

function Header() {

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={{backgroundColor:'#57abff', height:'5%'}}>
    
      <Appbar.Content title={<Text style={{fontSize:30, fontWeight:'bold'}}> Weather Forecast </Text>} style={{width:'100%'}}/>
      
    </Appbar.Header>
  );

}

export default Header