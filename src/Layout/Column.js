/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Grid from './Grid'

export default function Column( {
  style = {},
  rows=1,
  rowHeight='1fr',
  className='',
  children } ) {

	const newStyle = {
		marginLeft: 'auto',
		marginRight: 'auto',
    width: '100%',
    height: '100%',
    alignItems: 'end',
    justifyContent: 'center',
    ...style,
    display: 'grid',
    gridTemplateRows: `repeat( ${ rows }, ${ rowHeight } )`
  };

	const containerStyle = css( newStyle );

	return <Grid css={ containerStyle } { ...{ className, children } } columns={1} />;
}
