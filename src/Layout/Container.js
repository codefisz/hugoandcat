/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Container( {
  style = {},
  className='',
  children } ) {

	const newStyle = {
    boxSizing: 'border-box',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
    padding: '25px 0.375rem',
    width: '100%',
    height: '100%',
    alignItems: 'end',
    justifyContent: 'center',
    borderRadius: 'inherit'
	};

	const containerStyle = css( { ...newStyle, ...style } );

	return <div css={ containerStyle } { ...{ className, children } } />;
}
