import Slide from './Slide';
import { Component } from 'react';
import Style from '../../styles/SlideBar.module.css';


export default class slideBar extends Component{  

    constructor(props) {
        super(props);
        this.handleClickLeft = this.handleClickLeft.bind(this);
        this.handleClickRight = this.handleClickRight.bind(this);
        this.state = { numberOfSlides: 0, slideNumber: 0, timer: ' '}
      } 
          handleClickRight(){
        this.slides.forEach((slides) =>{
            slides.classList.remove(Style.active);
        })
        this.slideIcon.forEach((slideIcon) =>{
            slideIcon.classList.remove(Style.active);
        })
        this.setState({ slideNumber: this.state.slideNumber + 1})
        let slideNumber = this.state.slideNumber + 1;
        if(slideNumber >= this.state.numberOfSlides){
            slideNumber = 0;
            this.setState({ slideNumber: 0});
        }
        this.slides[slideNumber].classList.add(Style.active);
        this.slideIcon[slideNumber].classList.add(Style.active);
      }
      handleClickLeft(){
        this.slides.forEach((slides) =>{
            slides.classList.remove(Style.active);
        })
        this.slideIcon.forEach((slideIcon) =>{
            slideIcon.classList.remove(Style.active);
        })
        this.setState({ slideNumber: this.state.slideNumber - 1})
        let slideNumber = this.state.slideNumber - 1;

        if(slideNumber < 0 ){
            slideNumber = this.slides.length - 1;
            this.setState({ slideNumber: 3});
        }
        this.slides[slideNumber].classList.add(Style.active);
        this.slideIcon[slideNumber].classList.add(Style.active);
      }

    componentDidMount() {
        this.slides = document.querySelectorAll(`.${Style.slide}`);
        this.slideIcon = document.querySelectorAll(`.${Style.slideIcon}`);
        this.setState({ numberOfSlides: this.slides.length });
        this.timerID = setInterval(()=>{
            this.slides.forEach((slides) =>{
                slides.classList.remove(Style.active);
            })
    
            this.slideIcon.forEach((slideIcon) =>{
                slideIcon.classList.remove(Style.active);
            })
    
    
            this.setState({ slideNumber: this.state.slideNumber + 1})
            let slideNumber = this.state.slideNumber + 1;
    
            if(slideNumber >= this.state.numberOfSlides){
                slideNumber = 0;
                this.setState({ slideNumber: 0});
            }

            this.slides[slideNumber].classList.add(Style.active);
            this.slideIcon[slideNumber].classList.add(Style.active);
        }, 4000)
        this.setState({ timer: this.timerID });
      } 

    render(){     
        return <Slide handleClickLeft={this.handleClickLeft} handleClickRight={this.handleClickRight}/>
}
}
