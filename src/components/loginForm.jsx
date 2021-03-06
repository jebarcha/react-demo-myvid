import React from 'react';
import { Redirect } from 'react-router-dom';
import Joi from 'joi-browser';
//import Joi from '@hapi/joi';
import Form from './common/form';
import auth from '../services/authService';

class LoginForm extends Form {
	state = {
		data: { username: '', password: '' },
		errors: {}
	};

	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password')
	};

	// username = React.createRef();
	// password = React.createRef();
	// componentDidMount() {
	// 	this.username.current.focus();
	// }

	doSubmit = async () => {
		// Call the server
		//console.log('Submitted');
		try {
			const { data } = this.state;
			await auth.login(data.username, data.password);
			//console.log(jwt);

			const { state } = this.props.location;
			window.location = state ? state.from.pathname : '/';

			//this.props.history.push('/');
			//window.location = '/';
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.username = ex.response.data;
				this.setState({ errors });
			}
		}
	};

	render() {
		if (auth.getCurrentUser()) return <Redirect to="/" />;
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('Login')}
				</form>
			</div>
		);
	}
}

export default LoginForm;
