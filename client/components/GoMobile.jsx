import React, {Component} from 'react';

//styled-components//
import HeaderText from '../styles/HeaderText';
import HeaderIcon from '../styles/HeaderIcon';

const styles = {
  borderRadius: '5px'
}

class GoMobile extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h3>
        <HeaderText>

          <div className="headerText" style={{paddingTop:'5px'}}>
            <span>
              Go mobile
            </span>
          </div>
        </HeaderText>
      </h3>

      <div>
        {' '}
        <img 
        src="https://i.imgur.com/ztwmJxF.png" 
        alt="mango"
        width={135}
        margin={5}
        style={styles}
        />
        {' '}
        <img 
        src="https://i.imgur.com/PSfNE3W.png" 
        alt="gogo"
        width={135}
        height={48.93}
        style={styles}
        />
      </div>
        
    </div>
      
    )
  }
}

export default GoMobile;