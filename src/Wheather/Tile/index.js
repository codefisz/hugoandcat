import style from './Tile.module.scss'
import { getDay, toFahrenheit } from '../utils'
import Container from '../../Layout/Container'
import {IconLoader} from '../../IconLoader'
import Column from '../../Layout/Column'


export default function Tile({item}){
  const loader = new IconLoader()
  return <div >
    <Container style={{position: 'relative'}} className={`${style['Tile--default']} ${style['Tile--'+ item.weather[0].description.toLowerCase().replace(/\s/g, "-")]}`}>
      <Column >
        <div className={style['Tile__day']}>{getDay(item.dt_txt)}</div>
        <div>{ loader.get(item.weather[0].description.toLowerCase().replace(/\s/g, ""))}</div>
        <div className={`${style['Tile__desc']}  ${style['no-mobile']}`}>{item.weather[0].description}</div>
        <div className={style['Tile__main']}>{Math.round(item.main.temp)}<span>&#8451;</span></div>
        <div className={`${style['Tile__secondary']} ${style['no-mobile']}`}>{toFahrenheit( item.main.temp)}<span>&#8457;</span></div>
        <div className={`${style['Tile__shadow']} ${style['no-mobile']}`}>{ loader.get(item.weather[0].description.toLowerCase().replace(/\s/g, ""))}</div>
      </Column>
    </Container>
  </div>
}