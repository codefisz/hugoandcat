import Grid from '../Layout/Grid'
import Container from '../Layout/Container'
import { useEffect } from 'react'
import Tile from './Tile'
import { useWeather } from './context/provider'

export default function Weather(){

  const [state, setState] = useWeather()


  const innerGrid = {
    '&>:first-child': {
      borderRadius: '5px 0 0 5px',
    },
    '&>:last-child': {
      borderRadius: '0 5px 5px 0',
    },
  }

  useEffect(()=>{
    if(!state.isLoading){
      setState.find()
    }
  }, [])



  return <Grid columns={1} rows={2}>
    <Container style={{gridColumn: '1 / -1', display: 'flex', flexDirection:'row'}}>
      <input value={state.city} onChange={setState.change}/>
      <button onClick={setState.find}>Find</button>
    </Container>
    <Grid columns={4} rows={1} style={innerGrid}>
      {state.list ? state.list.map((item,index)=><Tile key={'weather-tile'+index} item={item}/>) : null}
    </Grid>
  </Grid>
}