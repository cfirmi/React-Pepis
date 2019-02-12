import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './MobileDropNav';

export default class MobileToggleButton extends Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: this.props.color? this.props.color:'white',
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }
  
  handleClick(){
    if(true) {
      this.setState({open:!this.state.open});
    }
  }
  render() {
    const styles = {
      container: {
        marginTop: '5px',
        marginLeft: '5px',
        height: '32px',
        width: '32px',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '4px',
      },
      line: {
        height: '2px',
        width: '20px',
        background: this.state.color,
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: this.state.open ? 'rotate(45deg)':'none',
        transformOrigin: 'top left',
        marginBottom: '6px',
      },
      // lineMiddle: {
      //   opacity: this.state.open ? 0: 1,
      //   transform: this.state.open ? 'translateX(-16px)':'none',
      // },
      lineBottom: {
        transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
        transformOrigin: 'top left',
        marginTop: '6px',
      },       
    }
    return (
      <Mutation mutation={TOGGLE_CART_MUTATION}>
        {(toggleCart) => (
          <div style={styles.container} onClick={toggleCart}>
            <div style={{...styles.line,...styles.lineTop}}/>
            <div style={{...styles.line,...styles.lineBottom}}/>
          </div>
        )}
      </Mutation>
    )
  }
}
