import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import confLog from '../images/badge-header.svg'

import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'

class Badges extends React.Component {

   

    constructor(props){
        super(props)
        console.log('1. Contructor()')        
        this.state = {
            loading: true, 
            error: null,
            data: undefined
        }
    }

    componentDidMount(){


        this.fetchData()

        // console.log('3. componenteDidMount')
        // this.timeoutId = setTimeout(() => {
        //     this.setState({
        //         data: undefined
                
        //     })                              
        // }, 3000 );

        
    }

    fetchData = async () => {
        this.setState( { loading:true, error:null } );

        try {
            const data = await api.badges.list();
            this.setState({loading: false, data: data});
        } catch(error) {
            this.setState({loading: false, error: error});
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5. componenteDidUpdate')
        console.log({
            prevProps: prevProps, prevState: prevState
        })

    }

    componentWillUnmount() {
        console.log("6.- componentWillUnmount()")
        clearTimeout(this.timeoutId);
    }

    render() {


        if(this.state.loading === true) {
            return <PageLoading />;
        }

        if(this.state.error) {
            return <PageError error={this.state.error}></PageError>
        }

        console.log('2/4. Render')
        return (
            <React.Fragment>

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLog} alt="" />
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__list">                        
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>   
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Badges;