import Grid from '../Layout/Grid'
import Container from '../Layout/Container'
import Tile from './Tile'
import useWeather from './context/useWeather'

export default function Weather(){

  const [state, setState] = useWeather()

  const innerGrid = {
    '&>div:first-of-type': {
      borderRadius: '5px 0 0 5px',
    },
    '&>div:last-of-type': {
      borderRadius: '0 5px 5px 0',
    },
  }

  const columnsCount = state.list.length || 1

  return <Grid columns={1} rows={2} style={{justifyItems:'center'}}>
    <Container style={{gridColumn: '1 / -1', display: 'flex', flexDirection:'row'}}>
      <input type={'text'} value={state.city} onChange={setState.change}/>
      <button name={"find"} onClick={setState.find}>Find</button>
    </Container>
    <Grid columns={'auto-fit'} columnWidth={`minmax(100px, calc(95%/${columnsCount}))`} columnGap={'5px'} rows={1} style={innerGrid}>
      {state.list ? state.list.map((item,index)=><Tile key={'weather-tile'+index} item={item}/>) : null}
    </Grid>
  </Grid>
}