import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  content: {
    display: 'flex',
    flexDirection: 'row'
  },
  drawer: {
    minWidth: '200px',
    paddingRight: '20px'
  }
}

export default props =>
  <div style={styles.main}>
    <AppBar
      title='Dashboard'
      iconElementRight={<FlatButton label='Save' />}
    />
    <div style={styles.content}>
      <List style={styles.drawer}>
        <ListItem primaryText='Receipts' leftIcon={<ContentInbox />} />
        <ListItem primaryText='Starred' leftIcon={<ActionGrade />} />
        <ListItem primaryText='Drafts' leftIcon={<ContentDrafts />} />
      </List>
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
    </div>
  </div>
