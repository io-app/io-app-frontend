import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import firebase from 'firebase'

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
  },
  floatingButton: {
    position: 'absolute',
    bottom: '40px',
    right: '40px'
  }
}

class Dashboard extends Component {
  toggleDrawer = () => this.setState({drawerOpen: !this.state.drawerOpen})

  state = {
    drawerOpen: true
  }

  render () {
    return (
      <div style={styles.main}>
        <AppBar
          title='Dashboard'
          iconElementRight={<FlatButton label='Logout' onClick={() => firebase.auth().signOut()} />}
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <div style={styles.content}>
          {this.state.drawerOpen
            ? <List style={styles.drawer}>
              <ListItem primaryText='Receipts' leftIcon={<ContentInbox />} />
              <ListItem primaryText='Starred' leftIcon={<ActionGrade />} />
              <ListItem primaryText='Drafts' leftIcon={<ContentDrafts />} />
            </List>
            : null
          }
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
          <FloatingActionButton secondary style={styles.floatingButton}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    )
  }
}

export default Dashboard
