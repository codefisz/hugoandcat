/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Grid( {
  style,
  width = '100%',
  columns=1,
  columnWidth='1fr',
  columnGap='0.5rem',
  rows=1,
  rowHeight='auto',
  rowGap='0.5rem',
  ...rest} ) {

	const newStyle = {
		display: 'grid',
    width,
		gridTemplateColumns: `repeat( ${ columns }, ${ columnWidth } )`,
		gridTemplateRows: `repeat( ${ rows }, ${ rowHeight } )`,
    justifyContent: 'center',
		columnGap,
		rowGap,
	};

	const gridStyle = css( { ...newStyle, ...style } );

	return <div data-testid={'grid'} css={ gridStyle } { ...rest } />;
}
