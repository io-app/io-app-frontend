import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'
import DatePicker from 'material-ui/DatePicker'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import feathers from '../lib/feathers'

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
    position: 'fixed',
    bottom: '25px',
    right: '25px'
  }
}

class Dashboard extends Component {
  toggleDrawer = () => this.setState({drawerOpen: !this.state.drawerOpen})
  handleClose = () => this.setState({dialogOpen: false})

  state = {
    drawerOpen: false,
    dialogOpen: false,
    selectedCategory: undefined
  }

  render () {
    const actions = [
      <FlatButton
        label='Cancel'
        primary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label='Add Receipt'
        primary
        disabled
        onTouchTap={this.handleClose}
      />
    ]

    return (
      <div style={styles.main}>
        <AppBar
          title='Dashboard'
          iconElementRight={<FlatButton label='Logout' onClick={() => feathers.logout().then(feathers.emit('logout'))} />}
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
          <FloatingActionButton style={styles.floatingButton} onClick={() => this.setState({dialogOpen: true})}>
            <ContentAdd />
          </FloatingActionButton>
          <Dialog
            title='Add new receipt'
            actions={actions}
            modal
            open={this.state.dialogOpen}
          >
            Please enter the details of the receipt:
            <DatePicker hintText='Receipt date' floatingLabelText='Receipt date' />
            <SelectField
              floatingLabelText='Category'
              value={this.state.selectedCategory}
              onChange={(event, index, value) => this.setState({selectedCategory: value})}
            >
              <MenuItem value={1} primaryText='Workers' />
              <MenuItem value={2} primaryText='Projects' />
              <MenuItem value={3} primaryText='Misc' />
            </SelectField><br />
            <TextField
              floatingLabelText='Amount'
            />
          </Dialog>
        </div>
      </div>
    )
  }
}

export default Dashboard
