import React from 'react'

class BadgeForm extends React.Component {
    state = {};

    // handleChange = (e) => {
    //     // console.log( { 
    //     //     name: e.target.name,
    //     //     value: e.target.value 
    //     // } );

    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }

    handleClick = e => {
        console.log('Button was clicked');
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was submitted");
        console.log(this.props.formValues)
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group" >
                        <label >First Name</label>
                        <input onChange={this.props.onChange} 
                        type="text"
                        className="formControl"
                        name="firstName"
                        value={this.props.formValues.firstName}/>
                    </div>

                    <div className="form-group" >
                        <label >Last Name</label>
                        <input
                         value={this.props.formValues.lastName}
                         onChange={this.props.onChange} type="text"
                          className="formControl" name="lastName"/>
                    </div>

                    <div className="form-group" >
                        <label >Email</label>
                        <input 
                        value={this.props.formValues.email}
                        onChange={this.props.onChange}                         
                        className="formControl" 
                        type="email" name="email"/>
                    </div>

                    <div className="form-group" >
                        <label >Job title</label>
                        <input 
                        value={this.props.formValues.jobTitle}
                        onChange={this.props.onChange} type="text" 
                        className="formControl" name="jobTitle"/>
                    </div>

                    <div className="form-group" >
                        <label >Twitter</label>
                        <input 
                        value={this.props.formValues.twitter}
                        onChange={this.props.onChange} 
                        type="text" className="formControl" name="twitter"/>
                    </div>

                    <button  onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>

        )
    }
}

export default BadgeForm;