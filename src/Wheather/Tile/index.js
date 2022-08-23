import style from './Tile.module.scss'
import { getDay, toFahrenheit } from '../utils'
import Container from '../../Layout/Container'
import {IconLoader} from '../../IconLoader'
import Column from '../../Layout/Column'


export default function Tile({item}){
  const loader = new IconLoader()
  return <div >
    <Container style={{position: 'relative'}} className={`${style['Tile--default']} ${style['Tile--'+ item.weather[0].description.toLowerCase().replace(/\s/g, "-")]}`}>
      <Column rows={1} rowHeight={'auto 2fr auto 1fr auto 2fr'}>
        <div className={style['Tile__day']}>{getDay(item.dt_txt)}</div>
        <div>{ loader.get(item.weather[0].description.toLowerCase().replace(/\s/g, ""))}</div>
        <div className={style['Tile__desc']}>{item.weather[0].description}</div>
        <div className={style['Tile__main']}>{Math.round(item.main.temp)}<span>&#8451;</span></div>
        <div className={style['Tile__secondary']}>{toFahrenheit( item.main.temp)}<span>&#8457;</span></div>
        <div className={style['Tile__shadow']}>{ loader.get(item.weather[0].description.toLowerCase().replace(/\s/g, ""))}</div>
      </Column>
    </Container>
  </div>
}