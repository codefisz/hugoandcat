/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Column( {
  style = {},
  rows= 'auto-fit',
  rowHeight= 'max-content',
  rowHeightMin = '50px',
  className='',
  children } ) {

	const newStyle = {
		marginLeft: 'auto',
		marginRight: 'auto',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    ...style,
    display: 'grid',
    gridAutoRows: `minmax(${ rowHeightMin },${ rowHeight })`,
    gridTemplateRows: `repeat( ${ rows }, minmax(${ rowHeightMin }, ${ rowHeight }))`
  };

	const containerStyle = css( newStyle );

	return <div css={ containerStyle } { ...{ className, children } } />;
}
