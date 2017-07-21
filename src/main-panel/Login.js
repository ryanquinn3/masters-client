import React, { Component } from 'react';
import { Form, Container, Header, Grid, Message, Icon } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';

import { isLoggedIn } from '../auth';

import { WhiteText } from '../theme';
export default class Login extends Component {
    
    static isPrivate = false;
    state = {
        email: '',
        password: ''
    }

    fieldChanged(key, e){
        this.setState({ [key]: e.target.value });
    }

    onSubmit = () => {
        if(this.formValid()){
            this.props.onSubmit(this.state);
        }  
    }

    formValid = () => {
        const { password, email } = this.state;
        return password.length > 4 && isEmail(email);
    }

    renderError = () => {
      if(this.props.error){
        return ( 
          <Message attached='bottom' error>
            <Icon name="warning circle"/>
            {this.props.error.message}
          </Message>
        );
      }
      return null;
    }

    render() {
        const { password, email } = this.state;
        if(isLoggedIn()){
            return <Redirect to='/entry'/>
        }
        const ErrorPanel = this.renderError;
        return (
            <div>
                <Grid centered columns={1}>
                <Grid.Column mobile={16}>
                   <Message
                    attached
                    header={'Welcome to PGA Pick\'em'}
                    content='Sign in to make your picks'
                    />
                    <Form as='div' className="attached fluid segment">
                        <Form.Input 
                            label='Email'
                            type='email'
                            
                            value={email}
                            onChange={this.fieldChanged.bind(this, 'email')}/>
                        <Form.Input 
                            label='Password' 
                            type='password'
                            password={password}
                            onChange={this.fieldChanged.bind(this, 'password')}
                            />
                        <Form.Button 
                        disabled={!this.formValid()}
                        onClick={this.onSubmit}>
                        Log In
                        </Form.Button>
                    </Form>
                    <Message attached='bottom' warning>
                        <Icon name='help' />
                        Need to make an account?&nbsp;<Link to="/signup">Sign Up</Link>&nbsp;instead.
                    </Message>
                    <ErrorPanel/>
                </Grid.Column>
                </Grid>
            </div>
        )
    }
}