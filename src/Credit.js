import React, {Component} from 'react'




class Credit extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            number : '',
            valid : ''
            
           
        }
    }
        handleChange = (e) =>{
            this.setState({
                name : e.target.value.toUpperCase()
      
            })
        }
        numberChange = (e) => {
            this.setState({
                number : e.target.value.match(/^[0-9]*$/)
            })
        }
        handleValid = (e) => {
            this.setState({
                valid : e.target.value.replace(/^(\d{2})/, '$1/')
            })  
        }
    render(){
       
        return(
            <div className='whole-card'>
            <div className='credit-card'>
            <div className='credit-card__logo'>
            <img src='https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png' alt='ss' height='60px'/> 
            </div>
            <div className='credit-card__number'>
               <p> {String(this.state.number).slice(0, 5).padEnd(16, '*')}</p>
            </div>
            <div className='credit-card__info'>
                <div className='credit-card__info_name'>
                    <div className='credit-card__info_label'>CARDHOLDER'S NAME</div>
                    <div>{this.state.name}</div>
                     </div>
                <div className='credit-card__info_expiry'>
                    <div className='credit-card__info_label'>VALID UP TO</div>
                    <div>{this.state.valid}</div>
                </div>
            </div>
        </div>
        <div className='input'>
            Name :<input maxLength='20' type='text' placeholder='NameChange' onChange={this.handleChange}/>
           Credit Card Number : <input maxLength='16' type='text' placeholder='NumberChange' value={this.state.number} onChange={this.numberChange}/>
           ValidThru : <input maxLength='4' type='text' placeholder='ValidChange' onChange={this.handleValid}/>
        </div>
        </div>
       
        )
    }
}




export default Credit;
















