import { render, screen } from "@testing-library/react";
import Grid from '../../Layout/Grid'

describe("Grid", () => {
  it("render multi column layout for columns prop", () => {
    const columns = 2
    const colWidth = '2fr auto'
    render(<Grid columns={columns} columnWidth={colWidth}/>);
    expect(screen.queryByTestId('grid')).toHaveStyle(`grid-template-columns: repeat( ${columns}, ${colWidth} )`);
  });

  it("render grid column layout for columns and rows prop", () => {
    const columns = 7
    const colWidth = 'minmax(50px, calc(100%/7))'
    const rows = 2
    const rowHeight = 'auto'
    render(<Grid columns={columns} rows={rows} columnWidth={colWidth} rowHeight={rowHeight}/>);
    expect(screen.queryByTestId('grid')).toHaveStyle(`grid-template-columns: repeat( ${columns}, ${colWidth} )`);
    expect(screen.queryByTestId('grid')).toHaveStyle(`grid-template-rows: repeat( ${rows}, ${rowHeight} )`);
  });
});