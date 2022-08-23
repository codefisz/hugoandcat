import React from 'react'
import SunnyIcon from './SunnyIcon'
import FewClouds from './FewClouds'
import ScatteredClouds from './ScatteredClouds'
import BrokenClouds from './BrokenClouds'
import ShowerRain from './ShowerRain'
import Snow from './Snow'
import Mist from './Mist'


export function IconLoader () {
  this.get = function(key){
    return 'function' === typeof this[key]? this[key]() : this.default()
  };
  this.default=function(){
    return <BrokenClouds/>
  };
  this.clearsky= function(){
    return <SunnyIcon/>
  };
  this.fewclouds=function (){
    return <FewClouds/>
  };
  this.scatteredclouds= function (){
    return <ScatteredClouds/>
  };
  this.brokenclouds= function (){
    return <BrokenClouds/>
  };
  this.showerrain= function (){
    return <ShowerRain/>
  };
  this.rain= function (){
    return <ShowerRain/>
  };
  this.thunderstorm= function (){
    return <ShowerRain/>
  };
  this.snow= function (){
    return <Snow/>
  };
  this.mist= function (){
    return <Mist/>
  }
}