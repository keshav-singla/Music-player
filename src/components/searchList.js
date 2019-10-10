import React from 'react'
import getdata from '../actions/getData'
import { connect } from 'react-redux';

class SearchList extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
        }
    }

    componentDidMount = async () => {
        const data = await this.props.getdata();
        this.setState({ data })

        console.log(data);

    }

    render() {
        return (
            <div>
                {this.state.data.map((key, index) => {
                    return (
                        <div>
                            
                                <link
                                    to={{
                                        pathname: `${key.external_urls.spotify}`
                                    }}
                                >
                                   
                                    
                             
                                </link>
                         hello
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default (connect(null, { getdata })(SearchList));