import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

export default props =>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Category</TableHeaderColumn>
        <TableHeaderColumn>Amount</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Project A</TableRowColumn>
        <TableRowColumn><b>€2310.10</b></TableRowColumn>
        <TableRowColumn>10/10/2010</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Project B</TableRowColumn>
        <TableRowColumn><b>$1029</b></TableRowColumn>
        <TableRowColumn>15/10/2010</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Worker Steven Sanders</TableRowColumn>
        <TableRowColumn><b>€100</b></TableRowColumn>
        <TableRowColumn>18/10/2010</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Worker John Smith</TableRowColumn>
        <TableRowColumn><b>€1201</b></TableRowColumn>
        <TableRowColumn>28/10/2010</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
